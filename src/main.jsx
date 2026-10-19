import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const links = {
  github: 'https://github.com/shubhanu-code',
  linkedin: 'https://www.linkedin.com/in/shubhanu-chatterjee-338242316',
  email: 'mailto:SHUBHANUCHATTERJEE@GMAIL.COM',
}

const projects = [
  {
    number: '01',
    title: 'Smart File Search',
    text: 'A desktop search experience that brings semantic retrieval to local files.',
    tags: ['Python', 'FAISS', 'SQLite', 'PyQt6'],
    accent: 'violet',
  },
  {
    number: '02',
    title: 'WhatsApp Auto-Reply Dashboard',
    text: 'A dashboard-oriented workspace for managing automated WhatsApp replies.',
    tags: ['React', 'Vite', 'Node.js', 'SQLite', 'Baileys'],
    accent: 'lime',
  },
]

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span> }

function App() {
  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <nav className="nav container">
        <a className="logo" href="#top" aria-label="Back to top">SC<span>·</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experiments">Lab</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="status" href="#contact"><i /> Available to connect</a>
      </nav>

      <section id="top" className="hero container">
        <p className="eyebrow reveal">DSAI student · IIIT Dharwad</p>
        <h1 className="hero-title">
          <span className="reveal line-one">Shubhanu</span>
          <span className="reveal line-two">Chatterjee<span className="period">.</span></span>
        </h1>
        <div className="hero-bottom reveal">
          <p>I explore the space where <em>intelligent systems</em>, useful tools, and curious ideas meet.</p>
          <a href="#work" className="round-link" aria-label="See selected work">↓</a>
        </div>
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
      </section>

      <section id="work" className="projects container section">
        <div className="section-heading"><p className="eyebrow">Selected work</p><span>(02)</span></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project ${project.accent}`} key={project.title}>
              <span className="project-number">{project.number}</span>
              <div className="project-core"><h2>{project.title}</h2><p>{project.text}</p></div>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="project-arrow"><Arrow /></div>
            </article>
          ))}
        </div>
        <p className="project-note">Project links will appear here as they are published.</p>
      </section>

      <section id="experiments" className="lab section">
        <div className="container lab-grid">
          <div>
            <p className="eyebrow">The verification lab</p>
            <h2>AI/ML, with the receipts.</h2>
          </div>
          <div className="lab-card">
            <div className="pulse"><span /><span /><span /></div>
            <p className="lab-label">Experiment archive</p>
            <h3>Verified AI/ML experiments</h3>
            <p>Documented explorations, methods, and outcomes—shared when they are ready to be examined.</p>
            <span className="coming-soon">In progress</span>
          </div>
        </div>
      </section>

      <section className="about container section">
        <p className="eyebrow">A little context</p>
        <p className="about-copy">I’m a Data Science and Artificial Intelligence student at <span>IIIT Dharwad</span>, learning by turning technical questions into things people can actually use.</p>
      </section>

      <section id="contact" className="contact container section">
        <p className="eyebrow">Open a channel</p>
        <a className="contact-title" href={links.email}>Let’s make<br /><em>something useful.</em><Arrow /></a>
        <div className="contact-links">
          <a href={links.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href={links.email}>Email <Arrow /></a>
          <span>Resume — coming later</span>
        </div>
      </section>

      <footer className="container"><span>© {new Date().getFullYear()} Shubhanu Chatterjee</span><span>Built with curiosity.</span></footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
