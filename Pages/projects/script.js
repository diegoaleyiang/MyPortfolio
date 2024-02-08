const projects = document.querySelector(".projects");
const preview = document.querySelector(".preview");
const previewImg = document.querySelector(".preview-img");

let isInside = false;

const bgPositions = {
  p1: "0 0",
  p2: "0 11.1%",
  p3: "0 22.2%",
  p4: "0 33.3%",
  p5: "0 44.4%",
  p6: "0 55.5",
  p7: "0 66.6%",
  p8: "0 77.7%",
  p9: "0 88.8%",
  p10: "0 100%",
};

const moveStuff = (e) => {
  const mouseInside = isMouseInsideContainer(e);

  if (mouseInside !== isInside) {
    isInside = mouseInside;
    if (isInside) {
      gsap.to(preview, 0.3, {
        scale: 1,
      });
    } else {
      gsap.to(preview, 0.3, {
        scale: 0,
      });
    }
  }
};

const moveProject = (e) => {
  const previewRect = preview.getBoundingClientRect();
  const offsetX = previewRect.width / 2;
  const offsetY = previewRect.height / 2;
  preview.style.left = e.pageX - offsetX + "px";
  preview.style.top = e.pageY - offsetY + "px";
};

const moveProjectImg = (project) => {
  const projectId = project.id;
  gsap.to(previewImg, 0.4, {
    backgroundPosition: bgPositions[projectId] || "0 0",
  });
};

const isMouseInsideContainer = (e) => {
  const containerRect = projects.getBoundingClientRect();
  return (
    e.pageX >= containerRect.left &&
    e.pageX <= containerRect.right &&
    e.pageY >= containerRect.top &&
    e.pageY <= containerRect.bottom
  );
};

window.addEventListener("mousemove", moveStuff);

Array.from(projects.children).forEach((project) => {
  project.addEventListener("mousemove", moveProject);
  project.addEventListener("mousemove", moveProjectImg.bind(null, project));
});
