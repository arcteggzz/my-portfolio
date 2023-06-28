import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import useApp from "../../hooks/useApp";
import routePaths from "../../utils/routePaths";

import lightModeIcon from "./images/lightModeIcon.png";
// import darkModeIcon from "./images/darkModeIcon.png";
import lightHamburger from "./images/lightHamburger.png";
import darkHamburger from "./images/darkHamburger.png";
import lightCloseBurger from "./images/lightCloseBurger.png";
import darkCloseBurger from "./images/darkCloseBurger.png";
import darkModeIcon from "./images/darkMode_icon.png";

const Navbar = () => {
  const { darkMode, toggleTheme, mobileNavbarOpen, toggleMobileNavbar } =
    useApp();
  const navElements = [
    { link: routePaths.HOME, name: "Home" },
    { link: routePaths.ABOUT, name: "About" },
    { link: routePaths.PROJECTS, name: "Projects" },
    { link: routePaths.SKILLS, name: "Skills" },
    { link: routePaths.CONTACT, name: "Contact" },
  ];

  return (
    <>
      <nav className={styles.Navbar}>
        <div
          className={
            darkMode
              ? styles.Navbar_container_dark
              : styles.Navbar_container_light
          }
        >
          <Link to={"/"}>Esedere Oghenetega</Link>

          {/* desktop right hand side */}
          <div className={styles.desktop_right}>
            {/* desktop navlinks  */}
            <div className={styles.navLinks_Desktop}>
              {navElements.map((elem) => {
                return (
                  <NavLink
                    to={elem.link}
                    key={elem.name}
                    className={styles.single_NavLink}
                  >
                    {elem.name}
                  </NavLink>
                );
              })}
            </div>

            {/* desktop theme controller */}
            <button onClick={() => toggleTheme()} className={styles.theme_icon}>
              <img
                src={darkMode ? lightModeIcon : darkModeIcon}
                alt="Toggle Theme Button"
              />
            </button>

            {/* mobile hamburger controller */}
            <button
              onClick={() => toggleMobileNavbar()}
              className={styles.hamburger}
            >
              {mobileNavbarOpen ? (
                <img
                  src={darkMode ? darkCloseBurger : lightCloseBurger}
                  alt="Hamburger Menu Button"
                />
              ) : (
                <img
                  src={darkMode ? darkHamburger : lightHamburger}
                  alt="Hamburger Menu Button"
                />
              )}
            </button>
          </div>
        </div>

        {/* add the mobile navbar that slides in here */}
        {/* mobile navigation */}
        {mobileNavbarOpen ? (
          <div
            className={
              darkMode ? styles.Mobile_Nav_Dark : styles.Mobile_Nav_Light
            }
          >
            <section className={styles.Navlinks_Mobile}>
              {navElements.map((elem) => {
                return (
                  <NavLink
                    to={elem.link}
                    key={`${elem.link}_mobile`}
                    className={styles.mobile_NavLink}
                  >
                    {elem.name}
                  </NavLink>
                );
              })}
            </section>
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
};

export default Navbar;
