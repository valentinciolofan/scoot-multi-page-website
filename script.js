const faqArrow = document.querySelectorAll(".faq-arrow");

faqArrow.forEach(arrow => {
  arrow.addEventListener("click", () => {
    const faqSlideDown = arrow.parentElement.parentElement.children[1];
    faqSlideDown.classList.toggle("is-open");
  });
});
