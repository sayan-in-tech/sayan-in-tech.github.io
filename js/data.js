/**
 * data.js — Single source of truth for all site content.
 *
 * To update the portfolio, edit ONLY this file:
 *   - Add a project  → push to `projects`
 *   - Add a cert     → push to `certifications`
 *   - Add experience → push to `experience`
 *   - Change links   → edit `site` or `social`
 */

export const site = {
  name: 'Sayan Ghosh',
  initials: 'SG',
  profileImage: 'assets/bitmoji-avatar.svg',
  role: 'Full Stack Software Engineer \u00b7 AI/ML Developer',
  tagline: 'India',
  email: 'sayan18012004@gmail.com',
  emailHref: 'https://mail.google.com/mail/?view=cm&to=sayan18012004@gmail.com',
  resumeHref: 'https://drive.google.com/file/d/1-ivnkO3a4kfjiO0ArJTfxfV5O2j7g8ei/view?usp=drive_link',
  credlyHref: 'https://www.credly.com/users/sayan-ghosh.d79c03eb/badges',
  url: 'https://sayan-in-tech.me/',
  description: 'Portfolio of Sayan Ghosh, a problem solver with expertise in AI, ML, and backend development.',
  year: 2026,
};

export const social = [
  { label: 'Email',    href: site.emailHref,                                        icon: 'mail'     },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sayan-in-tech/',          icon: 'linkedin' },
  { label: 'GitHub',   href: 'https://github.com/sayan-in-tech',                    icon: 'github'   },
];

export const navLinks = [
  { label: 'About',          href: '#about'          },
  { label: 'Experience',     href: '#experience'     },
  { label: 'Skills',         href: '#skills'         },
  { label: 'Projects',       href: '#projects'       },
  { label: 'Certifications', href: '#certifications' },
];

export const about = [
  'I’m Sayan Ghosh, a final-semester engineering student with ~10 months of hands-on experience across Sereno, Innotrat Labs, Infosys, and AICTE. I build production-grade backend and AI systems, including multi-agent RAG pipelines and LLM applications now serving 100,000+ real users.',
  'I enjoy solving hard problems at the intersection of distributed systems and applied AI. Strong in Python, system design, and cloud fundamentals, I care about shipping reliable software that works at scale and learning fast in high-performance environments.',
];

export const specialties = [
  { name: 'Artificial Intelligence',      desc: 'CNN, LSTM, GenAI, Transformers, and more.',                  icon: 'brain'  },
  { name: 'Agentic AI',                   desc: 'LangChain, LangGraph, OpenAI and more.',                    icon: 'bot'    },
  { name: 'Computer Vision',              desc: 'Image and Video Processing, Object Detection, and more.',   icon: 'eye'    },
  { name: 'Natural Language Processing',  desc: 'Text Processing, Sentiment Analysis, and more.',            icon: 'file'   },
];

export const experience = [
  { role: 'AI/ML Developer Intern', company: 'Sereno',                          date: 'August 2025 \u2013 September 2025' },
  { role: 'AI ML Developer Intern', company: 'Innotrat Labs',                   date: 'May 2025 \u2013 June 2025'        },
  { role: 'AI Intern',              company: 'Infosys',                          date: 'Oct 2024 \u2013 Dec 2024'         },
  { role: 'Cloud Virtual Intern',   company: 'AICTE-EduSkills & AWS Academy',   date: 'Oct 2024 \u2013 Dec 2024'         },
];

export const education = [
  { school: 'Kalinga Institute of Industrial Technology, Bhubaneswar', degree: 'B.Tech in Computer Science and Engineering', date: '2022 \u2013 2026' },
];

export const skills = {
  Languages: [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "SQL"
  ],
  'Frameworks & Libraries': [
    "FastAPI",
    "Django",
    "LangChain",
    "LangGraph",
    "PyTorch",
    "TensorFlow",
    "React",
    "Node.js"
  ],
  'Developer Tools': [
    "Git",
    "GitHub Actions",
    "Docker",
    "CI/CD",
    "Postman",
    "Linux",
    "Mac OS",
    "Jupyter"
  ],
  'Cloud': [
    "AWS",
    "Azure",
    "GCP"
  ]
};

export const projects = [
  { name: 'NeuroTone',                  href: 'https://github.com/sayan-in-tech/NeuroTone-A-Vocal-Emotions-Classifier', initial: 'N', hue: 220 },
  { name: 'FoxxData',                   href: 'https://github.com/sayan-in-tech/FoxxData',                              initial: 'F', hue: 150 },
  { name: 'MediTrain',                  href: 'https://github.com/sayan-in-tech/MediTrain-Chatbot',                     initial: 'M', hue: 0   },
  { name: 'CarTagDetect',               href: 'https://github.com/sayan-in-tech/CarTagDetect',                          initial: 'C', hue: 40  },
  { name: 'StockSeer',                  href: 'https://github.com/sayan-in-tech/StockSeer',                             initial: 'S', hue: 270 },
  { name: 'FilmFinder',                 href: 'https://github.com/sayan-in-tech/FilmFinder',                            initial: 'F', hue: 180 },
  { name: 'QR Browser Extension',       href: 'https://github.com/sayan-in-tech/QR-Code-Generator',                    initial: 'Q', hue: 250 },
  { name: 'Neural Network from Scratch', href: 'https://github.com/sayan-in-tech/ScratchMNIST',                        initial: 'N', hue: 25  },
];

export const certifications = [
  { name: 'AWS Academy Cloud Architecting',    category: 'Cloud Technology',      year: 2024, href: 'https://www.credly.com/badges/637cea12-6e57-42e7-825b-c609882d44f6/public_url' },
  { name: 'Agile Scrum in Practice by Infosys', category: 'Computer Engineering', year: 2024, href: 'https://drive.google.com/file/d/1OU0Db-D-W9L4PLwhpLOCmXMIxuUF96EV/view' },
  { name: 'Advanced Data Science with IBM',    category: 'Data Science',          year: 2024, href: 'https://drive.google.com/file/d/1B4TH9VtZYGtuqe0TkFxAaAUQJ-67UXv6/view?usp=sharing' },
  { name: 'Meta Data Analyst',                 category: 'Data Analysis',         year: 2024, href: 'https://www.coursera.org/account/accomplishments/professional-cert/42GM2BBDPA9Q' },
  { name: 'Applied AI with Deep Learning',     category: 'Artificial Intelligence', year: 2024, href: 'https://www.coursera.org/account/accomplishments/verify/STRBLBLL8RP4' },
  { name: 'IBM Full Stack Software Developer', category: 'Software Engineering',  year: 2024, href: 'https://www.coursera.org/account/accomplishments/professional-cert/ZK5G36S3VA25' },
  { name: 'MLOps | Machine Learning Operations', category: 'Machine Learning',   year: 2024, href: 'https://www.coursera.org/account/accomplishments/specialization/S9WZY43FG3R7' },
  { name: 'Advanced ML and Signal Processing', category: 'Machine Learning',     year: 2024, href: 'https://www.coursera.org/account/accomplishments/verify/EN2D6CVAARH7' },
];
