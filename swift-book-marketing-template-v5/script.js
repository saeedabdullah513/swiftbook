document.body.classList.add("lock-scroll");

const introGate = document.getElementById("introGate");
const enterSite = document.getElementById("enterSite");
if (enterSite) {
  enterSite.addEventListener("click", () => {
    introGate.classList.add("hidden");
    document.body.classList.remove("lock-scroll");
    document.body.classList.remove("intro-open");
    setTimeout(() => {
      introGate.style.display = "none";
    }, 900);
  });
}

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".service-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    trigger.closest(".service-item").classList.toggle("active");
  });
});

document.querySelectorAll(".faq-trigger").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    trigger.closest(".faq-item").classList.toggle("active");
  });
});

document.querySelectorAll(".insight-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;
    document
      .querySelectorAll(".insight-tab")
      .forEach((item) => item.classList.remove("active"));
    document
      .querySelectorAll(".insight-panel")
      .forEach((panel) => panel.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(target)?.classList.add("active");
  });
});

const counters = document.querySelectorAll(".counter");
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.target);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 60));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current.toLocaleString();
      }, 24);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.5 },
);

counters.forEach((counter) => counterObserver.observe(counter));

const books = [
  {
    title: "The Quiet Formula",
    author: "Ava Reynolds",
    genre: "Business",
    color: "linear-gradient(160deg,#1d5cff,#5f92ff,#ffb84c)",
    services: ["Amazon Marketing", "Featured Articles", "Email Marketing"],
    results: [
      "Improved product page conversion",
      "Broader launch visibility",
      "Steadier email subscriber growth",
    ],
  },
  {
    title: "Still Becoming",
    author: "Miles Carter",
    genre: "Memoir",
    color: "linear-gradient(160deg,#ff8a24,#ffc940,#1d5cff)",
    services: ["Press Release", "Social Media Marketing", "Content Marketing"],
    results: [
      "Stronger audience engagement",
      "Press-ready story assets",
      "Higher content reach",
    ],
  },
  {
    title: "Next Level Teams",
    author: "Tara Benson",
    genre: "Leadership",
    color: "linear-gradient(160deg,#204cdb,#153171,#ff9a3d)",
    services: ["SEO", "TV Interviews", "Featured Articles"],
    results: [
      "Authority-building search visibility",
      "Interview readiness",
      "Thought leadership placement",
    ],
  },
  {
    title: "Echo Street",
    author: "Nina Morris",
    genre: "Fiction",
    color: "linear-gradient(160deg,#ff9a2f,#ffcc4e,#4f6bff)",
    services: ["Amazon Marketing", "Email Marketing", "Social Media Marketing"],
    results: [
      "Sharper retailer presence",
      "Better launch sequencing",
      "Audience anticipation",
    ],
  },
  {
    title: "Built To Teach",
    author: "Ethan Lee",
    genre: "Education",
    color: "linear-gradient(160deg,#16328a,#1d5cff,#ffcb4a)",
    services: ["Content Marketing", "SEO", "Press Release"],
    results: [
      "Improved topic discoverability",
      "More content-led traffic",
      "Clearer market positioning",
    ],
  },
  {
    title: "The Decisive Founder",
    author: "Lori Grant",
    genre: "Nonfiction",
    color: "linear-gradient(160deg,#ff8a24,#f3a61e,#21407d)",
    services: ["Featured Articles", "TV Interviews", "Email Marketing"],
    results: [
      "Professional authority growth",
      "Audience list expansion",
      "Reusable campaign assets",
    ],
  },
  {
    title: "Hidden Summer",
    author: "J. Porter",
    genre: "Fiction",
    color: "linear-gradient(160deg,#1d5cff,#3f7bff,#ff8a24)",
    services: ["Amazon Marketing", "Social Media Marketing", "Press Release"],
    results: [
      "Launch energy across channels",
      "Better title discoverability",
      "Cleaner publicity materials",
    ],
  },
  {
    title: "Lead With Clarity",
    author: "Sophia King",
    genre: "Business",
    color: "linear-gradient(160deg,#ffcc4e,#ff8a24,#1d5cff)",
    services: ["SEO", "Featured Articles", "Content Marketing"],
    results: [
      "Search-led authority growth",
      "Content consistency",
      "Higher qualified reach",
    ],
  },
  {
    title: "The Calm Edge",
    author: "Daniel Cole",
    genre: "Wellness",
    color: "linear-gradient(160deg,#21407d,#1d5cff,#ffc940)",
    services: ["Email Marketing", "Content Marketing", "Amazon Marketing"],
    results: [
      "Stronger launch retention",
      "Audience nurturing system",
      "Improved listing performance",
    ],
  },
  {
    title: "Finding Forward",
    author: "Mia Brooks",
    genre: "Memoir",
    color: "linear-gradient(160deg,#ff8a24,#ffb84c,#2746b2)",
    services: ["Press Release", "Featured Articles", "TV Interviews"],
    results: [
      "Clearer public narrative",
      "More media-ready packaging",
      "Audience trust signals",
    ],
  },
];

