import {queryStringify} from "./queryString";

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

