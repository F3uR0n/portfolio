export const personalInfo = {
  name: "Farhan Sadik",
  alias: "F3uR0n",
  title: "CS Student & Builder",
  taglines: [
    "CS @ BRAC University",
    "Exploring AI/ML & System Design",
    "Building at the intersection of code and creativity",
    "Always shipping. Always learning.",
  ],
  email: "farhansadiknihal@gmail.com",
  phone: "01407-496072",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/F3uR0n",
  linkedin: "https://www.linkedin.com/in/farhan-sadik-945571218/",
  bio: [
    "Computer Science student at BRAC University with a strong foundation in data structures, algorithms, ML, and software development.",
    "I build things that bridge raw computation and real-world impact from 3D horror survival games rendered with OpenGL to ML pipelines that predict health outcomes.",
    "Currently deep-diving into AI/ML, system design and modern web technologies.",
  ],
};

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    items: ["Java", "Python", "JavaScript", "PHP", "HTML", "CSS"],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    items: ["Scikit-Learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    category: "Graphics",
    icon: "Gamepad2",
    items: ["OpenGL", "GLUT", "PyOpenGL"],
  },
  {
    category: "Web & Backend",
    icon: "Globe",
    items: ["PHP", "Flask", "REST APIs"],
  },
  {
    category: "Database",
    icon: "Database",
    items: ["MySQL"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    items: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
];

export const education = [
  {
    degree: "BSc in Computer Science",
    institution: "BRAC University",
    location: "Dhaka, Bangladesh",
    period: "Jan 2024 – Present",
    current: true,
    details: [
      // "CGPA: x.xx/4.00",
      // "Completed 7 semesters",
      // "Focus: Software Engineering, Algorithms & AI/ML",
      // "Dean's List"
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Adamjee Cantonment College",
    field: "Science",
    location: "Dhaka, Bangladesh",
    period: "June 2021 – Dec 2022",
    gpa: "5.00/5.00",
    details: [],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Ideal School & College",
    field: "Science",
    location: "Dhaka, Bangladesh",
    period: "Jan 2019 – Dec 2020",
    gpa: "5.00/5.00",
    details: [],
  },
];

export const experience: {
  role: string;
  institution: string;
  period: string;
  description: string;
  tags: string[];
}[] = [
  // {
  //   role: "AI / Machine Learning",
  //   institution: "BRAC University — CSE422",
  //   period: "Fall 2025",
  //   description:
  //     "Implemented ML pipelines from scratch: data preprocessing, EDA, model training with Decision Tree, KNN, Neural Networks, and K-Means. Evaluated models using accuracy, confusion matrix, and ROC/AUC metrics.",
  //   tags: ["Python", "Scikit-Learn", "ML", "AI", "Jupyter"],
  // },
];

export const courseRepos = [
  {
    name: "Numerical Methods",
    course: "CSE330",
    github: "https://github.com/F3uR0n/brac-cse330-numerical-methods",
    tech: ["Python", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    name: "Artificial Intelligence",
    course: "CSE422",
    github: "https://github.com/F3uR0n/brac-cse422-artificial-intelligence",
    tech: ["Python", "Scikit-Learn", "ML", "AI"],
  },
  {
    name: "Database Systems",
    course: "CSE370",
    github: "https://github.com/F3uR0n/brac-cse370-database-systems",
    tech: ["MySQL", "Database Design", "SQL Queries"],
  },
  {
    name: "Computer Graphics",
    course: "CSE423",
    github: "https://github.com/F3uR0n/brac-cse423-computer-graphics",
    tech: ["Python", "OpenGL", "GLUT", "PyOpenGL", "3D Rendering"],
  },
  {
    name: "Algorithms Theory",
    course: "CSE221",
    github: "https://github.com/F3uR0n/brac-cse221-algorithms-theory",
    tech: ["DSA"],
  },
  {
    name: "Algorithms Lab",
    course: "CSE221",
    github: "https://github.com/F3uR0n/brac-cse221-algorithms-lab",
    tech: ["DSA"],
  },
  {
    name: "Data Structures Theory",
    course: "CSE220",
    github: "https://github.com/F3uR0n/brac-cse220-data-structures-theory",
    tech: ["DSA"],
  },
  {
    name: "Data Structures Lab",
    course: "CSE220",
    github: "https://github.com/F3uR0n/brac-cse220-data-structures-lab",
    tech: ["DSA"],
  },
  {
    name: "Mathematics and Natural Sciences",
    course: "MAT110 MAT120 MAT215 MAT216 PHY111 PHY112",
    github: "https://github.com/F3uR0n/brac-cse221-algorithms-lab",
    tech: ["Math", "Physics"],
  },
];

export const mlModels = [
  {
    name: "Diabetes Prediction - Flask App",
    description:
      "Full-stack web application for diabetes risk assessment. Flask backend serves a trained ML model with real-time predictions. Includes healthcare AI features built with scikit-learn.",
    course: "",
    tech: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Flask", "Healthcare AI"],
    github: "https://github.com/F3uR0n/diabetes-prediction-ml-flask",
    live: "https://diabetes-predictor-7x8i.onrender.com/",
    featured: true,
    isPrivate: false,
    screenshot: "/diabetes-prediction-flask.png",
    metrics: ["Decision Tree", "KNN", "Neural Network", "K-Means"],
  },
  {
    name: "Diabetes Prediction — ML Model",
    description:
      "End-to-end ML workflow with full EDA, multiple algorithm comparison (Decision Tree, KNN, Neural Network, K-Means), and evaluation using accuracy, confusion matrix, and ROC/AUC metrics.",
    course: "",
    tech: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/F3uR0n/diabetes-prediction-ml",
    live: null,
    featured: false,
    isPrivate: false,
    screenshot: null,
    metrics: [],
  },
];

export const projects = [
  {
    name: "CrakUFlix",
    description:
      `Netflix-style course video platform for BRAC University students. Browse lecture recordings across CS courses, watch YouTube unlisted and Google Drive videos in-app, mark videos as watched per Google account, and view aggregate site analytics, all with zero backend or database.
      \nCurrent: Course browser, video playback, watch tracking, Google auth (BRACU accounts only), Umami analytics\nPhase 2: Interactive Java code simulator for tracing loops and variable state step-by-step\nPhase 3: RAG-powered AI tutor grounded in course lecture content`,
    tech: ["TypeScript", "Next.js", "tailwindcss"],
    github: "",
    live: "https://crak-u-flix.vercel.app/",
    featured: true,
    isPrivate: false,
    inDevelopment: true,
    screenshot: "/CrakUFlix.png",
  },
  {
    name: "Kalo Rituals - 3D Horror Survival Game",
    description:
      "A horror-themed dual survival game built with OpenGL. Real-time 3D rendering, ghost AI with timed visibility and stun states, two-floor level design with teleport pad transitions, first/third-person camera toggle, ritual artifact collection, health system, HUD and difficulty selection. No game engine, built from scratch.",
    tech: ["Python", "OpenGL", "GLUT", "PyOpenGL", "Computer Graphics"],
    github: "https://github.com/F3uR0n/kalo-rituals",
    live: null,
    featured: true,
    isPrivate: false,
    inDevelopment: false,
    screenshot: "/kalo-rituals-1.png",
  },
  {
    name: "Smart Blood Donor System",
    description:
      "A system to connect blood donors with recipients, streamlining the process of finding compatible donors in emergencies.",
    tech: ["MySQL", "PHP", "JavaScript", "Node.js"],
    github: "https://github.com/F3uR0n/smart-blood-donor-system",
    live: "https://f3ur0n.42web.io/smart-blood-donor/index.php",
    featured: true,
    isPrivate: false,
    inDevelopment: true,
    screenshot: "/smart-blood-donor.png",
  },
  {
    name: "Rizz Bot",
    description: "Rizz Bot is a Discord bot that tracks chat activity, awards rizz levels and provides troll interactions with optional image roasts. It uses slash commands and message events to deliver stats and light-hearted trolling within a server.",
    tech: ["JavaScript", "Node.js", "Discord.js"],
    github: "https://github.com/F3uR0n/rizz-bot",
    live: null,
    featured: true,
    isPrivate: false,
    inDevelopment: false,
  },
  {
    name: "Crypto API Host",
    description: "Nebula Markets is a focused front-end project that visualizes crypto market movement with clarity. It blends rich filtering and charting with a modern UI to surface market trends at a glance. Built to showcase clean API integration and data visualization without backend complexity.",
    tech: ["JavaScript"],
    github: "https://github.com/F3uR0n/crypto-api-host",
    live: "https://f3ur0n.github.io/crypto-api-host/",
    featured: true,
    isPrivate: false,
  },
  {
    name: "Snake Game",
    description: "A classic Snake game built using Python and the Turtle graphics module. Guide the snake to eat food, grow longer and avoid collisions with walls or itself. This project demonstrates game logic, animation, collision detection and user input handling in Python.",
    tech: ["Python"],
    github: "https://github.com/F3uR0n/snake-game",
    live: null,
    featured: false,
    isPrivate: false,
  },
];
