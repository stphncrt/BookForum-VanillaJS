"use strict";
import createElement from "../helper/createElement.js";
import { BookElementCreate } from "./bookCreate.js";
export const BooksContainerCreate = () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const containerElement = createElement("div", "books-container");
	arr.forEach((num) => {
		const bookElement = BookElementCreate(num);
		containerElement.appendChild(bookElement);
	});
	return containerElement;
};
