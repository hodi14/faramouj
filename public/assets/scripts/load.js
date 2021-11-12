const imgs = document.images
let counter = 0;

[].forEach.call(imgs, (img) => {
    if (img.complete)
      incrementCounter();
    else
      img.addEventListener( 'load', incrementCounter, false );
} );

function incrementCounter() {
    counter++;
    if ( counter === imgs.length ) {
        document.querySelector(".loader").classList.add("loaded");
        console.log("oked");
    }
}