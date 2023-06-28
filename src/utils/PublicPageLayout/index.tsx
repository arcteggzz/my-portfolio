import styles from "./PublicPageLayout.module.scss";
import Navbar from "../../Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import useApp from "../../hooks/useApp";
import { useEffect } from "react";

const PublicPageLayout = () => {
  const { darkMode, setMobileNavbarOpen } = useApp();
  const location = useLocation();

  useEffect(() => {
    setMobileNavbarOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  useEffect(() => {
    setMobileNavbarOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={darkMode ? styles.Dark : styles.Light}>
        <div className={styles.PublicPageLayout}>
          <div className={styles.main_container}>
            <div className={styles.Navbar_container}>
              <div className={styles.Navbar_Child_Container}>
                <Navbar />
              </div>
            </div>
            <div className={styles.Outlet_container}>
              <div className={styles.Outlet_Child_Container}>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicPageLayout;
