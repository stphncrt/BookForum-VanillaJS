import { router } from "../../Router.js";
import createElement from "../helper/createElement.js";
import { BooksContainerCreate } from "./booksContainer.js";

export const createInputBox = () => {
	const searchBarElement = createElement("div", "search-bar");
	const inputElement = createElement("input", "input");
	searchBarElement.appendChild(inputElement);
	const buttonElement = createElement("button", "button");
	buttonElement.textContent = "Search";
	buttonElement.addEventListener("click", () => {
		console.log(inputElement.value);
		BooksContainerCreate(inputElement.value);
		router("book", "", inputElement.value);
	});
	searchBarElement.appendChild(buttonElement);
	return searchBarElement;
};
