import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://61ea43897bc0550017bc6677.mockapi.io',
    header: {
        'Content-Type': 'application/json' 
    }
})

export default axiosClient