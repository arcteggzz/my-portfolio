import styles from "./SplashPage.module.scss";
import AnimatedFadeInPage from "../../utils/AnimatedFadeInPage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.SplashPage}>Splashpage</main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SplashPage;
