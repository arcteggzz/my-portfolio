import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//context
import { AppContextProvider } from "./context/AppContext";

//layouts
import { PublicPageLayout } from "./utils/";

//pages
import { SplashPage, HomePage } from "./pages";
import DashboardPage from "./pages/DashboardPage";

//routes
import { routePaths } from "./utils/";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path={routePaths.SPLASHPAGE} element={<SplashPage />} />
            <Route path={"/dashboard"} element={<DashboardPage />} />

            <Route element={<PublicPageLayout />}>
              <Route path={routePaths.HOMEPAGE} element={<HomePage />} />
              {/* <Route path={`/project/:id`} element={<ProjectDetailsPage />} /> */}
            </Route>
          </Routes>
        </AnimatePresence>
      </AppContextProvider>
    </>
  );
};

export default App;
