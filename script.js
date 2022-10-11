const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const navContainer = document.querySelector('.item-nav');
const cardContainer = document.querySelector('.card-container');

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

const projects = [
	{
		name: 'Project 1',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dumm text ever since the 1500s, when an unknown printer took a standard dummy text.",
		image: '',
		live: '',
		source: '',
	},
	{
		name: 'Project 1',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dumm text ever since the 1500s, when an unknown printer took a standard dummy text.",
		image: '',
		live: '',
		source: '',
	},
	{
		name: 'Project 1',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dumm text ever since the 1500s, when an unknown printer took a standard dummy text.",
		image: '',
		live: '',
		source: '',
	},
	{ name: 'Project 1', description: 'Hello', image: '', live: '', source: '' },
];

function projectCreate(project) {
	const projectMarkup = `<div class="card-item">
	<div class="right-block">
		<h3 class="card">${project.name}</h3>
		<p class="card">
			
		</p>
		<ul class="tags">
			<li>CSS</li>
			<li>HTML</li>
			<li>Ruby</li>
		</ul>
	</div>
	<button class="action-btn">See Project</button>
</div>`;
	return projectMarkup;
}

function destructorProjects() {
	projects.forEach((item) => {
		cardContainer.innerHTML += projectCreate(item);
	});
}

window.addEventListener('load', destructorProjects());
