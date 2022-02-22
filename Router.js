"use strict";

import { initStartPage } from "./src/pages/startPage.js";
import { initDetailPage } from "./src/pages/detailPage.js";
import { bookPage } from "./src/pages/book.js";
import { USER_INTERFACE_ID } from "./constant.js";
export const router = (page, bookId, searchText) => {
	const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
	switch (page) {
		case "start":
			initStartPage(userInterfaceElement);
			break;
		case "detail":
			initDetailPage(userInterfaceElement, bookId);
			break;
		case "book":
			bookPage(userInterfaceElement, searchText);
			break;
	}
};
