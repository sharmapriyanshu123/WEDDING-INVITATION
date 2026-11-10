const welcome = document.getElementById("welcome");
const envelope = document.getElementById("envelope");
const weddingWebsite = document.getElementById("weddingWebsite");
const tapHint = document.getElementById("tapHint");
const exploreButton = document.getElementById("exploreButton");

let invitationOpened = false;

// Golden Burst Effect
function createGoldenBurst() {
  const symbols = ["✦", "✧", "✦", "·"];

  for (let i = 0; i < 48; i++) {
    const particle = document.createElement("span");

    const angle = Math.random() * Math.PI * 2;
    const distance = 90 + Math.random() * 190;

    particle.className = "burst-particle";

    if (i % 4 === 0) {
      particle.classList.add("star");

      particle.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    } else {
      const size = 3 + Math.random() * 6;

      particle.style.setProperty("--size", `${size}px`);
    }

    particle.style.setProperty(
      "--dx",
      `${Math.cos(angle) * distance}px`
    );

    particle.style.setProperty(
      "--dy",
      `${Math.sin(angle) * distance}px`
    );

    particle.style.animationDelay =
      `${Math.random() * 180}ms`;

    welcome.appendChild(particle);

    particle.addEventListener("animationend", () => {
      particle.remove();
    });
  }
}

// Envelope Opening
envelope.addEventListener("click", () => {

  if (invitationOpened) return;

  invitationOpened = true;

  welcome.classList.add("lift", "opening");

  tapHint.textContent = "A LITTLE MAGIC IS ON ITS WAY...";

  // Golden Burst
  setTimeout(() => {
    createGoldenBurst();
  }, 500);

  // Open Wedding Website
  setTimeout(() => {

    weddingWebsite.classList.add("visible");

    weddingWebsite.setAttribute("aria-hidden", "false");

    welcome.classList.add("hidden");

    document.body.style.overflow = "auto";

    window.scrollTo(0, 0);

  }, 1650);

});

// Explore Button
exploreButton.addEventListener("click", () => {

  document.getElementById("blessing").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

});

// photos slide not need css

// love story

/* =================================
   WEDDING STORY PAGE NAVIGATION
================================= */

document.addEventListener("DOMContentLoaded", function () {

  const navigationButtons =
    document.querySelectorAll(".story-nav-btn");

  const storyPages =
    document.querySelectorAll(".story-page");

  navigationButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const targetId = button.getAttribute("data-target");

      // Remove active class from all buttons
      navigationButtons.forEach(function (item) {
        item.classList.remove("active");
      });

      // Hide all pages
      storyPages.forEach(function (page) {
        page.classList.remove("active");
      });

      // Activate clicked button
      button.classList.add("active");

      // Show selected page
      const selectedPage = document.getElementById(targetId);

      if (selectedPage) {
        selectedPage.classList.add("active");
      }

    });

  });

});

// countdown
// WEDDING COUNTDOWN

const weddingDate = new Date("2026-11-22T00:00:00");

function updateCountdown() {

    const now = new Date();
    let difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
// end countdown

// programs name
// ROYAL TIMELINE SCROLL PROGRESS

const royalTimeline = document.getElementById("royalTimeline");
const timelineProgress = document.getElementById("timelineProgress");

if (royalTimeline && timelineProgress) {

    function updateRoyalTimeline() {

        const rect = royalTimeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const totalHeight = royalTimeline.offsetHeight;
        const scrolled = windowHeight * 0.65 - rect.top;

        const progress = Math.max(
            0,
            Math.min(100, (scrolled / totalHeight) * 100)
        );

        timelineProgress.style.height = progress + "%";

        const markers = royalTimeline.querySelectorAll(".timeline-item");

        markers.forEach((item) => {

            const itemPosition = item.getBoundingClientRect().top;
            const activePoint = windowHeight * 0.65;

            if (itemPosition < activePoint) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }

        });
    }

    window.addEventListener("scroll", updateRoyalTimeline);
    window.addEventListener("resize", updateRoyalTimeline);

    updateRoyalTimeline();
}
// end programs name

// heart revel date 
// GOLDEN HEART SCRATCH EFFECT

const scratchCanvas = document.getElementById("scratchCanvas");

