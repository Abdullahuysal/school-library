import axios from "axios"

export default class BookService{
    getBooks(){
        return axios.get("https://localhost:44373/api/books/getall");

    }
}