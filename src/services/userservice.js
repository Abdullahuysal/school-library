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
  getUserInfobynumber(payload){
    return axios.get(`https://localhost:44373/api/borrowedbooks/getinfo?studentNumber=${payload}`);
  }

  AdminaddBooks(payload) {
    return axios.post("https://localhost:44373/api/admins/add", payload);
  }

  AdminsendEmail(payload){
    return axios.get(`https://localhost:44373/api/borrowedbooks/sendemail?studentNumber=${payload}`);
  }
  AdminaddBorrowedBooks(payload){
    return axios.post("https://localhost:44373/api/borrowedbooks/giveborrowedbook",payload);
  }
  AdminTakeBorrowedBooks(payload){
    return axios.get(`https://localhost:44373/api/borrowedbooks/takebook?studentNumber=${payload}`);
  }
  AdmingetBorrowedBooks(payload){
    return axios.get(`https://localhost:44373/api/borrowedbooks/getborrowedbook?studentNumber=${payload}`);
  }

}
