let accordion = document.querySelector(".accordion-homepage");
let faq = document.createElement("section");
faq.classList.add("parent");
faq.innerHTML = `<h3>My new FAQ</h3>`;
accordion.appendChild(faq);
