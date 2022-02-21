"use strict";
import createElement from "../helper/createElement.js";
import { BooksContainerCreate } from "../views/booksContainer.js";
import { navbarCreate } from "../views/navBar.js";
import { challengeImgCreate } from "../views/challengeImg.js";
import { createContentText } from "../views/contentText.js";
import { router } from "../../Router.js";

export const initStartPage = (userInterface) => {
	const changePage = () => {
		(userInterface.innerHTML = ""), router("detail");
	};

	const contentElement = createElement("div", "startPage-content-container");
	const navBarElement = navbarCreate();
	const booksContainerElement = BooksContainerCreate();
	booksContainerElement.addEventListener("click", changePage);
	const challengeContainerElement = challengeImgCreate();
	const contentTextElement = createContentText();
	contentElement.appendChild(navBarElement);
	contentElement.appendChild(challengeContainerElement);
	contentElement.appendChild(contentTextElement);
	contentElement.appendChild(booksContainerElement);
	userInterface.appendChild(contentElement);
};
