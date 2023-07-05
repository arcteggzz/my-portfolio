import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import useApp from "../../hooks/useApp";
import routePaths from "../../utils/routePaths";
import { useState } from "react";
import lightHamburger from "./images/lightHamburger.png";
import darkHmburger from "./images/darkHamburger.png";
import lightCloseBurger from "./images/lightCloseBurger.png";
import oghenetega_logo_white from "../../assets/images/oghenetega_logo_white.png";
import oghenetega_logo_dark from "../../assets/images/oghenetega_logo_black.png";

const Navbar = () => {
  const { mobileNavbarOpen, toggleMobileNavbar } = useApp();
  const [navBarActive, setNavbarActive] = useState(false);
  const cvLink = `https://drive.google.com/file/d/14qAuJ2sh7En_QZPcXwLbMxfYObGVvbhs/view?usp=sharing`;
  const navElements = [
    { link: routePaths.HOME, name: "Home" },
    { link: routePaths.ABOUT, name: "About" },
    { link: routePaths.PROJECTS, name: "Projects" },
    { link: routePaths.SKILLS, name: "Skills" },
    { link: routePaths.CONTACT, name: "Contact" },
  ];

  const changeBackgroundNavbarHandler = () => {
    if (window.scrollY >= 80) {
      setNavbarActive(true);
    } else {
      setNavbarActive(false);
    }
  };

  window.addEventListener("scroll", changeBackgroundNavbarHandler);

  return (
    <>
      <nav className={styles.Navbar}>
        <div
          className={
            navBarActive
              ? `${styles.Navbar_container_light} ${styles.Navbar_active}`
              : styles.Navbar_container_light
          }
        >
          <Link to={"/"} className={styles.logo_icon}>
            <img
              src={navBarActive ? oghenetega_logo_dark : oghenetega_logo_white}
              alt="oghenetega logo icon"
            />
          </Link>

          {/* desktop right hand side */}
          <div className={styles.desktop_right}>
            {/* desktop navlinks  */}
            <div className={styles.navLinks_Desktop}>
              {navElements.map((elem) => {
                return (
                  <NavLink
                    to={elem.link}
                    key={elem.name}
                    className={
                      navBarActive
                        ? styles.single_NavLink
                        : styles.inactive_NavLink
                    }
                  >
                    {elem.name}
                  </NavLink>
                );
              })}
            </div>

            <Link
              to={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cv_button}
            >
              Download Cv
            </Link>

            {/* desktop theme controller */}
            {/* <button onClick={() => toggleTheme()} className={styles.theme_icon}>
              <img
                src={darkMode ? lightModeIcon : darkModeIcon}
                alt="Toggle Theme Button"
              />
            </button> */}

            {/* mobile hamburger controller */}
            <button
              onClick={() => toggleMobileNavbar()}
              className={styles.hamburger}
            >
              <img
                src={
                  mobileNavbarOpen
                    ? lightCloseBurger
                    : navBarActive
                    ? lightHamburger
                    : darkHmburger
                }
                alt="Hamburger Menu Button"
              />
            </button>
          </div>
        </div>

        {/* add the mobile navbar that slides in here */}
        {/* {mobileNavbarOpen ? (
          <div className={styles.Mobile_Nav_Light}>
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
            <Link
              to={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cv_button_mobile}
            >
              Download Cv
            </Link>
          </div>
        ) : (
          <></>
        )} */}

        <div
          className={
            mobileNavbarOpen
              ? styles.sidebarMobileOpen
              : styles.Mobile_Nav_Light
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
          <Link
            to={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cv_button_mobile}
          >
            Download Cv
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
