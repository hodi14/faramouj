const current = window.location.pathname.substr(1);
const menuLis = document.querySelectorAll("header .headerMenu li");
for (let menuLi of menuLis) {
  if (menuLi.classList == current) {
    menuLi.classList.add("active");
  }
}

const menuItems = document.querySelectorAll("header .headerMenu li a");
for (let menuItem of menuItems) {
  menuItem.onclick = () => {
    document.querySelector(".loader").classList.remove("loaded");
    document.querySelector("header .headerMenu").classList.remove("opened");
    for (let other of menuItems) other.parentElement.classList.remove("active");
    menuItem.parentElement.classList.add("active");
  };
}

document.querySelector("header .headerMenu .logo").onclick = () => {
  document.querySelector(".loader").classList.remove("loaded");
  for (let other of menuItems) other.parentElement.classList.remove("active");
  document
    .querySelector("header .headerMenu ul")
    .children[0].classList.add("active");
};
document.querySelector("header .headerLogo").onclick = () => {
  document.querySelector(".loader").classList.remove("loaded");
  for (let other of menuItems) other.parentElement.classList.remove("active");
  document
    .querySelector("header .headerMenu ul")
    .children[0].classList.add("active");
};
