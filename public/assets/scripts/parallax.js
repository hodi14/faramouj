let isScrolling;
let section = 0;
let keyPressed = false;

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
    if (scrollScetion != null) {
      let s = window.scrollY / window.innerHeight;
      if (s < 0.5 && section != 0) {
        section = 0;
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      if (s >= 0.5 && s < 1.5 && section != 1) {
        section = 1;
        window.scrollTo({
          top: section * window.innerHeight,
          behavior: "smooth",
        });
      }
      if (s >= 1.5 && s < 2.5 && section != 2) {
        section = 2;
        window.scrollTo({
          top: section * window.innerHeight,
          behavior: "smooth",
        });
      }
      if (s >= 2.5 && s < 3.5 && section != 3) {
        section = 3;
        window.scrollTo({
          top: section * window.innerHeight,
          behavior: "smooth",
        });
      }
      if (s >= 3.5 && s < 4.5 && section != 4) {
        section = 4;
        window.scrollTo({
          top: section * window.innerHeight,
          behavior: "smooth",
        });
      }
      if (s >= 4.5 && s < 5.5 && section != 5) {
        section = 5;
        window.scrollTo({
          top: section * window.innerHeight,
          behavior: "smooth",
        });
      }

      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        let tmp;
        for (let i = 0; i < sectionCount; i++) {
          if (s >= i - 0.5 && s < i + 0.5) tmp = i;
        }
        window.scrollTo({
          top: tmp * window.innerHeight,
          behavior: "smooth",
        });
      }, 66);
    }
  },
  false
);
