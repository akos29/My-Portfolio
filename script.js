const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const navContainer = document.querySelector('.item-nav');

function openItem() {
	btnClose.classList.remove('hidden');
	btnOpen.classList.add('hidden');
	navContainer.classList.remove('hidden');
	navContainer.classList.add('visible');
}
function closeItem() {
	btnOpen.classList.remove('hidden');
	btnClose.classList.add('hidden');
	navContainer.classList.add('hidden');
}

btnOpen.addEventListener('click', openItem);
btnClose.addEventListener('click', closeItem);
navContainer.addEventListener('click', closeItem);
