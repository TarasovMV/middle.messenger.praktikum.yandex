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
