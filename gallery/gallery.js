// img background code



// image slider code

const slides1 = document.querySelectorAll(".slider1");
const slides2 = document.querySelectorAll(".slider2");
let slider1index = 0;
let slider2index = 0;
let timer = null;

initalise();


function initalise() {
  if (slides1.length > 0 && slides2.length >0) {
    slides1[slider1index].classList.add("displayclass");
    slides2[slider2index].classList.add("displayclass");
    timer = setInterval(nextslide, 3000);


  }


}
function showslide(index) {

  if (index > slides1.length - 1) {
    slider1index = 0;

  }
  else if (index < 0) {
    slider1index = slides1.length - 1;
  }

  if (index > slides2.length - 1) {
    slider2index = 0;

  }
  else if (index < 0) {
    slider2index = slides2.length - 1;
  }

  slides1.forEach(slide => {
    slide.classList.remove("displayclass");
  })

  slides1[slider1index].classList.add("displayclass");

  slides2.forEach(slide => {
    slide.classList.remove("displayclass");

  })

  slides2[slider2index].classList.add("displayclass");



}

function nextslide() {
  slider1index++;
  slider2index++;
  showslide(slider1index);
  showslide(slider2index);
}
// star falling
// js for home page

const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

class Star {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }

  draw() {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }
    this.draw();
  }
}

function initStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let size = Math.random() * 2;
    let speed = Math.random() * 2 + 0.5;
    stars.push(new Star(x, y, size, speed));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star) => star.update());
  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars(150);
});

initStars(150);
animate();
