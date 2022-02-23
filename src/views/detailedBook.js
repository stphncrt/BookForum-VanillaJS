import createElement from "../helper/createElement.js";
import { API_KEY } from "../constant.js";
import { fetchData } from "../helper/fetchData.js";
import { DetailBookCardCreate } from "./detailBookCardCreate.js";
export const detailedBookContainer = (bookId) => {
	const containerElement = createElement("div", "outer-wrapper");
	const url = `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`;
	fetchData(url)
		.then((book) => containerElement.appendChild(DetailBookCardCreate(book)))
		.then((data) => console.log(data));

	return containerElement;
};
