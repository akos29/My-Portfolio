const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const navContainer = document.querySelector('.item-nav');
const cardContainer = document.querySelector('.card-container');
const form = document.querySelector('.contact-me');
let popup;

function validateEmail(email) {
	email = email.value.trim();
	const emailRegex = /^[a-z]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

	if (email === '') {
		return 'Please enter your email its (required)';
	}
	if (!emailRegex.test(email)) {
		return 'Please enter a correct email address format (all lower case!)';
	}
	return true;
}

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const success = 'Successful';
	const email = form.elements['email'];
	let emailValid = validateEmail(email);
	const msg = document.querySelector('.form-response');
	if (emailValid !== true) {
		msg.textContent = emailValid;
		msg.className = 'form-fail';
	} else {
		form.submit();
		form.reset();
	}
});

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
		id: 1,
		name: ' ',
		description: ' ',
		technologies: [],
		image: './asset/portfolio-snapshot.svg',
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},
	{
		id: 2,
		name: 'Profesional Art Printing Data More',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
		image: './asset/portfolio-snapshot.svg',
		technologies: ['html', 'bootstrap', 'Ruby'],
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},
	{
		id: 3,
		name: 'Data Dashboard Healthcare',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
		technologies: ['html', 'bootstrap', 'Ruby'],
		image: './asset/portfolio-snapshot.svg',
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},
	{
		id: 4,
		name: 'Profesional Art Printing Data More',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
		image: './asset/portfolio-snapshot.svg',
		technologies: ['html', 'bootstrap', 'Ruby'],
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},
	{
		id: 5,
		name: 'Website Protfolio',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
		technologies: ['html', 'bootstrap', 'Ruby'],
		image: './asset/portfolio-snapshot.svg',
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},

	{
		id: 6,
		name: 'Profesional Art Printing Data More',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
		image: './asset/portfolio-snapshot.svg',
		technologies: ['html', 'bootstrap', 'Ruby'],
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},
	{
		id: 7,
		name: 'Profesional Art Printing Data More',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
		image: './asset/portfolio-snapshot.svg',
		technologies: ['html', 'bootstrap', 'Ruby'],
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},
	{
		id: 8,
		name: 'Profesional Art Printing Data More',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
		image: './asset/portfolio-snapshot.svg',
		technologies: ['html', 'bootstrap', 'Ruby'],
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},

	{
		id: 9,
		name: 'Data Dashboard Healthcare',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
		technologies: ['html', 'bootstrap', 'Ruby'],
		image: './asset/portfolio-snapshot.svg',
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},
	{
		id: 10,
		name: 'Profesional Art Printing Data More',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
		image: './asset/portfolio-snapshot.svg',
		technologies: ['html', 'bootstrap', 'Ruby'],
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},
	{
		id: 11,
		name: 'Website Protfolio',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
		technologies: ['html', 'bootstrap', 'Ruby'],
		image: './asset/portfolio-snapshot.svg',
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},

	{
		id: 12,
		name: 'Profesional Art Printing Data More',
		description:
			"A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
		image: './asset/portfolio-snapshot.svg',
		technologies: ['html', 'bootstrap', 'Ruby'],
		live: 'https://akos29.github.io/My-Portfolio/',
		source: 'https://github.com/akos29/My-Portfolio',
	},
];

// function listCreate

function projectCreate(project) {
	let vis;
	if (project.id % 2 !== 0 && project.id !== 1) vis = 'hidden';
	let tech = '';
	project.technologies.map(function (element, i, arr) {
		tech += `<li> ${arr[i]}</li>`;
	});

	const projectMarkup = `<div class="card-item">
	<div class="right-block" onclick="openPopup(${project.id})">
		<h3 class="card">${project.name}</h3>
		<p class="card">
			${project.description}
		</p>
		<ul class="tags">
			${tech}
		</ul>
	</div>
	<button onclick="openPopup(${project.id})" class="action-btn ${vis}">See Project</button>
</div>`;
	return projectMarkup;
}

function destructorProjects() {
	projects.forEach((item) => {
		cardContainer.innerHTML += projectCreate(item);
	});
}

function filterProject(id) {
	let project = {};
	projects.technologies.map(function (element, i, arr) {
		tech += `<li> ${arr[i]}</li>`;
	});
}

function openPopup(id) {
	const project = projects.find((item) => item.id === parseInt(id));
	const popupContent = generatePopup(project);

	const popup = document.querySelector('.project-popup');
	popup.innerHTML = popupContent;
	popup.classList.add('visible');
	document.querySelector('.blur-bg').classList.add('visible');
	document.querySelector('.close').addEventListener('click', closePopup);
}

function closePopup() {
	document.querySelector('.project-popup').classList.remove('visible');
	document.querySelector('.blur-bg').classList.remove('visible');
}

function generatePopup(project) {
	let tech = '';
	project.technologies.map(function (element, i, arr) {
		tech += `<li> ${arr[i]}</li>`;
	});
	const popupContent = `
	<div class="project-popup-content">
		<span class="close">&times;</span>
		<div class="project-detail">
			<h2 class="popup">
				${project.name}
			</h2>
			<ul class="tech">
				${tech}
			</ul>
			<img
				src="${project.image}"
				alt=""
				class="featured"
			/>
			<p class="popup">
				${project.description}
			</p>
			<div class="btn-container">
				<a class="btn" href="${project.live}">
					See Live<img
						class="popup"
						src="./asset/see-live-icon.svg"
						alt=""
					/>
				</a>
				<a class="btn" href="${project.source}">
					See
					Source<img class="popup" src="./asset/source.svg" alt="" />
				</a>
			</div>
		</div>
	</div>`;

	return popupContent;
}
window.addEventListener('load', destructorProjects());
