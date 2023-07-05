import styles from "../Styles/Projects.module.scss";
import { Link } from "react-router-dom";
import { projectList } from "../../../utils";

//background Images
import eliteHomeBackground from "../images/project_elite_homes.png";
import lendsqrBackground from "../images/project_lendsqr.png";
import braingamesBackground from "../images/project_braingames.png";
import phoenixBackground from "../images/project_phoenix.png";
import tribeSquareBackground from "../images/project_tribesquare.jpg";
import slsBackground from "../images/project_sls.jpg";

type SinglePortfolioProjectProps = {
  projectTitle: string;
  projectDescription: string;
  // projectId: string;
  projectLiveLink: string;
  projectGithubLink: string;
  backgroundImage: string;
};

const SinglePortfolioProject = ({
  projectDescription,
  projectLiveLink,
  projectGithubLink,
  projectTitle,
  backgroundImage,
}: SinglePortfolioProjectProps) => {
  const SinglePortfolioProject_styles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <>
      <div
        className={styles.SinglePortfolioProject}
        style={SinglePortfolioProject_styles}
      >
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
        <div className={styles.links_container}>
          <Link
            to={`${projectGithubLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.view_more_btn}
          >
            Github link
          </Link>
          <Link
            to={`${projectLiveLink}`}
            className={styles.live_site_btn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live site
          </Link>
        </div>
        <div className={styles.blinds_cover}></div>
      </div>
    </>
  );
};

const Projects = () => {
  const backgroundImages = [
    eliteHomeBackground,
    slsBackground,
    phoenixBackground,
    lendsqrBackground,
    braingamesBackground,
    tribeSquareBackground,
  ];

  return (
    <section className={styles.Projects}>
      <div className={styles.projects_header}>
        <h2>Projects</h2>
        <p>A gallery of projects completed successfully.</p>
      </div>

      <div className={styles.all_projects_container}>
        {projectList?.map((project, index) => {
          return (
            <>
              <SinglePortfolioProject
                key={`${project.projectId}`}
                projectDescription={project.projectDescription}
                projectGithubLink={project.projectGithubLink}
                projectLiveLink={project.projectLiveLink}
                projectTitle={project.projectTitle}
                backgroundImage={backgroundImages[index]}
              />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
