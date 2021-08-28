const allLi = document.querySelectorAll(".fields li");
const submitBtn = document.querySelector(".submit-btn");
const ulResponsiveness = document.querySelector(
  "ul.fields[data-item='responsiveness']"
);
const ulAdvising = document.querySelector("ul.fields[data-item='advising']");
const ulTrustworthiness = document.querySelector(
  "ul.fields[data-item='trustworthiness']"
);
const ulService = document.querySelector("ul.fields[data-item='service']");

// fill rating on click
const rating = (e) => {
  let current = e.target.parentElement;
  while (current) {
    current.setAttribute("data-value", 1);
    current = current.previousElementSibling;
  }
  current = e.target.parentElement.nextElementSibling;
  while (current) {
    current.setAttribute("data-value", 0);
    current = current.nextElementSibling;
  }
};

// submit form and show data on console
const submitForm = (e) => {
  e.preventDefault();
  let r = 0,
    a = 0,
    s = 0,
    t = 0;

  for (let i = 0; i < ulResponsiveness.children.length; i++)
    parseInt(ulResponsiveness.children[i].getAttribute("data-value")) && r++;

  for (let i = 0; i < ulAdvising.children.length; i++)
    parseInt(ulAdvising.children[i].getAttribute("data-value")) && a++;

  for (let i = 0; i < ulTrustworthiness.children.length; i++)
    parseInt(ulTrustworthiness.children[i].getAttribute("data-value")) && t++;

  for (let i = 0; i < ulService.children.length; i++)
    parseInt(ulService.children[i].getAttribute("data-value")) && s++;

  console.log(`${r} out of 5 -- Responsiveness rating `);
  console.log(`${a} out of 5 -- Advising rating `);
  console.log(`${t} out of 5 -- Trust rating `);
  console.log(`${s} out of 5 -- Service rating `);
};

// event listeners
allLi.forEach((li) => {
  li.onclick = rating;
});
submitBtn.onclick = submitForm;
