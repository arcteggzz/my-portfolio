import styles from "../Styles/About.module.scss";

const About = () => {
  return (
    <section className={styles.About}>
      <div className={styles.about_header}>
        <h4>about me</h4>
        <h2>
          I am a technology leader with hands-on experience building,
          stabilizing, and scaling production systems.
        </h2>
      </div>
      <div className={styles.about_body}>
        <h4>
          I have led engineering efforts across backend, frontend,
          infrastructure, and operations, working closely with product, sales,
          and operations teams to deliver reliable platforms in high-pressure
          environments.
        </h4>

        <p>
          <span>
            {" "}
            Over the past years, I have overseen major infrastructure
            migrations, production system stabilization, and the delivery of
            critical financial features. I have taken ownership of legacy
            systems, identified structural flaws, and led efforts to correct
            them — significantly improving system reliability, uptime, and
            operational confidence.
          </span>
          <span>
            {" "}
            I remain hands-on when necessary, contributing to critical features,
            architectural decisions, and complex problem areas across frontend
            and backend systems.
          </span>
          <span>
            {" "}
            I really believe mindfulness in the workplace is key to success—a
            tenet I live out through my other interests in football and chess. I
            also love puzzles and anything that has to do with history and
            science. I am currently working as a technical leader and I am
            always interested in a challenge. Reach out to
            career.oghenetega@outlook.com to connect!
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
