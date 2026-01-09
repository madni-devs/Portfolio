import projects from "./project.json" assert { type: "json" };
let template = document.querySelector("#project-template");
let container = document.querySelector(".project-parent");

projects.forEach(curElem => {
  let { name, github, netlify } = curElem;

  const curProject = document.importNode(template.content, true);

  curProject.querySelector("#project-name").textContent = name;
  curProject.querySelector("#project-github").href = github;
  curProject.querySelector("#project-netlify").href = netlify;

  container.append(curProject);
});
