function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

const text = document.querySelector('.text o');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
        `<span style= "transform:rotate(${i * 6}deg)">${char}</span>`
).join("")

const btn = document.getElementById('bar1');
btn.addEventListener('click', function handleClick() {
  const initialText = 'menu';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.textContent = 'close';
  } else {
    btn.textContent = initialText;
  }
});
