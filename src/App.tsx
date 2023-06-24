import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//pages
import SplashPage from "./pages/SplashPage/";

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<SplashPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
