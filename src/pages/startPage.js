"use strict";
import createElement from "../helper/createElement.js";
import { navbarCreate } from "../views/navBar.js";
import { challengeImgCreate } from "../views/challengeImg.js";
import { createInputBox } from "../views/inputBox.js";
import { BooksContainerCreate } from "../views/booksContainer.js";
import { createContentText } from "../views/contentText.js";

export const initStartPage = (userInterface, searchText) => {
	if (userInterface) {
		userInterface.innerHTML = "";
	}
	const contentElement = createElement("div", "startPage-content-container");
	const navBarElement = navbarCreate();
	const contentTextElement = createContentText();
	const booksContent = BooksContainerCreate(searchText);
	const challengeContainerElement = challengeImgCreate();
	const inputElement = createInputBox();
	contentElement.appendChild(navBarElement);
	contentElement.appendChild(challengeContainerElement);
	contentElement.appendChild(inputElement);
	contentElement.appendChild(contentTextElement);
	contentElement.appendChild(booksContent);
	userInterface.appendChild(contentElement);
};
