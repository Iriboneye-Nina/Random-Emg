const emoji = ['💕','❤','😂','😊','😊','🤣','🤦‍♂️','😢','😎','😉','🤞','✌','💋','👏','🎉','🌹','🎂','🐱‍👤','🐱‍🏍','✨']

const face = document.getElementById('face');
const btn = document.getElementById('button');
// face1.innerHTML = "hello";

btn.addEventListener('click', () => {
    let round = Math.floor(Math.random() * emoji.length);
    let result = emoji[round];
    face.textContent = result;
});