

const image = document.getElementById("container");
const quote = document.querySelector("h3#topline");
const btn = document.getElementById("generate");

document.addEventListener("DOMContentLoaded", fetchMeme);

function fetchMeme() {
    const rdmInt = Math.floor(100 * Math.random());
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
    console.log(data.data.memes[rdmInt].url)
    image.style.backgroundImage = `url(${data.data.memes[rdmInt].url})`
    quote.textContent = randomquote();
    })
};


btn.addEventListener("click", fetchMeme)
