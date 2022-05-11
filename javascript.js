const section = document.querySelectorAll(".container > *");
const btnLightSwitch = document.querySelector(".light-switch");
const btnLightSwitchIcon = document.querySelectorAll(
  ".light-switch > .fa-solid"
);

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("mouseenter", () => {
    section[i].querySelector(".bg-hover").classList.toggle("on-hover");
  });
}

for (let i = 0; i < section.length; i++) {
  section[i].addEventListener("mouseleave", () => {
    section[i].querySelector(".bg-hover").classList.toggle("on-hover");
  });
}
var night = false;

btnLightSwitch.addEventListener("click", () => {
  for (let i = 0; i < btnLightSwitchIcon.length; i++) {
    btnLightSwitchIcon[i].classList.toggle("hidden");
  }
  document.querySelector("body").classList.toggle("night-body");
  for (let i = 0; i < section.length; i++) {
    section[i].classList.toggle("night-sections");
    section[i].classList.toggle("light-sections");
  }
});