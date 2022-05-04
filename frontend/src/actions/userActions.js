import axiosInstance from "../utils/axiosInstance";

export const register = (data) => {
    try {
        axiosInstance.post('/users/register', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => console.log(res))
    }
    catch (err) {
        console.error(err)
    }
}