if (scratchCanvas) {

    const ctx = scratchCanvas.getContext("2d");

    let isScratching = false;
    let scratchedDistance = 0;
    let lastX = null;
    let lastY = null;
    let revealed = false;

    function drawGoldenHeart() {

        const gradient = ctx.createLinearGradient(50, 30, 350, 330);

        gradient.addColorStop(0, "#f7e8bd");
        gradient.addColorStop(0.35, "#d9bb78");
        gradient.addColorStop(0.55, "#f3dfa9");
        gradient.addColorStop(0.8, "#d4b16c");
        gradient.addColorStop(1, "#f6e5b9");

        ctx.clearRect(0, 0, 420, 360);

        ctx.beginPath();

        ctx.moveTo(210, 340);

        ctx.bezierCurveTo(20, 210, 20, 100, 105, 75);
        ctx.bezierCurveTo(160, 58, 195, 95, 210, 125);
        ctx.bezierCurveTo(225, 95, 260, 58, 315, 75);
        ctx.bezierCurveTo(400, 100, 400, 210, 210, 340);

        ctx.closePath();

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.lineWidth = 5;
        ctx.strokeStyle = "#efdfb8";
        ctx.stroke();

        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 18px Arial";
        ctx.textAlign = "center";
        ctx.fillText("SCRATCH TO REVEAL", 210, 185);
    }

    drawGoldenHeart();

    function getScratchPosition(event) {

        const rect = scratchCanvas.getBoundingClientRect();

        return {
            x: (event.clientX - rect.left) * (420 / rect.width),
            y: (event.clientY - rect.top) * (360 / rect.height)
        };
    }

    scratchCanvas.addEventListener("pointerdown", function(event) {

        if (revealed) return;

        isScratching = true;
        lastX = null;
        lastY = null;

        scratchCanvas.setPointerCapture(event.pointerId);

        const pos = getScratchPosition(event);

        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, 23, 0, Math.PI * 2);
        ctx.fill();

        lastX = pos.x;
        lastY = pos.y;
    });

    scratchCanvas.addEventListener("pointermove", function(event) {

        if (!isScratching || revealed) return;

        const pos = getScratchPosition(event);

        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = 46;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();

        scratchedDistance += Math.hypot(
            pos.x - lastX,
            pos.y - lastY
        );

        lastX = pos.x;
        lastY = pos.y;

        if (scratchedDistance > 650) {
            revealWeddingDate();
        }
    });

    function stopScratching() {
        isScratching = false;
    }

    scratchCanvas.addEventListener("pointerup", stopScratching);
    scratchCanvas.addEventListener("pointercancel", stopScratching);
    scratchCanvas.addEventListener("lostpointercapture", stopScratching);

    function revealWeddingDate() {

        if (revealed) return;

        revealed = true;

        ctx.clearRect(0, 0, 420, 360);

        scratchCanvas.style.pointerEvents = "none";

        const instruction = document.querySelector(".scratch-instruction");

        if (instruction) {
            instruction.textContent = "OUR FOREVER BEGINS · 22 NOVEMBER 2026 ❤️";
        }
    }
}
// end heart revel date
// 
// start mid night celebration

const celebration = document.getElementById("midnightCelebration");
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");

let fireworks = [];
let particles = [];
let animationId = null;
let lastLaunch = 0;
let isRunning = false;

function resizeCanvas() {

  const rect = celebration.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// Firework Rocket

class Firework {

  constructor() {

    this.x = Math.random() * canvas.clientWidth;
    this.y = canvas.clientHeight;

    this.targetY =
      canvas.clientHeight * (0.15 + Math.random() * 0.45);

    this.speed = 5 + Math.random() * 3;

    this.color = ["#ffd700", "#ffb347", "#ffecb3", "#ff80ab"][
      Math.floor(Math.random() * 4)
    ];

    this.exploded = false;

  }

  update() {

    this.y -= this.speed;

    if (this.y <= this.targetY) {
      this.explode();
      return false;
    }

    return true;

  }

  draw() {

    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();

  }

  explode() {

    const count = 55 + Math.floor(Math.random() * 35);

    for (let i = 0; i < count; i++) {

      const angle = (Math.PI * 2 * i) / count;
      const speed = 1 + Math.random() * 4;

      particles.push({

        x: this.x,
        y: this.y,

        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,

        alpha: 1,
        radius: 1 + Math.random() * 2,

        color: this.color

      });

    }

  }

}


// Particles Animation

function updateParticles() {

  particles = particles.filter(p => p.alpha > 0.02);

  particles.forEach(p => {

    p.x += p.vx;
    p.y += p.vy;

    p.vy += 0.025;

    p.vx *= 0.99;
    p.vy *= 0.99;

    p.alpha -= 0.012;

    ctx.beginPath();

    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

    ctx.fillStyle = p.color;

    ctx.globalAlpha = p.alpha;

    ctx.shadowBlur = 12;
    ctx.shadowColor = p.color;

    ctx.fill();

  });

  ctx.globalAlpha = 1;
  ctx.shadowBlur = 0;

}


// Main Animation

function animate(timestamp) {

  if (!isRunning) return;

  const width = celebration.clientWidth;
  const height = celebration.clientHeight;

  ctx.clearRect(0, 0, width, height);

  // Automatic Fireworks

  if (timestamp - lastLaunch > 650) {

    fireworks.push(new Firework());

    if (Math.random() > 0.5) {
      fireworks.push(new Firework());
    }

    lastLaunch = timestamp;

  }

  // Update Rockets

  fireworks = fireworks.filter(f => f.update());

  fireworks.forEach(f => f.draw());

  // Update Explosions

  updateParticles();

  animationId = requestAnimationFrame(animate);

}


// Start Automatically When Section Appears

function startFireworks() {

  if (isRunning) return;

  isRunning = true;
  lastLaunch = 0;

  resizeCanvas();

  animationId = requestAnimationFrame(animate);

}


// Stop When Section Leaves Screen

function stopFireworks() {

  isRunning = false;

  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  fireworks = [];
  particles = [];

  ctx.clearRect(0, 0, canvas.width, canvas.height);

}


// Detect Section Visibility

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      startFireworks();

    } else {

      stopFireworks();

    }

  });

}, {
  threshold: 0.25
});

observer.observe(celebration);

// end mid night celebration
