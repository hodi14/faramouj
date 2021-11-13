let isScrolling;
let section = 0;
let keyPressed = false;
var lastScrollTop = 0;
let canScroll = true;

const sectionCount = parseInt(
  document.documentElement.scrollHeight / window.innerHeight
);
const footerHieght = document.querySelector("footer").offsetHeight;

document.onkeyup = (event) => {
  switch (event.key) {
    case "ArrowDown":
      window.scrollTo({
        top: window.scrollY + window.innerHeight,
        behavior: "smooth",
      });
      break;
    case "ArrowUp":
      window.scrollTo({
        top: window.scrollY - window.innerHeight,
        behavior: "smooth",
      });
      break;
  }
};

window.addEventListener(
  "scroll",
  (event) => {
    const scrollScetion = document.querySelector(".scrollSection");
    let s = Math.round(window.scrollY / window.innerHeight);
    if (scrollScetion != null) {
        if (s < 0.5 && section != 0) {
          section = 0;
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        for (let i = 1; i <= sectionCount+1; i++) {
          if (s >= i - 0.5 && s < i + 0.5 && section != i) {
            section = i;
            window.scrollTo({
              top: section * window.innerHeight,
              behavior: "smooth",
            });
          }
        }
      

      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        let tmp;
        for (let i = 0; i <= sectionCount; i++)
          if (s >= i - 0.5 && s < i + 0.5) tmp = i;
        window.scrollTo({
          top: tmp * window.innerHeight,
          behavior: "smooth",
        });
      }, 45 );
    }
  },
  false
);
