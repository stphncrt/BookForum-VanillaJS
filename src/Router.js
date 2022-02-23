"use strict";

import { initStartPage } from "./pages/startPage.js";
import { initDetailPage } from "./pages/detailPage.js";
import { USER_INTERFACE_ID } from "./constant.js";
export const router = (page, bookId, searchText) => {
	const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
	switch (page) {
		case "start":
			initStartPage(userInterfaceElement, searchText);
			break;
		case "detail":
			initDetailPage(userInterfaceElement, bookId);
			break;
	}
};
