"use strict";
import createElement from "../helper/createElement.js";
import { navbarCreate } from "../views/navBar.js";
import { challengeImgCreate } from "../views/challengeImg.js";
import { createContentText } from "../views/contentText.js";
import { createInputBox } from "../views/inputBox.js";

export const initStartPage = (userInterface, searchText) => {
	const contentElement = createElement("div", "startPage-content-container");
	const navBarElement = navbarCreate();
	const challengeContainerElement = challengeImgCreate();
	const inputElement = createInputBox(searchText);
	const contentTextElement = createContentText();
	contentElement.appendChild(navBarElement);
	contentElement.appendChild(challengeContainerElement);
	contentElement.appendChild(inputElement);
	contentElement.appendChild(contentTextElement);
	userInterface.appendChild(contentElement);
};
