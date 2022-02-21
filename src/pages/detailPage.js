"use strict";
import createElement from "../helper/createElement.js";
import { detailedBookCardCreate } from "../views/detailedBook.js";
export const initDetailPage = (userInterface) => {
	const detailContentElement = createElement("div", "detail-content");
	const detailBookElement = detailedBookCardCreate();
	detailContentElement.appendChild(detailBookElement);
	userInterface.appendChild(detailContentElement);
};
