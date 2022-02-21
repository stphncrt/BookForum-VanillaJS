import createElement from "../helper/createElement.js";

export const createContentText = () => {
	const contentSectionElement = createElement("div", "content-section");
	const firstContentElement = createElement("div", "content-container");
	const secondContentElement = createElement("div", "content-container");
	const firstTitleElement = createElement("h4");
	firstTitleElement.innerText = "Deciding what to read next ?";
	const secondTitleElement = createElement("h4");
	secondTitleElement.innerText = " What are your friends reading ?";
	const firstParagraphElement = createElement("p");
	firstParagraphElement.innerText =
		"You are in the right place.Tell us what titles or genres you have enjoyed in the past, and we will give you surprisingly insightful recommendations.";
	const secondParagraphElement = createElement("p");
	secondParagraphElement.innerText =
		"Chances are your friends are discussing their favorite(and least favorite) books on Goodreads.";
	contentSectionElement.appendChild(firstContentElement);
	contentSectionElement.appendChild(secondContentElement);
	firstContentElement.appendChild(firstTitleElement);
	firstContentElement.appendChild(firstParagraphElement);
	secondContentElement.appendChild(secondTitleElement);
	secondContentElement.appendChild(secondParagraphElement);
	return contentSectionElement;
};
