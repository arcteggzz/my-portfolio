import styles from "./DashboardPage.module.scss";
import { AnimatedFadeInPage } from "../../utils";
import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";

const DashboardPage = () => {
  return (
    <>
      <AnimatedFadeInPage>
        <main className={styles.DashboardPage}>
          <Sidebar />
          <div className={styles.right}>
            <Topbar />
            <div className={styles.content}>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
              <p>Tega</p>
            </div>
          </div>
        </main>
      </AnimatedFadeInPage>
    </>
  );
};

export default DashboardPage;
