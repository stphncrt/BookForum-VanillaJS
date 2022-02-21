"use strict";

export const fetchData = async (url) => {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error("Fetch Data Failed");
	}

	return await response.json();
};
