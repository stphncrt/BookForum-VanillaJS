"use strict";
import createElement from "../helper/createElement.js";
import { BooksContainerCreate } from "../views/booksContainer.js";
import { navbarCreate } from "../views/navBar.js";
import { challengeImgCreate } from "../views/challengeImg.js";
import { createContentText } from "../views/contentText.js";
export const initStartPage = (userInterface) => {
	const contentElement = createElement("div", "startPage-content-container");
	const navBarElement = navbarCreate();
	const booksContainerElement = BooksContainerCreate();
	const challengeContainerElement = challengeImgCreate();
	const contentTextElement = createContentText();
	contentElement.appendChild(navBarElement);
	contentElement.appendChild(challengeContainerElement);
	contentElement.appendChild(contentTextElement);
	contentElement.appendChild(booksContainerElement);
	userInterface.appendChild(contentElement);
};
