import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import vertebrae_logo from "./images/vertebrae_logo.png";
import overview_logo from "./images/overview.png";
import getting_started_logo from "./images/getting_started.png";
import projects_logo from "./images/projects.png";
import courses_logo from "./images/courses.png";
import { useState } from "react";
import dropdown_icon_open from "./images/dropdown_icon_open.png";
import dropdown_icon_closed from "./images/dropdown_icon_closed.png";
import {
  brand_color_dark,
  brand_color_dim,
} from "../../assets/styles/tribe_colors.module.scss";

interface SingleNavigationType {
  link_title: string;
  link_name: string;
  image_src: string;
  alt_text: string;
}

interface SingleAccordionType {
  accordionHeaderTitle: string;
  accordionOptionsList: {
    title: string;
    link: string;
  }[];
}

const SingleNavigation = ({
  link_title,
  link_name,
  image_src,
  alt_text,
}: SingleNavigationType) => {
  return (
    <>
      <NavLink to={link_name} className={styles.SingleNavigation}>
        <img src={image_src} alt={alt_text} />
        <p>{link_title}</p>
      </NavLink>
    </>
  );
};

const SingleAccordion = ({
  accordionHeaderTitle,
  accordionOptionsList,
}: SingleAccordionType) => {
  const [accordionOptionsOpen, setAccordionOptionsOpen] = useState(false);
  const accordion_header_style = {
    borderRight: accordionOptionsOpen
      ? `4px solid ${brand_color_dark}`
      : `4px solid transparent`,
    backgroundColor: accordionOptionsOpen ? brand_color_dim : "",
  };
  const accordion_title_style = {
    fontWeight: accordionOptionsOpen ? "700" : "400",
  };

  return (
    <>
      <div className={styles.SingleAccordion}>
        <div
          className={styles.accordion_header}
          onClick={() => setAccordionOptionsOpen(!accordionOptionsOpen)}
          style={accordion_header_style}
        >
          <p style={accordion_title_style}>{accordionHeaderTitle}</p>
          <img
            src={
              accordionOptionsOpen ? dropdown_icon_open : dropdown_icon_closed
            }
            alt="dropdown icon"
            className={styles.dropdown_icon}
          />
        </div>
        {accordionOptionsOpen ? (
          <div className={styles.accordion_options_container}>
            {accordionOptionsList?.map((item) => {
              return (
                <NavLink to={item.link} className={styles.navlink_item}>
                  {item.title}
                </NavLink>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

const Sidebar = () => {
  const first_links = [
    {
      image: getting_started_logo,
      link_name: "#",
      link_title: "Getting Started",
      alt_text: "getting started icon",
    },
    {
      image: overview_logo,
      link_name: "#",
      link_title: "Overview",
      alt_text: "overview icon",
    },
  ];

  const second_links = [
    {
      image: projects_logo,
      link_name: "#",
      link_title: "Projects",
      alt_text: "projects icon",
    },
    {
      image: courses_logo,
      link_name: "#",
      link_title: "Courses",
      alt_text: "courses icon",
    },
  ];

  return (
    <>
      <div className={styles.Sidebar}>
        <div className={styles.top_sidebar}>
          <div className={styles.logo_container}>
            <img
              src={vertebrae_logo}
              alt="Vertebrae logo"
              className={styles.vertebrae_logo}
            />
            <div className={styles.vertebrae_title}>
              <h5>Vertebrae</h5>
              <p>Admin@Vertebrae.com</p>
            </div>
          </div>

          <div className={styles.nav_container}>
            {first_links.map((item) => {
              return (
                <SingleNavigation
                  key={item.link_name}
                  image_src={item.image}
                  link_name={item.link_name}
                  alt_text={item.alt_text}
                  link_title={item.link_title}
                />
              );
            })}
          </div>

          <div className={styles.nav_container}>
            {second_links.map((item) => {
              return (
                <SingleNavigation
                  key={item.link_name}
                  image_src={item.image}
                  link_name={item.link_name}
                  alt_text={item.alt_text}
                  link_title={item.link_title}
                />
              );
            })}
          </div>

          <div className={styles.accordion_container}>
            <SingleAccordion
              accordionHeaderTitle="Workspaces"
              accordionOptionsList={[
                { link: "#", title: "# tribesquare" },
                { link: "#", title: "# worksquare" },
              ]}
            />
            <SingleAccordion
              accordionHeaderTitle="Messages"
              accordionOptionsList={[
                { link: "#", title: "Oghenetega" },
                { link: "#", title: "Kelechi" },
                { link: "#", title: "Godswill" },
              ]}
            />
          </div>
        </div>

        <div className={styles.bottom_sidebar}>
          <div className={styles.upgrade_container}>
            <div className={styles.text_title_container}>
              <h5>Want more Proficiency?</h5>
              <h6>Get proficient features on other unique plans.</h6>
            </div>

            <Link to={"#"} className={styles.upgrade_button}>
              Upgrade Now
            </Link>
          </div>

          <Link to={"#"} className={styles.take_tour_button}>
            Take Tour
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
