import axiosClient from "./axiosClient"

const testApi = {
    getAll() {
        const url = '/products'
        return axiosClient.get(url, {params: {
            page: 1,
            limit: 3,
        }})
    }
}

export default testApi