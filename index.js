const slider = document.querySelector(".sliders");
const slider_content = document.querySelector(".slider-content");
// const content_height = sliders.offsetHeight;
for (let index = 0; index < 2; index++) {
  const slide = slider.cloneNode(true);
  slider_content.appendChild(slide);
}
const sliders = document.querySelectorAll(".sliders");
console.log(slider);
// let c = 0;
// let b = 1;
// let t = 2;
sliders[t].style.transform = "translateY(-100%)";
sliders[c].style.transform = "translateY(0%)";
sliders[b].style.transform = "translateY(100%)";
// for (let index = 0; index < sliders.length; index++) {
//   sliders;
// }
function move() {
  var cy = sliders[c].style.transform.match(/\.*translateY\((.*)%\)/i)[1];
  var by = sliders[b].style.transform.match(/\.*translateY\((.*)%\)/i)[1];
  if (cy < -100) {
    sliders[c].style.transform = "translateY(100%)";
  } else if (cy == 0) {
    sliders[c].style.transform = `translateY(${cy - 0.1}%)`;
    sliders[b].style.transform = "translateY(100%)";
  } else {
    sliders[c].style.transform = `translateY(${cy - 0.1}%)`;
    sliders[b].style.transform = `translateY(${by - 0.1}%)`;
  }
}
function animate() {
  var cy = sliders[c].style.transform.match(/\.*translateY\((.*)%\)/i)[1];
  var by = sliders[b].style.transform.match(/\.*translateY\((.*)%\)/i)[1];
  if (cy < -100) {
    sliders[c].style.transform = "translateY(100%)";
  } else if (cy == 0) {
    sliders[c].style.transform = `translateY(${cy - 0.1}%)`;
    sliders[b].style.transform = "translateY(100%)";
  } else {
    sliders[c].style.transform = `translateY(${cy - 0.1}%)`;
    sliders[b].style.transform = `translateY(${by - 0.1}%)`;
  }
  requestAnimationFrame(animate);
}
// animate();
