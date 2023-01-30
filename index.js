function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

const btn = document.getElementById('bar1');
btn.addEventListener('click', function handleClick() {
const initialText = 'menu';

if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
  btn.textContent = 'close';
} else {
  btn.textContent = initialText;
}
});