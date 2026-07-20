const quizData = [
  {
    question: "Where are you in your journey right now?",
    options: [
      {
        label: "Manuscript written",
        desc: "The book is complete or close to complete.",
        value: "manuscript",
      },
      {
        label: "Book published",
        desc: "The title is already live and available.",
        value: "published",
      },
      {
        label: "Preparing a relaunch",
        desc: "The book exists, but needs a stronger second push.",
        value: "relaunch",
      },
    ],
  },
  {
    question: "What is your main objective?",
    options: [
      {
        label: "Launch my book",
        desc: "I need structured launch visibility.",
        value: "launch",
      },
      {
        label: "Reach more readers",
        desc: "I want stronger discoverability and audience growth.",
        value: "readers",
      },
      {
        label: "Build my authority",
        desc: "I want the book to support my professional brand.",
        value: "authority",
      },
      {
        label: "Relaunch my book",
        desc: "I want to reposition and reintroduce the title.",
        value: "relaunch_goal",
      },
    ],
  },
  {
    question: "What kind of support do you need most?",
    options: [
      {
        label: "Book marketing",
        desc: "Promotion, discoverability, campaigns, and sales support.",
        value: "marketing",
      },
      {
        label: "Author branding",
        desc: "Authority, platform, and personal positioning.",
        value: "branding",
      },
      {
        label: "Content and email",
        desc: "Audience nurturing and content-led growth.",
        value: "content",
      },
      {
        label: "PR and media",
        desc: "Interviews, features, and outward visibility.",
        value: "pr",
      },
    ],
  },
  {
    question: "Do you already have an author platform?",
    options: [
      {
        label: "Yes, and it is active",
        desc: "Website or channels already exist and have some activity.",
        value: "platform_yes",
      },
      {
        label: "Somewhat",
        desc: "I have a presence, but it needs work.",
        value: "platform_some",
      },
      {
        label: "No",
        desc: "I need to build it properly from the ground up.",
        value: "platform_no",
      },
    ],
  },
  {
    question: "How large is your current audience?",
    options: [
      {
        label: "Very small or none",
        desc: "I am building from the beginning.",
        value: "small",
      },
      {
        label: "Growing",
        desc: "I have some traction and want to build on it.",
        value: "growing",
      },
      {
        label: "Established",
        desc: "I already have an audience and want more leverage.",
        value: "established",
      },
    ],
  },
  {
    question: "What level of investment feels realistic right now?",
    options: [
      {
        label: "Starter",
        desc: "A focused first step with clear priorities.",
        value: "starter",
      },
      {
        label: "Growth",
        desc: "A stronger multi-channel effort.",
        value: "growth",
      },
      {
        label: "Comprehensive",
        desc: "A broader strategic program.",
        value: "comprehensive",
      },
    ],
  },
  {
    question: "When would you like to start?",
    options: [
      { label: "Immediately", desc: "I want to move now.", value: "now" },
      {
        label: "Within 30 days",
        desc: "I am preparing to begin soon.",
        value: "soon",
      },
      { label: "Within 90 days", desc: "I am planning ahead.", value: "later" },
    ],
  },
];

let currentQuestion = 0;
const answers = new Array(quizData.length).fill(null);

const quizStage = document.getElementById("quizStage");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function renderQuestion() {
  const item = quizData[currentQuestion];
  progressText.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
  progressFill.style.width = `${((currentQuestion + 1) / quizData.length) * 100}%`;

  quizStage.innerHTML = `
    <div class="question-shell">
      <h2>${item.question}</h2>
      <div class="option-grid">
        ${item.options
          .map(
            (option, index) => `
          <button type="button" class="option-btn ${answers[currentQuestion] === option.value ? "selected" : ""}" data-value="${option.value}">
            ${option.label}
            <small>${option.desc}</small>
          </button>
        `,
          )
          .join("")}
      </div>
    </div>
  `;

  quizStage.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      answers[currentQuestion] = btn.dataset.value;
      renderQuestion();
    });
  });

  prevBtn.style.visibility = currentQuestion === 0 ? "hidden" : "visible";
  nextBtn.textContent =
    currentQuestion === quizData.length - 1 ? "See Recommendation" : "Next";
}

