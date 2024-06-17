import styles from "../Styles/About.module.scss";

const About = () => {
  return (
    <section className={styles.About}>
      <div className={styles.about_header}>
        <h4>about me</h4>
        <h2>
          I am a growing fullstack web developer with two years experience in
          Frontend development.
        </h2>
      </div>
      <div className={styles.about_body}>
        <h4>
          I code awesome and functional website with a keen eye for detail and
          execution.
        </h4>

        <p>
          <span>
            {" "}
            I'll be the first to say that web development is truly daunting.
            Developing a product that would meet the intricate needs of
            different users is quite the challenge. But this is what I do and I
            enjoy it. The perfect product might not exist, but be rest assured
            that I will get you something extremely close to perfection.{" "}
            <span>Hi, I am Oghenetega, a fullstack developer.</span> With years
            of experience in architecture and design from school and work, I
            have mastered the skills of understanding client requirements as
            well as users' pain points.
          </span>
          <span>
            {" "}
            I've spent the last few years working across different technologies
            in Frontend and Backend such as react, nextJs, typescript, sass,
            redux, etc. I have also worked on various projects with different
            team sizes and this has enhanced my communication skills as well as
            my teamwork. With me, you would be getting a team mate willing to
            learn and grow with the team as well as a consistent pair of hands
            willing to see the project to completion.
          </span>
          <span>
            {" "}
            I really believe mindfulness in the workplace is key to success—a
            tenet I live out through my interests in football, chess,
            table-tennis, and basketball. I also love puzzles and anything that
            has to do with history and science. I am currently working as a
            freelance web developer and I am always interested in a challenge.
            Reach out to arcteggzz@gmail.com to connect!
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
