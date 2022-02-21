import createElement from "../helper/createElement.js";

export const challengeImgCreate = () => {
	const challengeContainerElement = createElement("div");
	const challengeImgElement = createElement("img", "challenge-img");
	challengeImgElement.src = "https://images.gr-assets.com/challenges/2022/facebook.png";
	challengeContainerElement.appendChild(challengeImgElement);

	return challengeImgElement;
};
