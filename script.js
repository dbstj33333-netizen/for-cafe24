const revealGroups = document.querySelectorAll(".hero__content, .feature__content");

revealGroups.forEach((group) => {
  group.classList.add("text-reveal");
  group.querySelectorAll(".text-line").forEach((line, index) => {
    line.style.setProperty("--line-index", index);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
  },
  { threshold: 0.28 }
);

revealGroups.forEach((group) => observer.observe(group));

const sections = document.querySelectorAll("main > .section");

sections.forEach((section) => section.classList.add("section-reveal"));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-section-visible", entry.isIntersecting);
    });
  },
  { threshold: 0.14 }
);

sections.forEach((section) => sectionObserver.observe(section));

document.querySelectorAll(".service article").forEach((item, index) => {
  item.style.setProperty("--service-index", index);
});
