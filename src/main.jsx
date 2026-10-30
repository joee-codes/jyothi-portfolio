import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, ArrowUpRight, BrainCircuit, BarChart3, Mail, Menu, X, Code2, Sparkles, MapPin, GraduationCap, Layers3 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './style.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { number: '01', title: 'IntelliFix', fullName: 'AI-Powered Civic Complaint Management System', category: 'AI · CIVIC TECH', accent: 'mint', description: 'A full-stack civic complaint platform designed to manage reports through classification, image validation, location verification, routing, and resolution tracking.', tags: ['React.js', 'Django', 'REST APIs', 'NLP', 'CLIP', 'OCR', 'Leaflet'], icon: <BrainCircuit size={25} strokeWidth={1.5} />, outcome: 'Classify · Verify · Resolve', highlights: ['Role-based access across four user groups', 'Automated classification and department routing', 'Priority scoring, technician assignment, and progress tracking'], team: 'Developed by a team of four' },
  { number: '02', title: 'FinInsight', fullName: 'RAG-Based Financial Document Intelligence Platform', category: 'RAG · DOCUMENT AI', accent: 'violet', description: 'An AI-powered platform that analyzes corporate annual reports using document processing, semantic search, retrieval-augmented generation, and language models.', tags: ['Python', 'FastAPI', 'React.js', 'PyMuPDF', 'RAG', 'ChromaDB'], icon: <BarChart3 size={25} strokeWidth={1.5} />, outcome: 'Read · Retrieve · Understand', highlights: ['PDF ingestion, semantic chunking, and vector retrieval', 'Citation-backed conversational document analysis', 'KPI extraction, financial ratios, and cross-company comparison'], link: 'https://github.com/joee-codes/FinInsight' },
  { number: '03', title: 'ChurnLens', fullName: 'Customer Churn Prediction & Retention Analytics Platform', category: 'ML · RETENTION ANALYTICS', accent: 'orange', description: 'An interactive customer churn prediction platform built with machine learning and explainable AI, with single and bulk prediction workflows.', tags: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'SHAP', 'Streamlit'], icon: <Layers3 size={25} strokeWidth={1.5} />, outcome: 'Predict · Explain · Retain', highlights: ['IBM Telco dataset with single and bulk CSV prediction', 'Analytics dashboard, evaluation, and SHAP explanations', 'Prediction history and a Groq/Llama 3.1 assistant'], team: 'Developed by a team of two', link: 'https://github.com/joee-codes/churn-predictor-pro' }
]

