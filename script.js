// Contact button function
function contactAlert() {
  alert("Thanks for reaching out! Email me at csowjanya044@email.com");
}

// ================= HERO ANIMATION =================
window.addEventListener("load", () => {
  const elements = document.querySelectorAll(".animate");

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 300);
  });
});


// ================= SKILLS ANIMATION =================
window.addEventListener("DOMContentLoaded", () => {

  const skillsSection = document.querySelector("#skills");
  const skillBars = document.querySelectorAll(".fill");
  let skillsAnimated = false;

  window.addEventListener("scroll", () => {

    const sectionTop = skillsSection.offsetTop - 400;

    if (window.scrollY > sectionTop && !skillsAnimated) {

      document.querySelector(".html").style.width = "90%";
      document.querySelector(".css").style.width = "80%";
      document.querySelector(".js").style.width = "40%";
      document.querySelector(".java").style.width = "60%";
      document.querySelector(".dsa").style.width = "60%";
      document.querySelector(".sql").style.width = "80%";
      document.querySelector(".spring").style.width = "40%";
      document.querySelector(".api").style.width = "60%";

      skillsAnimated = true;
    }

  });

});