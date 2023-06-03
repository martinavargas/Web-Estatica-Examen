const openModal = document.querySelector(".button-name");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector(".modal-close");
const buttonAccept = document.querySelector(".modal-accept");
const text = document.querySelector(".game-story");
const buttons = document.querySelector(".buttons");
const nameField = document.querySelector("[name=name]");
const buttonStart = document.querySelector(".button-start");
const form = document.querySelector("form");
const footer = document.querySelector("footer");

document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  openModal.addEventListener("click", (e) => {
    modal.showModal();
    text.classList.add("dissapear");
    buttons.classList.add("dissapear");
    footer.classList.add("dissapear");
    modal.classList.add("open");
  });

  function closeModal() {
    modal.close();
    text.classList.remove("dissapear");
    buttons.classList.remove("dissapear");
    footer.classList.remove("dissapear");
    modal.classList.remove("open");
    nameField.classList.remove("invalid");
    nameField.nextElementSibling.classList.remove("error");
    nameField.nextElementSibling.innerText = "";
  }

  buttonAccept.disabled = true;

  function validation() {
    const field = nameField;
    const fieldValue = nameField.value.trim();
    if (fieldValue.trim().length === 0) {
      field.classList.add("invalid");
      field.nextElementSibling.classList.add("error");
      field.nextElementSibling.innerText = "Debes escribir un nombre.";
      buttonAccept.disabled = true;
    } else {
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.nextElementSibling.innerText = "";
      buttonAccept.disabled = false;
    }
  }

  buttonAccept.addEventListener("click", (e) => {
    let name = nameField.value.trim();
    localStorage.setItem("name", name);
    const playerName = localStorage.getItem("name");
  });

  buttonStart.addEventListener("click", (e) => {
    if (!buttonAccept.disabled) {
      window.location.href = "../pages/game.html";
    }
  });

  buttonAccept.onclick = () => {
    buttonStart.classList.add("button-start-enabled");
    buttonStart.style.cursor = "pointer";
  };

  buttonClose.addEventListener("click", closeModal);
  buttonAccept.addEventListener("click", closeModal);
  nameField.addEventListener("input", validation);
});
