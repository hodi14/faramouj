const c = document.querySelector(".customCursor");

document.addEventListener("mousemove", (e) => {
  if (e.target.tagName == "A" || e.target.tagName == "BUTTON") {
    c.classList.add("hovered");
  } else {
    c.classList.remove("hovered");
  }
  c.setAttribute(
    "style",
    "top: " + (e.pageY - 20) + "px; left: " + (e.pageX - 20) + "px;"
  );
});
document.addEventListener("click", (e) => {
  c.classList.add("clicked");
  setTimeout(() => {
    c.classList.remove("clicked");
  }, 500);
});
