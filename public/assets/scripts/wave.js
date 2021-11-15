setInterval(() => {
    const bars = document.querySelectorAll(".voice.play .bar");
    for (let bar of bars) {
        let mHeight = Math.floor(Math.random() * 7);
        bar.style.maxHeight = mHeight + "rem";
    }
}, 400)

const buttons = document.querySelectorAll(".voice button");
for (let button of buttons) {
    button.onclick = () => {
        button.querySelector("i").classList.toggle("fa-play");
        button.querySelector("i").classList.toggle("fa-pause");
    }
}
