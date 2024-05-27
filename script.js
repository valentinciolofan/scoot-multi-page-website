const accordion = document.querySelectorAll(".accordion-faq");
const hamburgerBtn = document.querySelector('#hamburger');
const navbar = document.querySelector(".navbar");
console.log(hamburgerBtn);


accordion.forEach(accordion => {
  accordion.addEventListener("click", () => {
    const faqSlideDown = accordion.children[1];
    faqSlideDown.classList.toggle("is-open");
  });
});

hamburgerBtn.addEventListener("click", () => {
  navbar.classList.toggle("is-open");
})