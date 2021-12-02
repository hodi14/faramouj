window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener(
  "scroll",
  () => {
    let wScroll = window.scrollY;
    let wHeight = window.innerHeight;
    const animation = document.querySelectorAll(".animation");
    let footerHieght = document.querySelector("footer").offsetHeight;
    const sectionCount = parseInt(
      (document.documentElement.scrollHeight - footerHieght) /
        window.innerHeight
    );
    for (let a of animation) {
      let top = a.getBoundingClientRect().top;
      let height = a.offsetHeight;
      if (wHeight - top > 100 && wHeight - top < wScroll)
        a.classList.add("show");
      if (height + top < 50 || top > wHeight) a.classList.remove("show");
    }

    const scrollScetion = document.querySelector(".scrollSection");
    if (scrollScetion != null) {
      if (
        wScroll < wHeight - 400 ||
        document.body.offsetHeight - wScroll < wHeight + 100
      )
        scrollScetion.classList.add("hidden");
      else scrollScetion.classList.remove("hidden");

      let active = wScroll / wHeight;
      const sections = document.querySelectorAll(".scrollSection li");
      for (let section of sections) section.classList.remove("active");
      for (let i = 1; i < sectionCount; i++) {
        if (active > i - 0.5 && active < i + 0.5) {
          document
            .querySelector(".scrollSection ul")
            .children[i - 1].classList.add("active");
        }
      }
    }

    // Home Dream
    const dreamImage = document.querySelector(".homeDream img");
    if (dreamImage != undefined)
      dreamImage.onclick = () => {
        dreamImage.classList.add("shocked");
        setTimeout(() => {
          dreamImage.classList.remove("shocked");
        }, 1000);
      };
  },
  { passive: true }
);
