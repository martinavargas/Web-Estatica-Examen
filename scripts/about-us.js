const cards = document.querySelectorAll('.card-body');
const gitUsername = document.querySelectorAll('.card-body-user');
const gitName = document.querySelectorAll('.card-body-name');
const gitBiography = document.querySelectorAll('.card-body-biography');
const gitProfileImage = document.querySelectorAll('.card-body-profile');

const usernames = ['martinavargas', 'NicolasMRuiz', 'AntonelaLedesma7'];

const callAPI = (cardElement, username) => {
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            gitName[cardElement].textContent = data.name;
            gitUsername[cardElement].textContent = `@${data.login}`;
            gitBiography[cardElement].textContent = data.bio;
            gitProfileImage[cardElement].src = data.avatar_url;
        });
};

document.addEventListener('DOMContentLoaded', () => {
    cards.forEach((cardElement, index) => {
        const username = usernames[index];
        callAPI(index, username);
    });
});