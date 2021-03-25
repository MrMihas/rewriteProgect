import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "d6d45361-ff6e-48f7-9165-d0a0123b12e6"
    }
});

export const usersAPI = {
     getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response =>{
            return response.data;
        });
    }

}


