// Typing Animation
const typingElement = document.getElementById("typing");
const texts = ["Hi, I'm Prabodh Obadiah", "Full Stack ML Engineer", "Tech Explorer | Blockchain Enthusiast"];
let i = 0, j = 0, current = "", isDeleting = false;

function typeEffect() {
  current = texts[i];
  typingElement.innerHTML = current.substring(0, j) + (j % 2 === 0 ? "_" : "");

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % texts.length;
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();

// Section Scroll Reveal
const sections = document.querySelectorAll('main section');
function revealOnScroll() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 150) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Particle Background
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function createParticles(count) {
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5
    });
  }
}
createParticles(150);

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ffe7";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();
// Reveal edu cards on scroll
const eduCards = document.querySelectorAll(".edu-card");
function revealEduCards() {
  eduCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      card.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealEduCards);
window.addEventListener("load", revealEduCards);
// Animate technical skills bars when in view
const progressBars = document.querySelectorAll(".progress");

function animateProgressBars() {
  progressBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100 && bar.style.width === "20px") {
      const percent = bar.getAttribute("data-percent");
      bar.style.width = percent;
    }
  });
}

window.addEventListener("scroll", animateProgressBars);
window.addEventListener("load", animateProgressBars);
// Animate technical skill bars using IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const percent = bar.getAttribute("data-percent");
      bar.style.width = percent;
      observer.unobserve(bar); // trigger only once
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll(".progress").forEach(bar => {
  observer.observe(bar);
});
// Reveal certification cards on scroll
const certCards = document.querySelectorAll('.cert-card');
function revealCerts() {
  certCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealCerts);
window.addEventListener('load', revealCerts);
// Reveal project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
function revealProjects() {
  projectCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealProjects);
window.addEventListener('load', revealProjects);
// Reveal experience cards on scroll
const expCards = document.querySelectorAll('.experience-card');
function revealExperience() {
  expCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealExperience);
window.addEventListener('load', revealExperience);
// Reveal achievement cards on scroll
const achievementCards = document.querySelectorAll('.achievement-card');
function revealAchievements() {
  achievementCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealAchievements);
window.addEventListener('load', revealAchievements);
// Reveal language cards on scroll
const langCards = document.querySelectorAll('.language-card');
function revealLanguages() {
  langCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealLanguages);
window.addEventListener('load', revealLanguages);
// Reveal contact cards on scroll
const contactItems = document.querySelectorAll('.contact-item');
function revealContact() {
  contactItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealContact);
window.addEventListener('load', revealContact);
