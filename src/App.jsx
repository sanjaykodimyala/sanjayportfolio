import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import profileImg from './assets/sanjay-profile.jpeg'
import amazonImg from './assets/amazon-pic.png'
import campusImg from './assets/digital-campus-magazine.png'
import portfolioImg from './assets/portfolio-image.jpg'
import './App.css'

const resumeUrl = '/Kodimyala-Sanjay-Resume.pdf'

const projects = [
  {
    title: 'Digital Campus Magazine',
    type: 'Academic Project',
    image: campusImg,
    imageAlt: 'Digital Campus Magazine responsive website preview',
    description:
      'Built a dynamic campus magazine platform for publishing articles, sharing student stories, and organizing content with a clean user experience.',
    tags: ['Python', 'HTML', 'CSS'],
  },
  {
    title: 'Portfolio Website',
    type: 'Frontend',
    image: portfolioImg,
    imageAlt: 'Portfolio website shown on a laptop screen',
    description:
      'Designed and developed a responsive personal portfolio using React and CSS to showcase experience, education, skills, projects, and resume access.',
    tags: ['React', 'CSS', 'Vite'],
  },
  {
    title: 'ML Data Operations Associate',
    type: 'Experience',
    image: amazonImg,
    imageAlt: 'Amazon logo',
    mediaVariant: 'logo',
    description:
      'Worked on ML data operations by reviewing large datasets, maintaining quality standards, and supporting reliable machine learning workflows.',
    tags: ['Data Review', 'ML Ops', 'Quality'],
  },
]

const skills = [
  'Python',
  'JavaScript',
  'React',
  'HTML',
  'CSS',
  'Node.js Basics',
  'SQL',
  'MySQL',
  'REST APIs',
  'Git',
  'GitHub',
]

const roleSlides = [
  'Full Stack Developer',
  'React Frontend Developer',
  'Python Web Developer',
  'ML Data Operations Associate',
]

const projectHighlights = [
  'Responsive Portfolio',
  'Campus Magazine Platform',
  'ML Data Quality Workflows',
  'Clean UI Development',
]

