const accordion = document.querySelectorAll(".accordion-faq");
const hamburgerBtn = document.querySelector('#hamburger');
const navbar = document.querySelector(".navbar");
const closeModalBtn = document.querySelector('#closeModal');
const displayModal = document.querySelector('.message-us-overlay');
const openModal = document.querySelector('.cta-btn.locations-page');

accordion.forEach(accordion => {
  accordion.addEventListener("click", () => {
    const faqSlideDown = accordion.children[1];
    faqSlideDown.classList.toggle("is-open");
  });
});

hamburgerBtn.addEventListener("click", () => {
  navbar.classList.toggle("is-open");
})

openModal.addEventListener('click', () => {
  displayModal.style.display = 'flex';
})

closeModalBtn.addEventListener("click", () => {
  displayModal.style.display = 'none';
})