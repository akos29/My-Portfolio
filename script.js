const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const navContainer = document.querySelector(".item-nav");
const cardContainer = document.querySelector(".card-container");
let popup;

function openItem() {
  btnClose.classList.remove("hidden");
  btnOpen.classList.add("hidden");
  navContainer.classList.remove("hidden");
  navContainer.classList.add("visible");
  // popup.classList.add('visible');
}
function closeItem() {
  btnOpen.classList.remove("hidden");
  btnClose.classList.add("hidden");
  navContainer.classList.add("hidden");
  // popup.classList.remove('visible');
  // popup.classList.add('hidden');
}

btnOpen.addEventListener("click", openItem);
btnClose.addEventListener("click", closeItem);
navContainer.addEventListener("click", closeItem);

const projects = [
  {
    id: 1,
    name: "Project 1",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dumm text ever since the 1500s, when an unknown printer took a standard dummy text.",
    image: "./asset/portfolio-snapshot.svg",
    technologies: ["CSS", "HTML", "Ruby on rails"],
    live: "https://akos29.github.io/My-Portfolio/",
    source: "https://github.com/akos29/My-Portfolio",
  },
  {
    id: 2,
    name: "Project 2",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dumm text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["CSS", "Ruby on rails"],
    image: "./asset/portfolio-snapshot.svg",
    live: "https://akos29.github.io/My-Portfolio/",
    source: "https://github.com/akos29/My-Portfolio",
  },
  {
    id: 3,
    name: "Project 9",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dumm text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technologies: ["CSS", "HTML", "JS"],
    image: "./asset/portfolio-snapshot.svg",
    live: "https://akos29.github.io/My-Portfolio/",
    source: "https://github.com/akos29/My-Portfolio",
  },
  {
    id: 4,
    name: "Project 1",
    description: "Hello",
    image: "./asset/portfolio-snapshot.svg",
    live: "https://akos29.github.io/My-Portfolio/",
    source: "https://github.com/akos29/My-Portfolio",
  },
];

// function listCreate

function projectCreate(project) {
  let tech = "";
  project.technologies.map(function (element, i, arr) {
    tech += `<li> ${arr[i]}</li>`;
  });

  const projectMarkup = `<div class="card-item">
	<div class="right-block">
		<h3 class="card">${project.name}</h3>
		<p class="card">
			${project.description}
		</p>
		<ul class="tags">
			${tech}
		</ul>
	</div>
	<button onclick="openPopup(${project.id})" class="action-btn">See Project</button>
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

  const popup = document.querySelector(".project-popup");
  popup.innerHTML = popupContent;
  popup.classList.add("visible");
  document.querySelector(".blur-bg").classList.add("visible");
  document.querySelector(".close").addEventListener("click", closePopup);
}

function closePopup() {
  document.querySelector(".project-popup").classList.remove("visible");
  document.querySelector(".blur-bg").classList.remove("visible");
}

function generatePopup(project) {
  let tech = "";
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
					<img
						class="popup"
						src="./asset/see-live-icon.svg"
						alt=""
					/>See Live
				</a>
				<a class="btn" href="${project.source}">
					<img class="popup" src="./asset/source.svg" alt="" />See
					Source
				</a>
			</div>
		</div>
	</div>`;

  return popupContent;
}
window.addEventListener("load", destructorProjects());
