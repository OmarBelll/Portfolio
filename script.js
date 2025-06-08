// Translations object with Arabic (ar) and German (de)
const translations = {
  en: {
    greeting: "Hello, I'm ",
    name: "Omar Belhassen",
    tagline: "Tunisian Developer. Future Computer Engineer. Passionate About Tech, AI & Games.",
    aboutTitle: "About Me",
    aboutParagraphs: [
      "I'm Omar Belhassen, an 18-year-old Tunisian computer science student.",
      "I earned my Math Baccalaureate with a 14.53 average and competed internationally in the World Robotics Olympiad in Germany (2022).",
      "I speak Arabic, French, English, and Spanish. I'm passionate about artificial intelligence, game development, and creating real-world solutions—like study platforms and music apps—to help people in my country and beyond.",
      "I love blending creativity with technology and constantly challenge myself to learn and build new things."
    ],
    skillsTitle: "Skills",
    skillCategories: [
      {
        name: "Languages",
        skills: [
          { name: "Arabic", percentage: "100%" },
          { name: "English", percentage: "80%" },
          { name: "French", percentage: "70%" },
          { name: "Spanish", percentage: "50%" }
        ]
      },
      {
        name: "Programming",
        skills: [
          { name: "Python", percentage: "80%" },
          { name: "Web Dev", percentage: "70%" },
          { name: "Java", percentage: "60%" },
          { name: "Unity", percentage: "45%" },
          { name: "C", percentage: "55%" }
        ]
      },
      {
        name: "Creativity",
        skills: [
          { name: "Graphic Design", percentage: "80%" },
          { name: "Video Editing", percentage: "50%" }
        ]
      }
    ]
  },
  fr: {
    greeting: "Bonjour, je suis ",
    name: "Omar Belhassen",
    tagline: "Développeur tunisien. Futur ingénieur informatique. Passionné par la tech, l'IA et les jeux.",
    aboutTitle: "À propos de moi",
    aboutParagraphs: [
      "Je suis Omar Belhassen, étudiant en informatique tunisien de 18 ans.",
      "J'ai obtenu mon baccalauréat scientifique avec une moyenne de 14,53 et j'ai participé à la World Robotics Olympiad en Allemagne (2022).",
      "Je parle arabe, français, anglais et espagnol. Je suis passionné par l'intelligence artificielle, le développement de jeux et la création de solutions concrètes — comme des plateformes d'étude et des applications musicales — pour aider mon pays et au-delà.",
      "J'adore allier créativité et technologie et me challenger constamment à apprendre et à construire de nouvelles choses."
    ],
    skillsTitle: "Compétences",
    skillCategories: [
      {
        name: "Langues",
        skills: [
          { name: "Arabe", percentage: "100%" },
          { name: "Anglais", percentage: "80%" },
          { name: "Français", percentage: "70%" },
          { name: "Espagnol", percentage: "50%" }
        ]
      },
      {
        name: "Programmation",
        skills: [
          { name: "Python", percentage: "80%" },
          { name: "Développement Web", percentage: "70%" },
          { name: "Java", percentage: "60%" },
          { name: "Unity", percentage: "45%" },
          { name: "C", percentage: "55%" }
        ]
      },
      {
        name: "Créativité",
        skills: [
          { name: "Design Graphique", percentage: "80%" },
          { name: "Montage Vidéo", percentage: "50%" }
        ]
      }
    ]
  },
  ar: {
    greeting: "مرحبًا، أنا ",
    name: "عمر بالحسن",
    tagline: "مطور تونسي. مهندس كمبيوتر مستقبلي. شغوف بالتقنية والذكاء الاصطناعي والألعاب.",
    aboutTitle: "نبذة عني",
    aboutParagraphs: [
      "أنا عمر بالحسن، طالب علوم حاسوب تونسي عمري 18 سنة.",
      "حصلت على شهادة البكالوريا في الرياضيات بمعدل 14.53 وشاركت في أولمبياد الروبوتات العالمية في ألمانيا (2022).",
      "أتحدث العربية والفرنسية والإنجليزية والإسبانية. شغوف بالذكاء الاصطناعي، تطوير الألعاب، وصنع حلول واقعية مثل منصات الدراسة وتطبيقات الموسيقى لمساعدة بلدي والعالم.",
      "أحب الدمج بين الإبداع والتقنية وأتحدى نفسي باستمرار لتعلم وبناء أشياء جديدة."
    ],
    skillsTitle: "المهارات",
    skillCategories: [
      {
        name: "اللغات",
        skills: [
          { name: "العربية", percentage: "100%" },
          { name: "الإنجليزية", percentage: "80%" },
          { name: "الفرنسية", percentage: "70%" },
          { name: "الإسبانية", percentage: "50%" }
        ]
      },
      {
        name: "البرمجة",
        skills: [
          { name: "Python", percentage: "80%" },
          { name: "Web Dev", percentage: "70%" },
          { name: "Java", percentage: "60%" },
          { name: "Unity", percentage: "45%" },
          { name: "C", percentage: "55%" }
        ]
      },
      {
        name: "الإبداع",
        skills: [
          { name: "التصميم الجرافيكي", percentage: "80%" },
          { name: "مونتاج الفيديو", percentage: "50%" }
        ]
      }
    ]
  },
  de: {
    greeting: "Hallo, ich bin ",
    name: "Omar Belhassen",
    tagline: "Tunesischer Entwickler. Zukünftiger Computeringenieur. Leidenschaftlich für Technik, KI & Spiele.",
    aboutTitle: "Über mich",
    aboutParagraphs: [
      "Ich bin Omar Belhassen, ein 18-jähriger tunesischer Informatikstudent.",
      "Ich habe mein Mathematik-Baccalaureat mit einem Durchschnitt von 14,53 bestanden und international an der World Robotics Olympiad in Deutschland (2022) teilgenommen.",
      "Ich spreche Arabisch, Französisch, Englisch und Spanisch. Ich bin begeistert von künstlicher Intelligenz, Spieleentwicklung und der Erstellung von realen Lösungen – wie Lernplattformen und Musik-Apps – um Menschen in meinem Land und darüber hinaus zu helfen.",
      "Ich liebe es, Kreativität mit Technologie zu verbinden und fordere mich ständig heraus, neue Dinge zu lernen und zu bauen."
    ],
    skillsTitle: "Fähigkeiten",
    skillCategories: [
      {
        name: "Sprachen",
        skills: [
          { name: "Arabisch", percentage: "100%" },
          { name: "Englisch", percentage: "80%" },
          { name: "Französisch", percentage: "70%" },
          { name: "Spanisch", percentage: "50%" }
        ]
      },
      {
        name: "Programmierung",
        skills: [
          { name: "Python", percentage: "80%" },
          { name: "Webentwicklung", percentage: "70%" },
          { name: "Java", percentage: "60%" },
          { name: "Unity", percentage: "45%" },
          { name: "C", percentage: "55%" }
        ]
      },
      {
        name: "Kreativität",
        skills: [
          { name: "Grafikdesign", percentage: "80%" },
          { name: "Videobearbeitung", percentage: "50%" }
        ]
      }
    ]
  }
};

