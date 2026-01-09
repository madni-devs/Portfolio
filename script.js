const template = document.querySelector("#project-template");
const container = document.querySelector(".project-parent");

async function loadProjects() {
  try {
    const res = await fetch("./project.json");

    if (!res.ok) {
      throw new Error("Failed to load projects");
    }

    const projects = await res.json();

    projects.forEach(curElem => {
      const { name, github, netlify } = curElem;

      const curProject = document.importNode(template.content, true);

      curProject.querySelector("#project-name").textContent = name;
      curProject.querySelector("#project-github").href = github;
      curProject.querySelector("#project-netlify").href = netlify;

      container.append(curProject);
    });

  } catch (err) {
    console.error(err);
    container.innerHTML = "<p>Projects failed to load.</p>";
  }
}

window.addEventListener("load", loadProjects);