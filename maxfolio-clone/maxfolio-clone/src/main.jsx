import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import GlideCaseStudy from './GlideCaseStudy';
import './styles.css';

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  const [dark, setDark] = useState(true);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <div className="site">
      <motion.div className="progress" style={{ scaleX: progress, position: 'fixed', top: 0, left: 0, right: 0, height: 3, background: 'var(--fg)', zIndex: 100, transformOrigin: '0%' }} />
      
      {/* HEADER */}
      <header className="header">
        <div className="header__left">
          <div className="header__avatar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="20" fill="#333" />
              <path d="M20 10a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 12c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" fill="#fff" />
            </svg>
          </div>
          <div className="header__info">
            <span className="header__name">Diksha</span>
            <span className="header__title">Product/Industrial Designer</span>
          </div>
        </div>
        <div className="header__right">
          <nav className="header__nav">
            <a href="#about" className="header__link">About</a>
            <a href="#contact" className="header__link">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero__content">
            <motion.h1 
              className="hero__title"
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Digital Designer
            </motion.h1>
            <motion.div 
              className="hero__bottom"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p className="hero__subtitle">
                I inject personality into pixels, designing digital experiences<br />
                that connect and feel human. Based in London.
              </p>
              <a href="#work" className="hero__scroll">
                <span>Scroll to explore</span>
                <span className="hero__scroll-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS GRID (2x2) */}
        <section id="work" className="projects">
          <div className="projects__grid">
            <Reveal delay={0.1}>
              <a href="#case-studies/glide" className="project-card">
                <div className="project-card__image-wrapper">
                  <div className="project-card__image-inner img-bg-light">
                    <div className="prod-placeholder prod-siri"></div>
                  </div>
                </div>
                <div className="project-card__info">
                  <span className="project-card__title">GLIDE</span>
                  <div className="project-card__subtitle-wrapper">
                    <span className="project-card__subtitle">A mobile pop-up retail and delivery vehicle designed for dense urban environments.</span>
                  </div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.2}>
              <a href="#case-studies/glide" className="project-card">
                <div className="project-card__image-wrapper">
                  <div className="project-card__image-inner img-bg-dark">
                    <div className="prod-placeholder prod-gamehub"></div>
                  </div>
                </div>
                <div className="project-card__info">
                  <span className="project-card__title">Game hub</span>
                  <div className="project-card__subtitle-wrapper">
                    <span className="project-card__subtitle">A centralized platform for all your gaming needs and communities.</span>
                  </div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <a href="#case-studies/glide" className="project-card">
                <div className="project-card__image-wrapper">
                  <div className="project-card__image-inner img-bg-dark">
                    <div className="prod-placeholder prod-fitlife"></div>
                  </div>
                </div>
                <div className="project-card__info">
                  <span className="project-card__title">FitLife</span>
                  <div className="project-card__subtitle-wrapper">
                    <span className="project-card__subtitle">A fitness app designed for your personalized journey.</span>
                  </div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.4}>
              <a href="#case-studies/glide" className="project-card">
                <div className="project-card__image-wrapper">
                  <div className="project-card__image-inner img-bg-dark">
                    <div className="prod-placeholder prod-nutracoil"></div>
                  </div>
                </div>
                <div className="project-card__info">
                  <span className="project-card__title">Nutra Coil</span>
                  <div className="project-card__subtitle-wrapper">
                    <span className="project-card__subtitle">Smart wearable technology for precise health tracking.</span>
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </section>

        {/* BENTO SECTION */}
        <section className="bento" id="about">
          <Reveal className="bento__left">
            <div className="bento__portrait">
              <div className="portrait-placeholder"></div>
            </div>
            <div className="bento__logos">
              <span className="logo">amira</span>
              <span className="logo">freva.</span>
              <span className="logo">FOX MEDIA</span>
              <span className="logo">△</span>
              <span className="logo">amira</span>
              <span className="logo">freva.</span>
            </div>
          </Reveal>
          <div className="bento__right">
            <Reveal delay={0.1}>
              <div className="bento-card">
                <span className="bento-card__label">About</span>
                <h3 className="bento-card__title">Hi, I am Diksha<br />A Product Designer</h3>
                <p className="bento-card__text">
                  Passionate about the intersection of design, technology, and human behavior. 
                  I create meaningful solutions that empower users and drive business results. 
                  With a strong foundation in industrial design and digital experiences, I aim to bridge the gap between physical and digital worlds.
                </p>
                <p className="bento-card__text bento-card__text--sub">
                  When I'm not designing, you can find me exploring the city, reading sci-fi, or experimenting with new rendering techniques.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bento-card">
                <span className="bento-card__label">Experience</span>
                <div className="exp-list">
                  <div className="exp-item">
                    <span className="exp-item__year">2024 — Present</span>
                    <span className="exp-item__role">Independent</span>
                    <span className="exp-item__desc">Product Designer</span>
                  </div>
                  <div className="exp-item">
                    <span className="exp-item__year">2022 — 2024</span>
                    <span className="exp-item__role">Co-Founder/Designer</span>
                    <span className="exp-item__desc">Tech Startup</span>
                  </div>
                  <div className="exp-item">
                    <span className="exp-item__year">2020 — 2022</span>
                    <span className="exp-item__role">Product Designer</span>
                    <span className="exp-item__desc">Agency</span>
                  </div>
                  <div className="exp-item">
                    <span className="exp-item__year">2018 — 2020</span>
                    <span className="exp-item__role">Junior UX Designer</span>
                    <span className="exp-item__desc">Studio</span>
                  </div>
                </div>
                <a href="#" className="bento-card__link">
                  Download CV <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bento-card">
                <span className="bento-card__label">Testimonials</span>
                <div className="testimonial-list">
                  <div className="testimonial-item">
                    <p className="testimonial-item__quote">"Diksha is an exceptional designer who consistently delivers outstanding work."</p>
                    <div className="testimonial-item__author">
                      <span className="author-name">Jane Doe</span>
                      <span className="author-title">CEO at TechCorp</span>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <p className="testimonial-item__quote">"Her ability to understand complex problems and translate them into intuitive designs is remarkable."</p>
                    <div className="testimonial-item__author">
                      <span className="author-name">John Smith</span>
                      <span className="author-title">Product Manager</span>
                    </div>
                  </div>
                </div>
                <a href="#" className="bento-card__link">
                  Read more testimonials <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA SECTION */}
        <Reveal>
          <section id="contact" className="cta">
            <span className="cta__label">Contact</span>
            <h2 className="cta__title">I'm not just here to design products;<br />I'm here to connect with people.</h2>
            <p className="cta__subtitle">Feel free to contact me for any questions,<br />feedback, or further assistance.</p>
            <a href="mailto:hello@diksha.design" className="btn btn--outline">Let's talk</a>
          </section>
        </Reveal>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer__copy">Last updated 9/2/24</span>
        <span className="footer__powered">Powered by Diksha</span>
        <button className="footer__theme-toggle" onClick={() => setDark(!dark)}>Toggle Theme</button>
      </footer>
    </div>
  );
}

function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (hash === '#case-studies/glide') {
    return <GlideCaseStudy />;
  }

  return <Home />;
}

createRoot(document.getElementById('root')).render(<App />);