function getRecommendation() {
  const stage = answers[0];
  const objective = answers[1];
  const support = answers[2];
  const platform = answers[3];
  const audience = answers[4];
  const investment = answers[5];

  let tag = "Recommended Path";
  let title = "Integrated Book Marketing Plan";
  let text =
    "A blended recommendation that combines book marketing, audience development, and strategic positioning.";
  let bullets = [
    "Start with a structured assessment of the book, audience, and objective.",
    "Prioritize the channel mix that fits your current stage.",
    "Use measured execution instead of a generic package.",
  ];

  if (objective === "launch" || stage === "manuscript") {
    tag = "Launch Recommendation";
    title = "Launch Visibility Framework";
    text =
      "Your answers point toward a launch-focused strategy built around preparation, campaign timing, retailer visibility, and audience readiness.";
    bullets = [
      "Recommended focus: launch planning, Amazon marketing, and content support.",
      "Best fit when the book is newly complete or preparing to go live.",
      "Useful next step: request a launch-oriented assessment.",
    ];
  }

  if (objective === "authority" || support === "branding") {
    tag = "Authority Recommendation";
    title = "Author Branding and Authority Path";
    text =
      "Your answers suggest a stronger need for thought leadership, featured content, search visibility, and a more credible author platform.";
    bullets = [
      "Recommended focus: author branding, featured articles, SEO, and PR support.",
      "Best fit for experts, consultants, and nonfiction authors.",
      "Useful next step: request an authority-building marketing plan.",
    ];
  }

  if (objective === "readers" || support === "content") {
    tag = "Growth Recommendation";
    title = "Reader Growth and Discoverability Plan";
    text =
      "Your answers indicate a need for content systems, email marketing, retailer discoverability, and reader acquisition over time.";
    bullets = [
      "Recommended focus: content marketing, email marketing, and discoverability work.",
      "Best fit when the goal is sustainable traction rather than a short spike.",
      "Useful next step: map your audience growth priorities.",
    ];
  }

  if (stage === "relaunch" || objective === "relaunch_goal") {
    tag = "Relaunch Recommendation";
    title = "Relaunch and Repositioning Strategy";
    text =
      "Your answers suggest the book may benefit from refreshed positioning, a cleaner market angle, updated assets, and a reintroduction campaign.";
    bullets = [
      "Recommended focus: repositioning, campaign refresh, and visibility reset.",
      "Best fit for previously published books that need renewed momentum.",
      "Useful next step: review what should change before relaunch.",
    ];
  }

  if (platform === "platform_no" && audience === "small") {
    bullets.push(
      "Because your current platform is limited, author platform building should be included early.",
    );
  }

  if (investment === "starter") {
    bullets.push(
      "A focused first-step campaign may be the best place to begin.",
    );
  } else if (investment === "comprehensive") {
    bullets.push(
      "A broader integrated campaign may be justified given your readiness.",
    );
  }

  return { tag, title, text, bullets };
}

function renderResult() {
  const result = getRecommendation();
  progressText.textContent = "Recommendation ready";
  progressFill.style.width = "100%";

  quizStage.innerHTML = `
    <div class="result-card">
      <span class="result-tag">${result.tag}</span>
      <h2>${result.title}</h2>
      <p>${result.text}</p>
      <ul class="result-list">
        ${result.bullets.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <div class="result-actions">
        <a class="btn btn-primary" href="index.html#contact">Request an Assessment</a>
        <button class="btn btn-secondary" id="restartQuiz" type="button">Restart Quiz</button>
      </div>
    </div>
  `;

  prevBtn.style.visibility = "hidden";
  nextBtn.style.display = "none";

  document.getElementById("restartQuiz").addEventListener("click", () => {
    currentQuestion = 0;
    for (let i = 0; i < answers.length; i++) answers[i] = null;
    nextBtn.style.display = "inline-flex";
    renderQuestion();
  });
}

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (answers[currentQuestion] === null) {
    alert("Please select an option before continuing.");
    return;
  }
  if (currentQuestion < quizData.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    renderResult();
  }
});

renderQuestion();
