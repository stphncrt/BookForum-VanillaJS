"use strict";
import createElement from "../helper/createElement.js";
import { BookElementCreate } from "./bookCreate.js";
import { API_KEY } from "../../constant.js";
import { fetchData } from "../helper/fetchData.js";
import { router } from "../../Router.js";

export const BooksContainerCreate = (searchParam) => {
	console.log(searchParam);
	const url = `https://www.googleapis.com/books/v1/volumes?q=${
		!searchParam ? "brain" : searchParam
	}:keyes&key=${API_KEY}&maxResult=40`;

	const containerElement = createElement("div", "books-container");
	containerElement.innerHTML = "";
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
