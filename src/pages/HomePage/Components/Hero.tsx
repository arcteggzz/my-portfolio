import styles from "../Styles/Hero.module.scss";
import portrait_image from "../../../assets/images/oghenetega_portrait_2.jpg";
import mouse_icon from "../../../assets/images/mouse_icon.png";

const Hero = () => {
  return (
    // <section className={styles.Hero}>
    //   <header className={styles.header_container}>
    //     <p>hello...</p>
    //     <div className={styles.main_header_text}>
    //       <h1>Oghenetega Esedere</h1>
    //       <h4>Web Developer</h4>
    //     </div>
    //   </header>
    //   <div className={styles.imageContainer}></div>
    // </section>
    <header className={styles.Hero}>
      <img
        src={portrait_image}
        alt="portrait image"
        className={styles.portrait_image}
      />
      <h1>Oghenetega Esedere</h1>
      <h4>Fullstack Web Developer</h4>
      <div className={styles.blinds_cover}></div>

      <div className={styles.mouse_scroll_container}>
        <img src={mouse_icon} alt="mouse icon" className={styles.mouse_icon} />
        <p>scroll down</p>
      </div>
    </header>
  );
};

export default Hero;
