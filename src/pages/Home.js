import React from 'react';
import Topnav from "../components/topnav/topnav";
import styles from "./home.module.css";

const Home = () => {
    return (
      <div className={styles.Home}>
        <div className={styles.HoverBg}></div>
        <div className={styles.Bg}></div>
        <Topnav />
      </div>
    );
};

export default Home;