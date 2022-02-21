"use strict";
import createElement from "../helper/createElement.js";
import { BookElementCreate } from "./bookCreate.js";
import { API_KEY } from "../../constant.js";
import { fetchData } from "../helper/fetchData.js";
import { router } from "../../Router.js";
let searchText = "";
const url = `https://www.googleapis.com/books/v1/volumes?q=${
	!searchText ? "brain" : searchText
}:keyes&key=${API_KEY}&maxResult=40`;

// export let bookId = "";
// const onBookSelected = (e) => {
// 	bookId = e.currentTarget.id;
// };

export const BooksContainerCreate = () => {
	const containerElement = createElement("div", "books-container");
	fetchData(url)
		.then((data) => data.items)
		.then((books) => {
			console.log(books);
			books.forEach((book) => {
				const bookElement = BookElementCreate(book);
				bookElement.addEventListener("click", () => {
					router("detail", book.id);
				});
				containerElement.appendChild(bookElement);
			});
		});
	return containerElement;
};
