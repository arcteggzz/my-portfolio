import styles from "./SplashPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import oghenetega_logo from "../../assets/images/oghenetega_logo_black.png";

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
        <main className={styles.SplashPage}>
          <img src={oghenetega_logo} alt="oghenetega logo icon" />
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default SplashPage;
