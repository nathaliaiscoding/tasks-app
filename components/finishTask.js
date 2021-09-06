const CheckButton = () => {
  let checkButton = document.createElement("button");
  checkButton.classList.add("check-button");
  checkButton.innerText = "check";
  checkButton.addEventListener("click", finishTask);
  return checkButton;
};

const finishTask = (event) => {
  let checkButton = event.target;
  let finishedTask = checkButton.parentElement;
  finishedTask.classList.toggle("done");
};

export default CheckButton;
