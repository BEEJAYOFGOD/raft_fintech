let testimonial_btns = document.querySelector("#testimonial_btns");
let testimonails_container = document.querySelector("#testimonials");
let testimonail_slides = document.querySelectorAll(".testimonial_slide");
let faq_arrows = Array.from(document.querySelectorAll(".faq_arrow"));
let faq_answers = Array.from(document.querySelectorAll(".faq_ans"));

faq_arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    let arrow_index = faq_arrows.indexOf(arrow);
    let current_faq_answer = faq_answers[arrow_index];
    let current_faq_arrow = faq_arrows[arrow_index];
    let faq_questionisHidden = current_faq_answer.classList.contains("hidden");

    if (faq_questionisHidden) {
      current_faq_answer.classList.replace(`hidden`, `flex`);
      current_faq_arrow.classList.add("rotate-180");
      // faq_answer.classList.add("")
    } else {
      current_faq_answer.classList.replace(`flex`, `hidden`);
      current_faq_arrow.classList.replace("rotate-180", "rotate-0");
    }
  });
});

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
