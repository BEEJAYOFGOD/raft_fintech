let testimonial_btns = document.querySelector("#testimonial_btns");
let testimonails_container = document.querySelector("#testimonials");
let testimonail_slides = document.querySelectorAll(".testimonial_slide");

let index = 0;
let no_of_moves;
function moveToSlideIndex() {
  testimonail_slides.forEach((slide) => {
    slide.style.transform = window.matchMedia("(max-width: 740px)").matches
      ? `translateX(-${index * 100}%)`
      : `translateX(-${index * 300}%)`;
  });
}

no_of_moves = window.matchMedia("(max-width: 740px)").matches
  ? testimonail_slides.length - 1
  : testimonail_slides.length / 3 - 1;

window.addEventListener("resize", () => {
  no_of_moves = window.matchMedia("(max-width: 740px)").matches
    ? testimonail_slides.length - 1
    : testimonail_slides.length / 3 - 1;
});

alert(testimonail_slides.length);

testimonial_btns.addEventListener("click", (e) => {
  if (e.target.classList.contains("testimonial_right")) {
    if (index < no_of_moves) {
      index += 1;
      moveToSlideIndex();
    } else if (index == no_of_moves) {
      index = 0;
      moveToSlideIndex();
    }
  } else {
    if (index == 0) {
      index = no_of_moves;
      moveToSlideIndex();
    } else {
      index -= 1;
      moveToSlideIndex();
    }
  }
});