const bookGrid = document.getElementById("book-grid");
const bookModal = document.getElementById("book-modal");
const bookModalContent = document.getElementById("book-modal-content");

if (bookGrid) {
  books.forEach((book) => {
    const btn = document.createElement("button");
    btn.className = "book-card";
    btn.innerHTML = `
      <div class="book-cover" style="background:${book.color}">
        <small>${book.genre}</small>
        <strong>${book.title}</strong>
        <small>${book.author}</small>
      </div>
      <span>${book.title}</span>
    `;
    btn.addEventListener("click", () => openBook(book));
    bookGrid.appendChild(btn);
  });
}

function openBook(book) {
  bookModalContent.innerHTML = `
    <div class="modal-content-grid">
      <div class="modal-cover" style="background:${book.color}">
        <small>${book.genre}</small>
        <strong>${book.title}</strong>
        <small>${book.author}</small>
      </div>
      <div class="modal-info">
        <h3>${book.title}</h3>
        <p class="meta">Author: ${book.author} • Category: ${book.genre}</p>
        <div class="modal-video">
          <video controls poster="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
          </video>
        </div>
        <div class="modal-cols">
          <div class="info-box">
            <strong>Services provided</strong>
            <ul>${book.services.map((service) => `<li>${service}</li>`).join("")}</ul>
          </div>
          <div class="info-box">
            <strong>Results achieved</strong>
            <ul>${book.results.map((result) => `<li>${result}</li>`).join("")}</ul>
          </div>
        </div>
      </div>
    </div>
  `;
  bookModal.classList.add("active");
  bookModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("lock-scroll");
}

const reelModal = document.getElementById("reel-modal");
const reelVideo = document.getElementById("reel-video");

document.querySelectorAll(".reel-open").forEach((button) => {
  button.addEventListener("click", () => {
    const video = button.closest(".reel-card").dataset.video;
    reelVideo.querySelector("source").src = video;
    reelVideo.load();
    reelModal.classList.add("active");
    reelModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("lock-scroll");
  });
});

function closeModal(type) {
  if (type === "book") {
    bookModal.classList.remove("active");
    bookModal.setAttribute("aria-hidden", "true");
  }
  if (type === "reel") {
    reelModal.classList.remove("active");
    reelModal.setAttribute("aria-hidden", "true");
    reelVideo.pause();
  }
  document.body.classList.remove("lock-scroll");
}

document.querySelectorAll("[data-close]").forEach((el) => {
  el.addEventListener("click", () => closeModal(el.dataset.close));
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal("book");
    closeModal("reel");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const leadForm = document.querySelector(".lead-form");
if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Demo submission captured. Connect this form to your CRM or automation workflow in production.",
    );
  });
}
