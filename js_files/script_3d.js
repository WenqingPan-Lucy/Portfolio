// let xOffset = 0;
// let isMouseIn = false;
// const slides = document.getElementById("slides");

// setInterval(translate, 0);

// function translate() {
//   let offsetIncrementor = isMouseIn ? 0.05 : 0.2;
//   if (xOffset >= 458 * 7) xOffset = 0;
//   else xOffset = xOffset + offsetIncrementor;
//   slides.style.transform = "translateX(-" + xOffset + "px)";
// }

// slides.addEventListener("mouseover", function (event) {
//   isMouseIn = true;
// });

// slides.addEventListener("mouseout", function (event) {
//   isMouseIn = false;
// });
let xOffset = 0;
let isMouseIn = false;
const slides = document.getElementById("slides");
const totalWidth = 458 * 7; // Total width of all images combined (458px * number of slides)

setInterval(translate, 0);

function translate() {
  let offsetIncrementor = isMouseIn ? 0.05 : 0.2;

  // Check if xOffset has reached or exceeded the total width of all images
  if (xOffset >= totalWidth) {
    xOffset = 0; // Reset to start of the slide show
    slides.style.transition = 'none'; // Disable transition for smooth jump
    slides.style.transform = "translateX(-" + xOffset + "px)";

    // Allow some time before enabling the transition again
    setTimeout(() => {
      slides.style.transition = 'transform 0.2s'; // Re-enable transition
    }, 100); // Wait 100ms before enabling the transition again
  } else {
    xOffset = xOffset + offsetIncrementor;
    slides.style.transform = "translateX(-" + xOffset + "px)";
  }
}

slides.addEventListener("mouseover", function (event) {
  isMouseIn = true;
});

slides.addEventListener("mouseout", function (event) {
  isMouseIn = false;
});
