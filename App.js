"use strict";
import { router } from "./Router.js";

function AppLoad() {
	router("start");
}

window.addEventListener("load", AppLoad);
