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