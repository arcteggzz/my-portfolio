import styles from "./Topbar.module.scss";
import notification_icon from "./images/notification_icon.png";
import profile_icon from "./images/profile_icon.png";
import dropdown_icon from "./images/dropdown_icon.png";
import { useState } from "react";

const Topbar = () => {
  const [privateMode, setPrivateMode] = useState(false);
  const [profileOptionsActive, setProfileOptionsActive] = useState(false);

  const input_indicator_style = {
    left: privateMode ? "22px" : "2px",
  };
  const dropdown_icon_style = {
    transform: profileOptionsActive ? "rotate(180deg)" : "",
  };

  return (
    <>
      <div className={styles.Topbar}>
        <div className={styles.item_container}>
          <div className={styles.checkbox_input_container}>
            <p>{privateMode ? "Private" : "Public"}</p>
            <div
              className={styles.slider_container}
              tabIndex={0}
              onClick={() => setPrivateMode(!privateMode)}
            >
              <div
                className={styles.input_indicator}
                tabIndex={0}
                style={input_indicator_style}
              ></div>
            </div>
          </div>

          <div className={styles.notifications_container}>
            <img
              src={notification_icon}
              alt="notification icon"
              className={styles.notification_icon}
            />
            <p className={styles.notification_counter}>9</p>
          </div>

          <div className={styles.profile_container}>
            <img
              src={profile_icon}
              alt="profile pictures"
              className={styles.profile_image}
            />
            <img
              src={dropdown_icon}
              alt="dropdown icon"
              className={styles.dropdown_icon}
              style={dropdown_icon_style}
              onClick={() => setProfileOptionsActive(!profileOptionsActive)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
