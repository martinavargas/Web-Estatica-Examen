window.addEventListener("DOMContentLoaded", () => {
  const myShip = document.querySelector('img[name="ship"]');
  const buttonsWrapper = document.querySelector(".wrapper");
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");
  const fireButton = document.getElementById("fire");

  let projectileVelocity = 10;
  let bulletPeriod = 100;

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
    const minPositionX = 0;
    originalPlace = Math.max(minPositionX, originalPlace);

    moveShip();
  };

  rightButton.onclick = () => {
    originalPlace += movementStep;

    // Limitar el movimiento dentro de los límites de la pantalla
    const maxPositionX = window.innerWidth - myShip.offsetWidth;
    originalPlace = Math.min(originalPlace, maxPositionX);

    moveShip();
  };

  buttonsWrapper.classList.add("hidden");

  window.addEventListener("keydown", (event) => {
    const { key } = event;

    if (key === "ArrowLeft") {
      originalPlace -= movementStep;
    }
    if (key === "ArrowRight") {
      originalPlace += movementStep;
    }

    // Limitar el movimiento dentro de los límites de la pantalla
    const maxPositionX = window.innerWidth - myShip.offsetWidth;
    const minPositionX = 0;
    originalPlace = Math.max(
      minPositionX,
      Math.min(originalPlace, maxPositionX)
    );

    moveShip();
  });

  moveShip();

  const createProjectile = () => {
    const projectile = document.createElement("img");
    projectile.setAttribute("src", "/assets/bullet.svg");
    projectile.classList.add("projectile");

    const shipPosition = myShip.getBoundingClientRect();
    const projectilePosition = {
      x: shipPosition.left,
      y: shipPosition.top + shipPosition.width / 2,
    };

    projectile.style.left = `${projectilePosition.x}px`;
    projectile.style.top = `${projectilePosition.y}px`;

    document.body.appendChild(projectile);

    return projectile;
  };

  const isCollision = (projectile, enemy) => {
    const rectProjectile = projectile.getBoundingClientRect();
    const rectEnemy = enemy.getBoundingClientRect();

    const collision =
      rectProjectile.left < rectEnemy.right &&
      rectProjectile.right > rectEnemy.left &&
      rectProjectile.top < rectEnemy.bottom &&
      rectProjectile.bottom > rectEnemy.top;

    if (collision) {
      const collisionSound = document.getElementById("collisionSound");
      collisionSound.play();
    }

    return collision;
  };

  const moveProjectile = (projectile) => {
    return setInterval(() => {
      projectile.style.top = `${projectile.offsetTop - projectileVelocity}px`;

      // Verificar si el proyectil colisiona con alguna nave enemiga
      const enemies = document.querySelectorAll(".enemy-ship");
      enemies.forEach((enemy) => {
        if (isCollision(projectile, enemy)) {
          enemy.classList.add("destroyed");
          projectile.remove();
          clearInterval();
        }
      });

      // Verificar si el proyectil ha salido de la pantalla
      if (projectile.offsetTop < 0) {
        projectile.remove();
        clearInterval();
      }
    }, bulletPeriod);
  };

  const shoot = () => {
    const projectile = createProjectile();
    const enemies = document.querySelectorAll(".enemy-ship");

    moveProjectile(projectile, enemies);
    const shotSound = new Audio("/assets/laser-shoot.mp3");
    shotSound.play();
  };

  document.addEventListener("keydown", (event) => {
    const { key } = event;
    console.log(event);
    if (key === " ") {
      shoot();
    }
  });

  fireButton.addEventListener("click", () => {
    shoot();
  });
});
