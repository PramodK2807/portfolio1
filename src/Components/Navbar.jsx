import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import ContactMe from './ContactMe';
import SmallHeroSection from './SmallHeroSection';
import Services from './Services';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState(0);
  const [siderbar, setSiderbar] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const checkScrolled = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else if (offset > 30) {
      setSiderbar(false);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrolled);
    return () => {
      window.removeEventListener('scroll', checkScrolled);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      if (window?.innerWidth >= 768) {
        setSiderbar(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={`navbar_container ${scrolled ? 'active_nav_clr' : ''}`}>
        <div className="container">
          <nav className="d-flex align-items-center justify-content-between">
            <div className="logo" onClick={scrollToTop}>
              <h1 className="title">&lt;/Pramod&gt;</h1>
            </div>
            <ul
              className={`mb-0 my_navbar ${
                siderbar ? 'mobile' : ' nav_menus'
              }`}>
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                  onClick={() => setSiderbar(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setSiderbar(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setSiderbar(false)}>
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setSiderbar(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setSiderbar(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => setSiderbar(false)}>
                  Contact Me
                </Link>
              </li>
            </ul>
            <div
              className="hamberger_menu"
              onClick={() => setSiderbar(!siderbar)}>
              {siderbar ? (
                <span>
                  <img src="/images/close.png" alt="" />
                </span>
              ) : (
                <span>
                  <img src="/images/menu.png" alt="" />
                </span>
              )}
            </div>
          </nav>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="home_container" id="home">
          <div className="container">
            <Home />
          </div>
          <div className="mt-5 mt-md-1">
            <SmallHeroSection />
          </div>
        </div>
        {/* <div className="my-3 mb-5" id="">
          <SmallHeroSection />
        </div> */}

        <div className="about_container" id="about">
          <About />
        </div>

        <div className="skills_main_container bg-white bg_img" id="skills">
          <Skills />
        </div>

        <div className="" id="services">
          <Services />
        </div>

        <div className="project_container" id="projects">
          <Projects />
        </div>

        <div className="contact_container " id="contact">
          <ContactMe />
        </div>
      </div>
    </>
  );
};

export default Navbar;