const contactLinks = [
  {
    label: 'Email',
    value: 'kodimyalasanjay@gmail.com',
    href: 'mailto:kodimyalasanjay@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91 8186852198',
    href: 'tel:+918186852198',
  },
  {
    label: 'LinkedIn',
    value: 'sanjay-kodimyala',
    href: 'https://www.linkedin.com/in/sanjay-kodimyala-',
  },
  {
    label: 'GitHub',
    value: 'sanjaykodimyala',
    href: 'https://github.com/sanjaykodimyala',
  },
]

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <main className="site-shell">
      <header className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Kodimyala Sanjay portfolio home">
          <span>KS</span>
          Kodimyala Sanjay
        </a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href={resumeUrl} target="_blank" rel="noreferrer">
            View Resume
          </a>
          <button className="theme-toggle" type="button" onClick={toggleTheme}>
            {theme === 'dark' ? 'Day Mode' : 'Dark Mode'}
          </button>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I'm</p>
          <h1>Kodimyala Sanjay</h1>
          <p className="hero-title">
            <span>Aspiring Full Stack Developer</span>
            <span>Turning Ideas into Functional Web Applications</span>
          </p>
          <div className="sliding-role" aria-label="Professional focus areas">
            <span>And I work as a</span>
            <div className="role-window">
              <div className="role-track">
                {roleSlides.map((role) => (
                  <strong key={role}>{role}</strong>
                ))}
                <strong>{roleSlides[0]}</strong>
              </div>
            </div>
          </div>
          <p className="hero-text">
            MCA graduate with hands-on Amazon experience in ML data operations,
            dataset review, and quality-focused workflows. Skilled in building
            practical web applications with Python, React, HTML, CSS, SQL, and
            MySQL, with a strong interest in creating reliable, user-friendly
            full-stack solutions.
          </p>
          <div className="hero-actions" aria-label="Portfolio actions">
            <a className="button primary" href="#work">
              View Projects
            </a>
            <a className="button secondary" href="mailto:kodimyalasanjay@gmail.com">
              Contact Me
            </a>
            <a className="button secondary" href={resumeUrl} target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a className="button ghost" href={resumeUrl} download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-image-panel">
            <img src={heroImg} alt="" />
          </div>
          <div className="stat-card top">
            <strong>8.02</strong>
            <span>MCA CGPA</span>
          </div>
          <div className="stat-card bottom">
            <strong>2025</strong>
            <span>MCA Graduate</span>
          </div>
        </div>
      </section>

      <section className="section intro-section" id="about" aria-labelledby="about-title">
        <div className="section-heading centered">
          <p className="eyebrow">About Me</p>
          <h2 id="about-title">Who I Am?</h2>
        </div>
        <div className="summary-card">
          <div className="profile-photo">
            <img src={profileImg} alt="Kodimyala Sanjay" />
          </div>
          <div className="summary-copy">
            <h3>I'm Sanjay, an aspiring full stack developer.</h3>
            <p>
              Sanjay is an MCA graduate with hands-on experience in machine learning
              data operations and practical web development. At Amazon, he worked on
              dataset review tasks that required accuracy, consistency, and attention
              to quality. Alongside professional experience, he has built academic and
              personal web projects using Python, React, HTML, CSS, SQL, and MySQL.
            </p>
            <p>
              He is focused on building clean, responsive, and functional web
              applications while continuing to strengthen his full-stack development
              skills and problem-solving mindset.
            </p>
            <a className="button primary summary-action" href={resumeUrl} download>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-title">
        <div className="section-heading centered">
          <p className="eyebrow">Experience</p>
          <h2 id="experience-title">Professional Background</h2>
        </div>
        <div className="timeline-card">
          <div className="timeline-media">
            <img src={amazonImg} alt="Amazon logo" />
          </div>
          <div>
            <p className="project-type">Amazon</p>
            <h3>ML Data Operations Associate</h3>
            <p className="date-line">July 2025 - January 2026</p>
          </div>
          <p>
            Processed and reviewed large-scale datasets to support machine learning
            data operations, with attention to accuracy, quality, and consistency.
          </p>
        </div>
      </section>

      <section className="section" id="work" aria-labelledby="work-title">
        <div className="section-heading centered">
          <p className="eyebrow">My Projects</p>
          <h2 id="work-title">What I Did?</h2>
        </div>
        <div className="highlight-marquee" aria-label="Project highlights">
          <div className="marquee-track">
            {[...projectHighlights, ...projectHighlights].map((highlight, index) => (
              <span key={`${highlight}-${index}`}>{highlight}</span>
            ))}
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-media ${project.mediaVariant ?? ''}`}>
                <img src={project.image} alt={project.imageAlt} />
              </div>
              <div className="project-body">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section education-section" aria-labelledby="education-title">
        <div className="section-heading centered">
          <p className="eyebrow">Education</p>
          <h2 id="education-title">Master of Computer Applications</h2>
        </div>
        <div className="education-card">
          <p className="project-type">University College of Science</p>
          <h3>MCA</h3>
          <p>2025 | CGPA: 8.02</p>
        </div>
      </section>

      <section className="section skills-section" id="skills" aria-labelledby="skills-title">
        <div className="section-heading centered">
          <p className="eyebrow">Toolkit</p>
          <h2 id="skills-title">Technical Skills</h2>
        </div>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact Me</p>
          <h2 id="contact-title">Get in Touch</h2>
          <p>Open to entry-level software, web development, and ML data operations roles.</p>
          <div className="contact-actions">
            <a className="button primary" href={resumeUrl} target="_blank" rel="noreferrer">
              View Resume
            </a>
            <a className="button secondary" href={resumeUrl} download>
              Download Resume
            </a>
          </div>
        </div>
        <div className="contact-grid">
          {contactLinks.map((link) => (
            <a href={link.href} key={link.label} target={link.href.startsWith('http') ? '_blank' : undefined}>
              <span>{link.label}</span>
              {link.value}
            </a>
          ))}
        </div>
      </section>
      <div className="floating-actions" aria-label="Quick actions">
        <button className="round-action" type="button" onClick={toggleTheme}>
          {theme === 'dark' ? 'L' : 'D'}
        </button>
        <a className="round-action" href="#home" aria-label="Back to top">
          ^
        </a>
      </div>
    </main>
  )
}

export default App
