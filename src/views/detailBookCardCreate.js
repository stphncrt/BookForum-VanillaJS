import createElement from "../helper/createElement.js";

export const DetailBookCardCreate = (book) => {
	const detailBookElement = createElement("div", "cardWrapper");
	const firstWrapperElement = createElement("div", "infoWrapper");
	const imageElement = createElement("img", "cardImage");
	imageElement.src = book?.volumeInfo?.imageLinks?.small;
	imageElement.alt = book?.volumeInfo?.title;
	const authorElement = createElement("h3", "author");
	authorElement.innerText = book?.volumeInfo?.authors[0];
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
	bookTitleElement.innerText = book?.volumeInfo?.title;
	secondWrapperElement.appendChild(descriptionElement);
	descriptionElement.innerText = book?.volumeInfo?.description;
	secondWrapperElement.appendChild(detailInfoElement);
	detailInfoElement.innerText = `Category: ${book?.volumeInfo?.categories[0]}, ISBN: ${book?.volumeInfo?.industryIdentifiers[1]?.identifier} <br /> Publish Date: ${book?.volumeInfo?.publishedDate}, Page Count:${book?.volumeInfo?.pageCount}
  `;
	detailBookElement.appendChild(secondWrapperElement);

	return detailBookElement;
};
