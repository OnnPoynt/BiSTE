function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

const text = document.querySelector('.text o');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
        `<span style= "transform:rotate(${i * 10}deg)">${char}</span>`
).join("")
