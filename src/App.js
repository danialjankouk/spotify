import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/Home";
import CONST from "./constants/index";
import MobileNavigation from "./components/sidebar/mobile-navigation";
import useWindowSize from "./hooks/useWindowSize";
//styles
import styles from "../src/style/App.module.css";
const App = () => {
   const size = useWindowSize();
  return (
    <div className={styles.layout}>
      {size.width > CONST.MOBILE_SIZE ? <Sidebar /> : <MobileNavigation />}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
