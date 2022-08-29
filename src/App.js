import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/Home";
//styles
import styles from "../src/style/App.module.css";
const App = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
