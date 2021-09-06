const DeleteButton = () => {
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", deleteTask);
  return deleteButton;
};

const deleteTask = (event) => {
  let deleteButton = event.target;
  let finishedTask = deleteButton.parentElement;
  finishedTask.remove();
  return deleteButton;
};

export default DeleteButton;
