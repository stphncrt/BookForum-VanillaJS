"use-strict";
import createElement from "../helper/createElement.js";

export const navbarCreate = () => {
	const navBarElement = createElement("div", "navBar");
	const navBarImgElement = createElement("img");
	navBarImgElement.src =
		"https://s.gr-assets.com/assets/home/header_logo-8d96d7078a3d63f9f31d92282fd67cf4.png";
	navBarElement.appendChild(navBarImgElement);
	return navBarElement;
};
