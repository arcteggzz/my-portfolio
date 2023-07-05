import styles from "../Styles/Skills.module.scss";
import right_arrow_icon from "../images/right-arrow-button.svg";
import html_logo from "../images/HTML5_logo.png";
import css_logo from "../images/CSS_logo.png";
import redux_logo from "../images/Redux_logo.png";
import react_logo from "../images/React_logo.png";
import next_logo from "../images/Next_logo.png";
import javascript_logo from "../images/Javascript_logo.png";
import typescript_logo from "../images/Typescript_logo.png";
import sass_logo from "../images/Sass_logo.png";
import tailwind_logo from "../images/tailwind_logo.png";
import { experienceList } from "../../../utils";

type SingleSkillProps = {
  skillImages: string[];
  skillName: string;
  skillPercentage: number;
};

type SingleExperienceProps = {
  experienceDate: string;
  experienceCompanyName: string;
  experiencePosition: string;
  experienceDescription: string;
};

const SingleSkill = ({
  skillName,
  skillPercentage,
  skillImages,
}: SingleSkillProps) => {
  const percentage_divStyles = {
    width: `${skillPercentage}%`,
  };

  return (
    <div className={styles.SingleSkill}>
      <div className={styles.SingleSkill_title_container}>
        <p>{skillName}</p>

        <div className={styles.image_container}>
          {skillImages?.map((image) => {
            return <img src={image} alt="" />;
          })}
        </div>
      </div>
      <div className={styles.full_div}></div>
      <div className={styles.percentage_div} style={percentage_divStyles}>
        <p>{`${skillPercentage}%`}</p>
      </div>
    </div>
  );
};

const SingleExperience = ({
  experienceDate,
  experienceCompanyName,
  experiencePosition,
  experienceDescription,
}: SingleExperienceProps) => {
  return (
    <div className={styles.SingleExperience}>
      {/* left */}
      <div className={styles.single_experience_left}>
        <p>{experienceDate}</p>
        <div className={styles.arrow_container}>
          <div className={styles.horizontal_line}></div>
          <img src={right_arrow_icon} alt="" />
        </div>
        <h6>{experienceCompanyName}</h6>
      </div>

      {/* right */}
      <div className={styles.single_experience_right}>
        <h3>{experiencePosition}</h3>
        <p>{experienceDescription}</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsList = [
    { skillName: "HTML 5", percentage: 85, skillImages: [html_logo] },
    {
      skillName: "CSS/SCSS/Tailwind",
      percentage: 85,
      skillImages: [css_logo, sass_logo, tailwind_logo],
    },
    {
      skillName: "Javascript/Typescript",
      percentage: 90,
      skillImages: [javascript_logo, typescript_logo],
    },
    { skillName: "React", percentage: 80, skillImages: [react_logo] },
    { skillName: "Next Js", percentage: 65, skillImages: [next_logo] },
    { skillName: "Redux Toolkit", percentage: 80, skillImages: [redux_logo] },
  ];

  return (
    <section className={styles.Skills}>
      <div className={styles.skills_container}>
        <h2>Skills</h2>
        <div className={styles.all_skills_container}>
          {skillsList?.map((skill) => {
            return (
              <>
                <SingleSkill
                  key={`${skill.skillName}`}
                  skillName={skill.skillName}
                  skillPercentage={skill.percentage}
                  skillImages={skill.skillImages}
                />
              </>
            );
          })}
        </div>
      </div>

      <div className={styles.experience_container}>
        <h2>My Experience</h2>
        <div className={styles.all_experience_container}>
          {experienceList?.map((experience) => {
            return (
              <>
                <SingleExperience
                  key={`${experience.date}`}
                  experienceDate={experience.date}
                  experienceCompanyName={experience.companyName}
                  experiencePosition={experience.position}
                  experienceDescription={experience.description}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
