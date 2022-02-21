"use strict";
import createElement from "../helper/createElement.js";
import { detailedBookCardCreate } from "../views/detailedBook.js";

export const initDetailPage = (userInterface, bookId) => {
	userInterface.innerHTML = "";
	const detailContentElement = createElement("div", "detail-content");
	const detailBookElement = detailedBookCardCreate(bookId);
	detailContentElement.appendChild(detailBookElement);
	userInterface.appendChild(detailContentElement);
};
