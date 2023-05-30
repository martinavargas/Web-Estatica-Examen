window.addEventListener("DOMContentLoaded", () => {
  const ship1 = document.getElementById("ship1");
  const myShip = document.querySelector('img[name="ship"]');
  const bullet = document.createElement("span");
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");
  const fireButton = document.getElementById("fire");

  leftButton.textContent = "<";
  leftButton.style.fontSize = "1rem";
  rightButton.textContent = ">";
  rightButton.style.fontSize = "1rem";

  myShip.style.transform = "scaleX(2rem) scaleY(2rem)";

  let originalPlace = window.innerWidth / 2 - myShip.offsetWidth / 2;
  const movementStep = 5;

  const moveShip = () => {
    myShip.style.transform = `translateX(${originalPlace}px)`;
  };

  leftButton.onclick = () => {
    originalPlace -= movementStep;

    // Limitar el movimiento dentro de los límites de la pantalla
    const minPosX = 0;
    originalPlace = Math.max(minPosX, originalPlace);

    moveShip();
  };

  rightButton.onclick = () => {
    originalPlace += movementStep;

    // Limitar el movimiento dentro de los límites de la pantalla
    const maxPosX = window.innerWidth - myShip.offsetWidth;
    originalPlace = Math.min(originalPlace, maxPosX);

    moveShip();
  };

  window.addEventListener("keydown", (event) => {
    const { key } = event;

    if (key === "ArrowLeft") {
      originalPlace -= movementStep;
    }
    if (key === "ArrowRight") {
      originalPlace += movementStep;
    }

    // Limitar el movimiento dentro de los límites de la pantalla
    const maxPosX = window.innerWidth - myShip.offsetWidth;
    const minPosX = 0;
    originalPlace = Math.max(minPosX, Math.min(originalPlace, maxPosX));

    moveShip();
  });

  moveShip();

  const rect = ship1.getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);

  const position = {
    horizontal: rect.x + rect.width / 2,
    vertical: rect.y + rect.height / 2,
  };

  bullet.textContent = "🔸";
});
