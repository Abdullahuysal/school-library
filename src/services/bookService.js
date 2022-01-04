import axios from "axios"

export default class BookService{
    getBooks(){
        return axios.get("https://localhost:44373/api/books/getall");

    }
    getBookDetails(payload){
        return axios.get(`https://localhost:44373/api/books/getbook?bookname=${payload}`)
    }
    getBorrowedBooks(payload){
        return axios.get(`https://localhost:44373/api/borrowedbooks/get?studentId=${payload}`)
    }
}