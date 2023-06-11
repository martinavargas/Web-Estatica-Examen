const d = document;
const ls = localStorage;
const btnHome = d.querySelector(".button-home");
const btnRestart = d.querySelector(".button-replay");
const btnGithub = d.querySelector(".github");

btnHome.addEventListener("click", (e) => {
    window.location.href = "../../index.html";
    }
);

btnRestart.addEventListener("click", (e) => {
    window.location.href = "./game.html";
    }
);

btnGithub.addEventListener("click", (e) => {
    window.location.href = "https://github.com/martinavargas/Web-Estatica-Examen";
    }
);