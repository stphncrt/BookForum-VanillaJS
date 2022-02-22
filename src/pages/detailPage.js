"use strict";
import createElement from "../helper/createElement.js";
import { detailedBookContainer } from "../views/detailedBook.js";

export const initDetailPage = (userInterface, bookId) => {
	userInterface.innerHTML = "";
	const detailContentElement = createElement("div", "detail-content");
	const detailBookElement = detailedBookContainer(bookId);
	detailContentElement.appendChild(detailBookElement);
	userInterface.appendChild(detailContentElement);
};
