import createElement from "../helper/createElement.js";
const book = {
	title: "react",
	description: "react is a good book",
	author: "micheal",
	category: "science",
	pageCount: 50,
	publishedDate: "2013.06.04",
	isbn: 636736737,
	image: "https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png",
};
export const detailedBookCardCreate = (bookId) => {
	console.log(bookId);
	const detailBookElement = createElement("div", "cardWrapper");
	const firstWrapperElement = createElement("div", "infoWrapper");
	const imageElement = createElement("img", "cardImage");
	imageElement.src = "https://s.gr-assets.com/";
	const authorElement = createElement("h3", "author");
	authorElement.innerText = book.author;
	const otherBookElement = createElement("h5");
	otherBookElement.innerText = "See other books of the author.";
	firstWrapperElement.appendChild(imageElement);
	firstWrapperElement.appendChild(authorElement);
	firstWrapperElement.appendChild(otherBookElement);
	detailBookElement.appendChild(firstWrapperElement);
	const secondWrapperElement = createElement("div", "infoWrapper");
	const bookTitleElement = createElement("h3");
	const descriptionElement = createElement("p");
	const detailInfoElement = createElement("p", "smallCase");
	secondWrapperElement.appendChild(bookTitleElement);
	bookTitleElement.innerText = book.title;
	secondWrapperElement.appendChild(descriptionElement);
	descriptionElement.innerText = book.description;
	secondWrapperElement.appendChild(detailInfoElement);
	detailInfoElement.innerText = `Category: ${book.category}, ISBN: ${book.isbn} <br /> Publish Date: ${book.publishedDate}, Page Count:${book.pageCount}
  `;
	detailBookElement.appendChild(secondWrapperElement);

	return detailBookElement;
};
