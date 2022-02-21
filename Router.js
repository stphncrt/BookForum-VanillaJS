"use strict";

import { initStartPage } from "./src/pages/startPage.js";
import { initDetailPage } from "./src/pages/detailPage.js";
import { USER_INTERFACE_ID } from "./constant.js";
export const router = (page, bookId) => {
	const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
	switch (page) {
		case "start":
			initStartPage(userInterfaceElement);
			break;
		case "detail":
			initDetailPage(userInterfaceElement, bookId);
			break;
	}
};
