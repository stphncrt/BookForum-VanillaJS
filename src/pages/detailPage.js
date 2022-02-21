"use strict";
import createElement from "../helper/createElement.js";

export const initDetailPage = (userInterface) => {
	const detailContentElement = createElement("div", "detail-content");
	detailContentElement.innerText = "detail page";
	userInterface.appendChild(detailContentElement);
};
