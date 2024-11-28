const testimonial_btns = document.querySelector("#testimonial_btns");
const testimonails_container = document.querySelector("#testimonials");
const testimonail_slides = document.querySelectorAll(".testimonial_slide");
const faq_questions = Array.from(document.querySelectorAll(".faq_article"));
const faq_answers = Array.from(document.querySelectorAll(".faq_ans"));
const faq_arrows = Array.from(document.querySelectorAll(".faq_arrow"));

faq_questions.forEach((question) => {
  question.addEventListener("click", () => {
    const arrow_index = faq_questions.indexOf(question);
    const current_faq_answer = faq_answers[arrow_index];
    const current_faq_arrow = faq_arrows[arrow_index];
    const faq_questionisHidden =
      current_faq_answer.classList.contains("hidden");

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
