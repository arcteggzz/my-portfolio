import styles from "./HomePage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import useApp from "../../hooks/useApp";
import { Hero, About, Contact, Projects, Skills } from "./Components";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import routePaths from "../../utils/routePaths";

const HomePage = () => {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const { setMobileNavbarOpen } = useApp();
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash === routePaths.HOME && heroSectionRef.current) {
      heroSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (
      window.location.hash === routePaths.ABOUT &&
      aboutSectionRef.current
    ) {
      aboutSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (
      window.location.hash === routePaths.PROJECTS &&
      projectsSectionRef.current
    ) {
      projectsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (
      window.location.hash === routePaths.SKILLS &&
      skillsSectionRef.current
    ) {
      skillsSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else if (
      window.location.hash === routePaths.CONTACT &&
      contactSectionRef.current
    ) {
      contactSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    setMobileNavbarOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <AnimatedFadeInPage>
      <main className={styles.HomePage}>
        <div ref={heroSectionRef}>
          <Hero />
        </div>
        <div ref={aboutSectionRef}>
          <About />
        </div>
        <div ref={projectsSectionRef}>
          <Projects />
        </div>
        <div ref={skillsSectionRef}>
          <Skills />
        </div>
        <div ref={contactSectionRef}>
          <Contact />
        </div>
      </main>
    </AnimatedFadeInPage>
  );
};

export default HomePage;
