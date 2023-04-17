import { model } from "./model";
import { templates } from "./templates";
import "../css/style.css";

const $site = document.querySelector("#site");

const key = "title";

model.forEach((block) => {
  const toHTML = templates[block.type];
  if (toHTML) {
    $site.insertAdjacentHTML("beforeend", toHTML(block));
  }
});
