'use strict';

const mainSlider = new Slider("main-slider");

const mainSliderSlideLeftButton = document.querySelector(".main-slider__slide-left-btn");
const mainSliderSlideRightButton = document.querySelector(".main-slider__slide-right-btn");
mainSliderSlideLeftButton.addEventListener("click", mainSlider.slideLeft);
mainSliderSlideRightButton.addEventListener("click", mainSlider.slideRight);

function watchSliderState(state) {
	if (state.position == mainSlider.POSITION_START) {
		mainSliderSlideLeftButton.disabled = true;
		mainSliderSlideLeftButton.classList.add("btn--disabled");
		mainSliderSlideRightButton.disabled = false;
		mainSliderSlideRightButton.classList.remove("btn--disabled");
	} else if (state.position == mainSlider.POSITION_END) {
		mainSliderSlideLeftButton.disabled = false;
		mainSliderSlideLeftButton.classList.remove("btn--disabled");
		mainSliderSlideRightButton.disabled = true;
		mainSliderSlideRightButton.classList.add("btn--disabled");
	} else {
		mainSliderSlideLeftButton.disabled = false;
		mainSliderSlideLeftButton.classList.remove("btn--disabled");
		mainSliderSlideRightButton.disabled = false;
		mainSliderSlideRightButton.classList.remove("btn--disabled");
	}
}

mainSlider.setCallback(watchSliderState);