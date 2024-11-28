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

    alert("helllo");
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

function isMobileView() {
  return window.innerWidth <= 740;
}

function calculateNoOfMoves() {
  no_of_moves = isMobileView()
    ? testimonail_slides.length - 1
    : Math.floor(testimonail_slides.length / 3) - 1;
}

function moveToSlideIndex() {
  calculateNoOfMoves(); // Always recalculate
  testimonail_slides.forEach((slide) => {
    slide.style.transform = isMobileView()
      ? `translateX(-${index * 100}%)`
      : `translateX(-${index * 300}%)`;
  });
}

// window.addEventListener("resize", moveToSlideIndex); // Simplified resize handling
calculateNoOfMoves();

testimonial_btns.addEventListener("click", (e) => {
  const button = e.target.closest(".testimonial_right, .testimonial_left");

  if (button) {
    if (button.classList.contains("testimonial_right")) {
      if (index < no_of_moves) {
        index += 1;
      } else {
        index = 0;
      }
    } else if (button.classList.contains("testimonial_left")) {
      if (index === 0) {
        index = no_of_moves;
      } else {
        index -= 1;
      }
    }

    moveToSlideIndex();
  }
});
