import styles from "../Styles/Contact.module.scss";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className={styles.Contact}>
      <div className={styles.left}>
        <h5>Based in Africa, working worldwide.</h5>
        <h2>Reach out to me</h2>
      </div>

      <div className={styles.right}>
        <h5>Socials</h5>
        <div className={styles.socials_contianer}>
          <Link
            to={`https://github.com/arcteggzz`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_links}
          >
            Github
          </Link>
          <Link
            to={`https://www.linkedin.com/in/oghenetega-esedere/`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_links}
          >
            LinkedIn
          </Link>
          <Link
            to={`mailto:arcteggzz@gmail.com`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_links}
          >
            Email
          </Link>
          <Link
            to={`https://twitter.com/acteggzz`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social_links}
          >
            Twitter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
