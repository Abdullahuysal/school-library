import axios from "axios";

export default class UserService {
  login(payload) {
    return axios.post("https://localhost:44373/api/auth/login", payload);
  }
  register(payload) {
    return axios.post("https://localhost:44373/api/auth/register", payload);
  }
  getUserInfo(payload) {
    var url = `https://localhost:44373/api/students/getstudentinfo?studentId=${payload}`;
    return axios.get(url);
  }

  AdminaddBooks(payload) {
    return axios.post("https://localhost:44373/api/admins/add", payload);
  }

}
