import axios from 'axios';

const mainUrl = "http://localhost:5000/";

class HttpService {

    private readonly BaseUrl: string;
    constructor(baseUrl: string) {
        this.BaseUrl = baseUrl;
    }
    async Get<T>(url: string, jwt?: string, data?: T) {
        try {
            const response = await axios.get(mainUrl + this.BaseUrl + url,
                {
                    params: data,
                    headers: { "Authorization": `Bearer ${jwt}` }
                })
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }
        }
    }

    async Post<T>(url: string, data: T, jwt?: string) {
        try {
            const response = await axios.post(mainUrl + this.BaseUrl + url, data, {
                headers: { "Authorization": `Bearer ${jwt}` }
            })
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }
        }
    }

    async Put<T>(url: string, data: T, jwt?: string) {
        try {
            const response = await axios.put(mainUrl + this.BaseUrl + url, data, { headers: { Authorization: `Bearer ${jwt}` } })
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }
        }
    }

    async Delete<T>(url: string, jwt?: string, data?: T) {
        try {
            const response = await axios.get(mainUrl + this.BaseUrl,
                {
                    params: data,
                    headers: { "Authorization": `Bearer ${jwt}` }
                })
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }
        }
    }



    async FileService<T>(url: string, file: T, jwt?: string) {
        try {
            const response = await axios.post(mainUrl + this.BaseUrl + url, file, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                    "Content-Type": 'multipart/form-data'
                }
            })
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }
        }
    }

    async GetFile(url: string, jwt?: string) {
        try {
            const response = await axios.get(mainUrl + this.BaseUrl + url, {
                responseType: "blob",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                }
            })
            return response;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return error.response;
            }
        }
    }
}

export default HttpService;