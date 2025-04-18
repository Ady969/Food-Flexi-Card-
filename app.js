const container = document.querySelector(".container");
const frames = document.querySelectorAll(".frame");
container.addEventListener("click", (event) => {
  deleteFocusClass();
  event.target.classList.add("focussed");
});

function deleteFocusClass() {
  frames.forEach((frame) => {
    frame.classList.remove("focussed");
  });
}
