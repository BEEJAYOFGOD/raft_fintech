import AOS from "aos";
import "aos/dist/aos.css";
const testimonial_btns = document.querySelector("#testimonial_btns");
// const testimonails_container = document.querySelector("#testimonials");
const testimonail_slides = document.querySelectorAll(".testimonial_slide");
const faq_questions = Array.from(document.querySelectorAll(".faq_article"));
const faq_answers = Array.from(document.querySelectorAll(".faq_ans"));
const faq_arrows = Array.from(document.querySelectorAll(".faq_arrow"));

// Initialize AOS
AOS.init({
  offset: 200,
  duration: 1000, // Animation duration (in ms)
  once: true, // Whether animation should happen only once
});

faq_questions.forEach((question) => {
  question.addEventListener("click", () => {
    const arrow_index = faq_questions.indexOf(question);
    const current_faq_answer = faq_answers[arrow_index];
    const current_faq_arrow = faq_arrows[arrow_index];

    // Replace alert with console.log for mobile debugging
    console.log("FAQ clicked", {
      arrow_index,
      current_faq_answer,
      current_faq_arrow,
    });

    current_faq_answer.classList.toggle("hidden");
    current_faq_answer.classList.toggle("flex");
    current_faq_arrow.classList.toggle("rotate-180");
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
  if (!button) return; // Early exit if no button is clicked

  if (button.classList.contains("testimonial_right")) {
    index = index < no_of_moves ? index + 1 : 0;
  } else {
    index = index === 0 ? no_of_moves : index - 1;
  }

  moveToSlideIndex();
});
