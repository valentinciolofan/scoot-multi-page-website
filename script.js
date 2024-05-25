const accordion = document.querySelectorAll(".accordion-faq");



accordion.forEach(accordion => {
  accordion.addEventListener("click", () => {
    const faqSlideDown = accordion.children[1];
    faqSlideDown.classList.toggle("is-open");
  });
});