const skillGroups = [
  ['Programming', 'Python', 'SQL', 'JavaScript', 'OOP'],
  ['AI & Machine Learning', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Feature Engineering', 'SHAP', 'Computer Vision'],
  ['Generative AI & NLP', 'Generative AI', 'LLMs', 'RAG', 'NLP', 'Word Embeddings', 'Semantic Search'],
  ['Data Analytics', 'Pandas', 'NumPy', 'Power BI', 'Tableau', 'Data Analysis', 'Data Visualization'],
  ['Backend & Databases', 'FastAPI', 'Django', 'REST APIs', 'PostgreSQL', 'SQLite', 'ChromaDB'],
  ['Frontend & Tools', 'React.js', 'Streamlit', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git']
]
const navItems = [['Home', 'home'], ['About', 'about'], ['Projects', 'work'], ['Skills', 'skills'], ['Education', 'education'], ['Contact', 'contact']]

function ProjectVisual({ project }) {
  return <div className={`project-art art-${project.accent} visual-${project.number}`} aria-hidden="true">
    <div className="art-grid" />
    {project.number === '01' && <>
      <div className="visual-map"><svg viewBox="0 0 600 240" preserveAspectRatio="none"><path d="M-20 175 130 100 260 132 380 48 620 92M60 260 155 172 235 190 355 105 480 123 570 30M20 35 145 92 165 170M290-20 260 132 275 240M470-10 380 48 405 220"/><path className="map-route" d="M60 260 155 172 235 190 355 105 480 123"/><circle cx="355" cy="105" r="9"/><circle cx="155" cy="172" r="5"/></svg></div>
      <div className="visual-label-card civic-label"><span className="visual-label-top"><i/> COMPLAINT #0248</span><strong>Road damage reported</strong><span className="visual-status"><i/> Routed to Public Works</span></div>
      <div className="visual-pin"><MapPin size={24}/></div>
    </>}
    {project.number === '02' && <>
      <div className="report-sheet"><div className="report-kicker">ANNUAL REPORT · 2025</div><strong>Financial overview</strong><div className="report-rule wide"/><div className="report-rule"/><div className="report-kpis"><span><i>REVENUE</i><b>$24.8B</b></span><span><i>YOY GROWTH</i><b className="report-growth">+12.4%</b></span></div><svg className="report-chart" viewBox="0 0 260 78" preserveAspectRatio="none"><path className="chart-fill" d="M0 70 0 55 40 47 78 51 118 29 155 38 198 15 260 8 260 70Z"/><path className="chart-line" d="M0 55 40 47 78 51 118 29 155 38 198 15 260 8"/><circle cx="198" cy="15" r="3"/><circle cx="260" cy="8" r="3"/></svg></div>
      <div className="citation-float"><span>✳</span> Answer grounded in report <b>p. 42</b></div>
    </>}
    {project.number === '03' && <>
      <div className="churn-dashboard"><div className="churn-head"><span>RETENTION OVERVIEW</span><i>LAST 90 DAYS</i></div><div className="churn-metric"><span>CHURN RISK</span><b>Elevated</b><small>Customer segment analysis</small></div><svg className="churn-chart" viewBox="0 0 360 110" preserveAspectRatio="none"><path className="churn-gridline" d="M0 25H360M0 55H360M0 85H360"/><path className="churn-line" d="M0 25 C35 32 42 26 70 41 S112 44 140 51 S182 43 212 68 S266 62 290 75 S330 84 360 98"/><path className="churn-area" d="M0 25 C35 32 42 26 70 41 S112 44 140 51 S182 43 212 68 S266 62 290 75 S330 84 360 98 V110 H0Z"/></svg><div className="churn-legend"><span><i/> Retention trend</span><span>MODEL INSIGHT</span></div></div>
      <div className="churn-side-stat"><span>FEATURE SIGNAL</span><b>Contract type</b><i>Higher month-to-month risk</i></div>
    </>}
    <span className="art-caption">{project.outcome}</span>
  </div>
}

function App() {
  const root = useRef(null)
  const portraitRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const handlePortraitMove = event => {
    const frame = portraitRef.current
    if (!frame || event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = frame.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
    const tiltX = Math.max(-1, Math.min(1, x))
    const tiltY = Math.max(-1, Math.min(1, y))
    frame.style.setProperty('--rotate-x', `${(-tiltY * 11).toFixed(2)}deg`)
    frame.style.setProperty('--rotate-y', `${(tiltX * 11).toFixed(2)}deg`)
    frame.style.setProperty('--frame-rotate-x', `${(-tiltY * 3).toFixed(2)}deg`)
    frame.style.setProperty('--frame-rotate-y', `${(tiltX * 3).toFixed(2)}deg`)
    frame.style.setProperty('--light-x', `${((tiltX + 1) * 50).toFixed(1)}%`)
    frame.style.setProperty('--light-y', `${((tiltY + 1) * 50).toFixed(1)}%`)
    frame.dataset.tilting = 'true'
  }

  const resetPortrait = () => {
    const frame = portraitRef.current
    if (!frame) return
    frame.style.setProperty('--rotate-x', '0deg')
    frame.style.setProperty('--rotate-y', '0deg')
    frame.style.setProperty('--frame-rotate-x', '0deg')
    frame.style.setProperty('--frame-rotate-y', '0deg')
    frame.style.setProperty('--light-x', '50%')
    frame.style.setProperty('--light-y', '50%')
    frame.dataset.tilting = 'false'
  }

  const handleAmbientPointer = event => {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    root.current?.style.setProperty('--pointer-x', `${(event.clientX / window.innerWidth * 100).toFixed(1)}%`)
    root.current?.style.setProperty('--pointer-y', `${(event.clientY / window.innerHeight * 100).toFixed(1)}%`)
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 28, opacity: 0, duration: 0.85, stagger: 0.12, ease: 'power3.out', delay: 0.12 })
      gsap.from('.hero-visual', { y: 24, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.25 })
      gsap.utils.toArray('.reveal').forEach(el => gsap.from(el, { y: 34, opacity: 0, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 86%', once: true } }))
      gsap.to('.profile-halo', { rotate: 360, duration: 48, repeat: -1, ease: 'none' })
    }, root)
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, .2, .5] })
    navItems.forEach(([, id]) => { const section = document.getElementById(id); if (section) observer.observe(section) })
    return () => { ctx.revert(); observer.disconnect() }
  }, [])

  const closeMenu = () => setMenuOpen(false)
  return <div ref={root} className="site-shell" onPointerMove={handleAmbientPointer}>
    <div className="noise" aria-hidden="true" />
    <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">J<span>.</span></span><span>JYOTHI L<span className="brand-sub">PORTFOLIO / 2026</span></span></a>
      <button className="mobile-menu" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <div id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map(([label, id]) => <a key={id} className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'location' : undefined} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
      </div>
    </nav></header>

    <main>
      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> DATA SCIENCE ENGINEER IN THE MAKING</div>
          <h1>Building<br/><span className="text-gradient">intelligent</span><br/>experiences with<br className="hero-break"/> data &amp; AI.</h1>
          <p className="hero-description">I’m <strong>Jyothi</strong> — a Data Science undergraduate building AI-powered applications, intelligent systems, and thoughtful digital experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowRight size={17}/></a><a className="text-link" href="/Jyothi-L-Resume.pdf" download="Jyothi-L-Resume.pdf">Download resume <ArrowUpRight size={15}/></a></div>
          <a className="hero-contact" href="mailto:jyothiie06@gmail.com">Get in touch <ArrowUpRight size={14}/></a>
          <div className="hero-meta"><div><span className="meta-label">LOCATION</span><span><MapPin size={13}/> Bengaluru, India</span></div><div><span className="meta-label">EDUCATION</span><span>Computer Science &amp; Engineering — Data Science</span></div><div><span className="meta-label">GRADUATION</span><span>2027</span></div></div>
        </div>
        <div className="hero-visual profile-visual" aria-label="Portrait of Jyothi L"><div ref={portraitRef} className="profile-frame" data-tilting="false" onPointerMove={handlePortraitMove} onPointerLeave={resetPortrait}><div className="profile-halo"/><img className="profile-photo" src="/jyothi-profile.png" alt="Portrait of Jyothi L"/><div className="profile-chip"><span className="status-dot"/> DATA SCIENCE · AI/ML</div><div className="profile-index">BENGALURU, INDIA<br/>2023 — 2027</div></div><div className="profile-caption"><span>FIG. 01 — THE BUILDER</span><span><Sparkles size={13}/> Curious by design</span></div></div>
        <a className="scroll-cue" href="#about"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
      </section>

      <section className="about section container" id="about"><div className="section-kicker reveal"><span>01 / ABOUT</span><span className="kicker-line"/></div><div className="about-grid"><h2 className="section-title reveal">Turning questions<br/>into <span className="text-gradient">possibilities.</span></h2><div className="about-copy reveal"><p>I’m a Data Science undergraduate at RNS Institute of Technology, interested in building practical applications with Python, SQL, AI/ML, and full-stack tools.</p><p>My project work spans NLP and RAG systems, data analytics and visualization, and complete application workflows—from document retrieval and model explainability to interfaces people can use.</p><div className="about-note"><span className="note-icon"><Code2 size={16}/></span><span>Focused on useful applications, thoughtful engineering, and clear results.</span></div></div></div><div className="stat-strip reveal"><div><span className="stat-value">8.63</span><span className="stat-label">CGPA / 10</span></div><div><span className="stat-value">03</span><span className="stat-label">Featured projects</span></div><div><span className="stat-value">2027</span><span className="stat-label">Graduating class</span></div><div className="stat-quote">Computer Science &amp; Engineering<br/>Data Science · RNSIT</div></div></section>

      <section className="work section" id="work"><div className="container"><div className="section-kicker reveal"><span>02 / SELECTED WORK</span><span className="kicker-line"/><span className="section-count">PROJECT INDEX — 03</span></div><div className="work-heading reveal"><h2 className="section-title">Ideas, made <span className="text-gradient">real.</span></h2><p>Selected work across civic technology, financial document intelligence, and customer retention analytics.</p></div><div className="project-grid">{projects.map(p => <article className={`project-card ${p.accent} reveal`} key={p.number}><div className="project-top"><span className="project-number">/{p.number}</span><span className="project-category">{p.category}</span><span className="project-icon">{p.icon}</span></div><ProjectVisual project={p}/><div className="project-body"><h3>{p.title}</h3><h4>{p.fullName}</h4><p>{p.description}</p><ul className="project-highlights">{p.highlights.map(item => <li key={item}>{item}</li>)}</ul><div className="tag-list">{p.tags.map(t => <span key={t}>{t}</span>)}</div>{p.team && <p className="project-team">{p.team}</p>}{p.link && <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} on GitHub`}>View on GitHub <ArrowUpRight size={16}/></a>}</div></article>)}</div><div className="project-foot reveal"><span>SELECTED PROJECTS</span><span className="foot-rule"/><span>STAY CURIOUS ↗</span></div></div></section>

      <section className="skills section container" id="skills"><div className="section-kicker reveal"><span>03 / TOOLKIT</span><span className="kicker-line"/></div><div className="skills-layout"><div className="skills-intro reveal"><h2 className="section-title">Tools I use<br/>to <span className="text-gradient">think &amp; build.</span></h2><p>A practical toolkit across programming, AI, data, and application development.</p><div className="skill-note"><span className="skill-note-icon"><Code2 size={19}/></span><span>I choose tools to fit the problem, and keep learning through building.</span></div></div><div className="skills-panel reveal"><div className="skill-categories">{skillGroups.map(([group, ...items]) => <div className="skill-category" key={group}><h3>{group}</h3><p>{items.join(' · ')}</p></div>)}</div></div></div></section>

      <section className="education section" id="education"><div className="container"><div className="section-kicker reveal"><span>04 / EDUCATION &amp; LEARNING</span><span className="kicker-line"/></div><div className="education-grid"><div className="education-main reveal"><h2 className="section-title">Learning with<br/><span className="text-gradient">intention.</span></h2><div className="education-list"><article className="education-item"><div className="education-date">2023 — 2027</div><div><h3>RNS Institute of Technology</h3><p>B.E. — Computer Science &amp; Engineering (Data Science)</p><span>CGPA: 8.63 / 10</span></div><GraduationCap size={20}/></article><article className="education-item"><div className="education-date">2023</div><div><h3>Carmel PU College, Bengaluru</h3><p>12th — PUE Karnataka</p><span>84.90%</span></div></article><article className="education-item"><div className="education-date">2021</div><div><h3>Max Muller Public School, Bengaluru</h3><p>10th — KSEEB</p><span>89.90%</span></div></article></div></div><aside className="learning-aside reveal"><div className="learning-block"><span className="meta-label">CERTIFICATION</span><h3>Introduction to Structured Query Language (SQL)</h3><p>Coursera</p></div><div className="learning-block"><span className="meta-label">PEER-TO-PEER LEARNING · 27 MARCH 2026</span><h3>Building Predictive Model for Brain Tumour Detection</h3><p>Presented the predictive modeling workflow to sixth-semester students as a student speaker.</p></div></aside></div></div></section>

      <section className="contact section" id="contact"><div className="container contact-inner"><div className="section-kicker reveal"><span>05 / NEXT CHAPTER</span><span className="kicker-line"/></div><div className="contact-content reveal"><div><p className="eyebrow"><span className="status-dot"/> LET’S CONNECT</p><h2>Have a good<br/>problem to <span className="text-gradient">solve?</span></h2><p className="contact-copy">I’d love to connect with recruiters and engineering teams building thoughtful products with AI, data, and software.</p><a className="button button-primary contact-button" href="mailto:jyothiie06@gmail.com">Email me <ArrowUpRight size={17}/></a></div><div className="contact-side"><span className="contact-side-label">FIND ME AROUND THE WEB</span><a href="https://github.com/joee-codes" target="_blank" rel="noopener noreferrer" className="social-link"><span><Code2 size={20} aria-hidden="true"/> GitHub</span><ArrowUpRight size={16}/></a><a href="https://linkedin.com/in/jyothi-l" target="_blank" rel="noopener noreferrer" className="social-link"><span><Sparkles size={20} aria-hidden="true"/> LinkedIn</span><ArrowUpRight size={16}/></a><a href="https://leetcode.com/u/joeoeoeoe" target="_blank" rel="noopener noreferrer" className="social-link"><span><Code2 size={20} aria-hidden="true"/> LeetCode</span><ArrowUpRight size={16}/></a><a href="mailto:jyothiie06@gmail.com" className="social-link"><span><Mail size={19} aria-hidden="true"/> jyothiie06@gmail.com</span><ArrowUpRight size={16}/></a></div></div><div className="contact-bottom"><span>JYOTHI L © 2026</span><span>AI · DATA · SOFTWARE <span className="tiny-star">✳</span></span><a href="#home">BACK TO TOP ↑</a></div></div></section>
    </main>
  </div>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
