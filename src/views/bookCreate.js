import createElement from "../helper/createElement.js";

export const BookElementCreate = (num) => {
	const bookElement = createElement("div", "book-card-wrapper");
	bookElement.innerText = num;
	return bookElement;
};
