// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});



// header
const navLinks = document.querySelectorAll("header .menu ul li a");

navLinks.forEach(link => {
  const data = link.getAttribute("data-text");
  link.innerHTML = `<span>${data}</span><span>${data}</span>`;
});
// header end


// Split Text
function splitText(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    const content = el.textContent.trim();
    el.innerHTML = content
      .split("")
      .map(letter => `<span>${letter === " " ? "&nbsp;" : letter}</span>`)
      .join("");
  });
}

splitText(".btn-caption .btn-text");
splitText(".hero-content h1 .letters");

// Split Text End



// bg hero
let num = 0;

function animate() {
  num += 0.4;
  const element = document.querySelector('.globe');
  element.style.transform = `rotate(${num}deg)`
  requestAnimationFrame(animate);
}

animate();
// bg hero end