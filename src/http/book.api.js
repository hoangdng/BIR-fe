import HttpClient from "./httpClient";

const END_POINT = "/books";
const myBookClient = new HttpClient(
  "https://books-i-read-backend.herokuapp.com/"
);

const postBook = book => myBookClient.httpClient.post(END_POINT, book);

const getBook = bookId => myBookClient.httpClient.get(`${END_POINT}/${bookId}`);

const getAllBook = () => myBookClient.httpClient.get(`${END_POINT}`);

const updateBook = (bookId, book) =>
  myBookClient.httpClient.put(`${END_POINT}/${bookId}`, book);

export {
  postBook as postBookApi,
  getBook as getBookApi,
  getAllBook as getAllBookApi,
  updateBook as updateBookApi
};
