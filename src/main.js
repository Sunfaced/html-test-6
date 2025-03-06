import "normalize.css";
import "./style.scss";

const timer = document.querySelector(".main__offer-timer");
const sliderBoxes = document.querySelectorAll(".slider__box");
const sliderTitles = document.querySelectorAll(".slider__box-title");
const sliderPrices = document.querySelectorAll(".price__value");
const sliderButton = document.querySelectorAll(".slider__box-btn");

const layout1 = document.querySelector(".layout__img-1");
const layout2 = document.querySelector(".layout__img-2");

let count = 600;

const interval = setInterval(() => {
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  timer.textContent = `00 : ${minutes < 10 ? "0" + minutes : minutes} : ${
    seconds < 10 ? "0" + seconds : seconds
  }`;
  count--;
  if (count <= 0) count = 600;
}, 1000);

sliderBoxes.forEach((item, index) => {
  item.addEventListener("mouseover", () => handleFocus(index));
  item.addEventListener("mouseout", () => handleBlur(index));
});

function handleFocus(index) {
  sliderTitles[index].classList.add("box-title-focus");
  sliderTitles[index].textContent = "One time offer!";
  sliderPrices[index].classList.add("price__value-focus");
  sliderBoxes[index].classList.add("slider__box-focus");
  sliderButton[index].classList.add("btn-focus");
}

function handleBlur(index) {
  sliderTitles[index].classList.remove("box-title-focus");
  sliderTitles[index].textContent = "";
  sliderPrices[index].classList.remove("price__value-focus");
  sliderBoxes[index].classList.remove("slider__box-focus");
  sliderButton[index].classList.remove("btn-focus");
}

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  layout1.style.transform = `translate(
    ${x * -30}px, 
    ${y * -30}px
  )`;

  layout2.style.transform = `translate(
    ${x * 30}px, 
    ${y * 30}px
  )`;
});
