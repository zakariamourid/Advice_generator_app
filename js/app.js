const advice = document.querySelector(".advice");
const button = document.querySelector(".dice");
const adviceId = document.querySelector(".title");
button.addEventListener("click", getRandomAdvice);
// #both functions are working
// function getRandomAdvice() {
//   fetch("https://api.adviceslip.com/advice")
//     .then((data) => data.json())
//     .then((data) => {
//       advice.textContent = data.slip.advice;
//       adviceId.textContent = `Advice # ${data.slip.id}`;
//     });
// }
async function getRandomAdvice() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  advice.textContent = data.slip.advice;
  adviceId.textContent = `Advice # ${data.slip.id}`;
  button.style.backgroundColor = "grey";
  button.style.pointerEvents = "none";
  setTimeout(() => {
    button.style.backgroundColor = "#89fbb2";
    button.style.pointerEvents = "auto";
  }, 2000);
}
