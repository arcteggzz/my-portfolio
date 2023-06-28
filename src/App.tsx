import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//context
import { AppContextProvider } from "./context/AppContext";

//layouts
import PublicPageLayout from "./utils/PublicPageLayout";

//pages
import SplashPage from "./pages/SplashPage/";
import HomePage from "./pages/HomePage/";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<SplashPage />} />

            <Route element={<PublicPageLayout />}>
              <Route path="/home" element={<HomePage />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </AppContextProvider>
    </>
  );
};

export default App;
