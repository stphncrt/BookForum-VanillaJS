"use strict";
import createElement from "../helper/createElement.js";
import { BooksContainerCreate } from "../views/booksContainer.js";

export const bookPage = (searchText) => {
	const contentElement = createElement("div", "book-page");
	const booksContainerElement = BooksContainerCreate(searchText);
	contentElement.appendChild(booksContainerElement);
	return contentElement;
};
