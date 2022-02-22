"use strict";
import createElement from "../helper/createElement.js";
import { BooksContainerCreate } from "../views/booksContainer.js";
import { navbarCreate } from "../views/navBar.js";

export const bookPage = (userInterface, searchText) => {
	userInterface.innerHTML = "";
	const contentElement = createElement("div", "book-page");
	const navBarElement = navbarCreate();
	const booksContainerElement = BooksContainerCreate(searchText);
	contentElement.appendChild(navBarElement);
	contentElement.appendChild(booksContainerElement);
	userInterface.appendChild(contentElement);
};
