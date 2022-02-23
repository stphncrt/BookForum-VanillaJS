import createElement from "../helper/createElement.js";
import { router } from "../../Router.js";

export const createInputBox = () => {
	const handleSearch = () => {
		console.log(inputElement.value);
		router("start", "", inputElement.value);
	};
	const searchBarElement = createElement("div", "search-bar");
	const inputElement = createElement("input", "input");
	inputElement.setAttribute("placeholder", "Find something you are passionate for..");
	searchBarElement.appendChild(inputElement);
	const buttonElement = createElement("button", "button");
	buttonElement.textContent = "Search";
	buttonElement.addEventListener("click", handleSearch);
	searchBarElement.appendChild(buttonElement);
	return searchBarElement;
};
