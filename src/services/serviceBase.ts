enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

const defaultConfig = (method: METHODS, data?: { [key: string]: any }) => {
    return {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            //'apikey': import.meta.env.VITE_API_KEY
        },
        body: data ? JSON.stringify(data) : null
    }
}

export const qGet = async (servicePath: string, data: { [key: string]: any } = {}) => {
    const url = `${import.meta.env.VITE_API_DOMAIN}${servicePath}`;
    const params = {
        apikey: import.meta.env.VITE_API_KEY,
        ...data
    }
    
    const response = await fetch(`${url}?${new URLSearchParams(params).toString()}`, { ...defaultConfig(METHODS.GET) });
    return response.json();
}

export const qPost = async (servicePath: string, data: { [key: string]: any } = {}) => {
    const url = `${import.meta.env.VITE_API_DOMAIN}${servicePath}`;

    const response = await fetch(url, { ...defaultConfig(METHODS.POST, data) });
    return response.json();
}

export const qPut = async (servicePath: string, data: { [key: string]: any } = {}) => {
    const url = `${import.meta.env.VITE_API_DOMAIN}${servicePath}`;

    const response = await fetch(url, { ...defaultConfig(METHODS.PUT, data) });
    return response.json();
}

export const qDelete = async (servicePath: string, data: { [key: string]: any } = {}) => {
    const url = `${import.meta.env.VITE_API_DOMAIN}${servicePath}`;

    const response = await fetch(url, { ...defaultConfig(METHODS.DELETE, data) });
    return response.json();
}