// Elements to update
const elements = {
  greeting: document.querySelector('.hero-content h1'),
  tagline: document.querySelector('.tagline'),
  aboutTitle: document.querySelector('.about h2'),
  aboutParagraphs: document.querySelectorAll('.about p'),
  skillsTitle: document.querySelector('.skills h2'),
  skillCategories: document.querySelectorAll('.skills h3'),
  skillNames: document.querySelectorAll('.skill-name'),
  skillPercentages: document.querySelectorAll('.skill-percentage')
};

function setLanguage(lang) {
  const t = translations[lang];

  // Update hero greeting with name highlighted
  elements.greeting.innerHTML = `${t.greeting}<span class="highlight">${t.name}</span>`;

  elements.tagline.textContent = t.tagline;
  elements.aboutTitle.textContent = t.aboutTitle;

  elements.aboutParagraphs.forEach((p, i) => {
    p.textContent = t.aboutParagraphs[i];
  });

  // Update skills section
  elements.skillsTitle.textContent = t.skillsTitle;
  let skillIndex = 0;
  elements.skillCategories.forEach((cat, i) => {
    cat.textContent = t.skillCategories[i].name;
    for (let j = 0; j < t.skillCategories[i].skills.length; j++) {
      elements.skillNames[skillIndex].textContent = t.skillCategories[i].skills[j].name;
      elements.skillPercentages[skillIndex].textContent = t.skillCategories[i].skills[j].percentage;
      skillIndex++;
    }
  });

  // Save language selection
  localStorage.setItem('lang', lang);

  // Update active button style
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Handle RTL for Arabic
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.style.textAlign = 'right';
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.style.textAlign = 'left';
  }
}

// On language button click
document.querySelectorAll('.lang-btn').forEach(button => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

// Load saved language or default to English
const savedLang = localStorage.getItem('lang') || 'en';
setLanguage(savedLang);

// ScrollReveal animations
ScrollReveal().reveal('.hero-content', {
  delay: 300,
  distance: '50px',
  origin: 'top',
  duration: 1000,
  reset: false,
  cleanup: false,
  mobile: true,
  viewFactor: 0
});

ScrollReveal().reveal('.about .container', {
  delay: 400,
  distance: '60px',
  origin: 'bottom',
  duration: 1000,
  reset: false,
  cleanup: false,
  mobile: true
});

ScrollReveal().reveal('.skills .container', {
  delay: 400,
  distance: '60px',
  origin: 'bottom',
  duration: 1000,
  reset: false,
  cleanup: false,
  mobile: true
});