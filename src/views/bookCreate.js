import createElement from "../helper/createElement.js";

export const BookElementCreate = (book) => {
	const bookElement = createElement("div", "book-card-wrapper");
	const titleElement = createElement("h5");
	titleElement.innerText = book?.volumeInfo?.title;
	bookElement.appendChild(titleElement);
	const imageElement = createElement("img");
	imageElement.src = book?.volumeInfo?.imageLinks?.thumbnail;
	bookElement.appendChild(imageElement);
	const authorElement = createElement("h6");
	authorElement.innerText = book?.volumeInfo?.authors["0"];
	bookElement.appendChild(authorElement);
	return bookElement;
};
