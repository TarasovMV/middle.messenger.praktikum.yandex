/*РЕАЛИЗАЦИЯ ВАЛИДАЦИИ*/
export type ValidationFunction = (value: string) => boolean;

export interface ValidationObject {
    [key: string]: ValidationFunction;
}

export class FormValidator {
    private errors: string[] = [];
    private fields: (HTMLInputElement | HTMLTextAreaElement)[];
    private readonly validations: ValidationObject;

    constructor(form: HTMLFormElement, validations: ValidationObject) {
        this.fields = Array.from(
            form.querySelectorAll("input, textarea")
        ) as (HTMLInputElement | HTMLTextAreaElement)[];
        this.validations = validations;

        this.fields.forEach((field) => {
            field.addEventListener("focus", () => this.hideError(field));
            field.addEventListener("blur", () => this.validateField(field));
        });

        form.addEventListener("submit", (event) => this.validateForm(event));
    }

    private validateField(field: HTMLInputElement | HTMLTextAreaElement) {
        const value = field.value.trim();
        const validation = this.validations[field.name];
        if (validation && !validation(value)) {
            this.showError(field, "Ошибка валидации");
        } else {
            this.hideError(field);
        }
    }

    private validateForm(event: Event) {
        this.errors = [];
        this.fields.forEach((field) => this.validateField(field));
        if (this.errors.length > 0) {
            event.preventDefault();
        }
    }

    private showError(field: HTMLInputElement | HTMLTextAreaElement, error: string) {
        const errorElem = field.nextElementSibling as HTMLElement;
        errorElem.innerText = error;
        errorElem.style.display = "block";
        this.errors.push(error);
    }

    private hideError(field: HTMLInputElement | HTMLTextAreaElement) {
        const errorElem = field.nextElementSibling as HTMLElement;
        errorElem.innerText = "";
        errorElem.style.display = "none";
    }
}

// Использование
// const form = document.querySelector("form") as HTMLFormElement;
// const validations: ValidationObject = {
//     first_name: (value: string) => /^[a-zA-Zа-яА-Я]+(?:-[a-zA-Zа-яА-Я]+)*$/.test(value),
//     second_name: (value: string) => /^[a-zA-Zа-яА-Я]+(?:-[a-zA-Zа-яА-Я]+)*$/.test(value),
//     login: (value: string) => /^[a-zA-Z][a-zA-Z0-9-_]{2,19}$/.test(value),
//     email: (value: string) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
//     password: (value: string) => /^(?=.*\d)(?=.*[A-Z]).{8,40}$/.test(value),
//     phone: (value: string) => /^\+?\d{10,15}$/.test(value),
//     message: (value: string) => value.trim() !== "",
// };
//
// const validator = new FormValidator(form, validations);

export function queryStringify(data: Record<string, unknown>): string {
    const params = new URLSearchParams();

    for (const key in data) {
        if (Array.isArray(data[key])) {
            params.append(key, (data[key] as Array<string>).join(','));
        } else if (typeof data[key] === 'object' && data[key] !== null) {
            params.append(key, '[object Object]');
        } else {
            params.append(key, String(data[key]));
        }
    }

    let queryString = '?' + params.toString();
    queryString = queryString
        .split('%2C')
        .join(',')
        .split('%5B')
        .join('[')
        .split('%5D')
        .join(']')
        .split('+')
        .join(' ');

    return queryString;
}


/*РЕАЛИЗАЦИЯ ЗАПРОСОВ*/

export enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export interface Options {
    method?: METHODS;
    data?: Record<string, unknown>;
    headers?: Record<string, string>;
    timeout?: number;
}

export class HTTPTransport {
    get = (url: string, options: Options = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

    put = (url: string, options: Options = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    post = (url: string, options: Options = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    delete = (url: string, options: Options = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request = (url: string, options: Options, timeout = 5000): Promise<XMLHttpRequest> => {
        const {method = METHODS.GET, data, headers} = options;

        return new Promise((resolve, reject) => {
            const stringifyData = queryStringify(data || {});

            if (method === METHODS.GET) {
                url = `${url}${stringifyData}`;
            }

            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onload = function () {
                resolve(xhr);
            };

            if (headers) {
                for (const [key, value] of Object.entries(headers)) {
                    if (typeof value === 'string') {
                        xhr.setRequestHeader(key, value);
                    }
                }
            }

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}

