import axios from "axios"

export default class UserService {
    getUsers(){
        return axios.get("http://localhost:3000/Users")
    }
}