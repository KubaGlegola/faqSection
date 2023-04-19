/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import "../styles/home-page.scss";

const toggleIcons = document.querySelectorAll(".item__toggle-icon");
const items = document.querySelectorAll(".item");
let currentVisibleItem;

toggleIcons.forEach((icon, index) =>
  icon.addEventListener("click", () => {
    items[index].getAttribute("data-is-answer-visible") === "1"
      ? items[index].setAttribute("data-is-answer-visible", "0")
      : items[index].setAttribute("data-is-answer-visible", "1");
  })
);
