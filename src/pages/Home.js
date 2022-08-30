import React from 'react';
import Topnav from "../components/topnav/topnav";
import styles from "./home.module.css";
import PlaylistCardS from "../components/cards/playlist-card-s";
import PlaylistCardM from "../components/cards/playlist-card-m";
import { PLAYLIST } from "../data/index";

const Home = () => {
    const d = new Date();
    let hour = d.getHours();
    return (
      <div className={styles.Home}>
        <div className={styles.HoverBg}></div>
        <div className={styles.Bg}></div>
        <Topnav />
        <div className={styles.Content}>
          <section>
            <div className={styles.SectionTitle}>
              {hour <= 12
                ? "Good Morning"
                : hour <= 18
                ? "Good Evening"
                : "Good Night"}
            </div>

            <div className={styles.SectionCards}>
              {PLAYLIST.map((item) => {
                return <PlaylistCardS key={item.title} data={item} />;
              })}
            </div>
          </section>

          <section>
            <div className={styles.SectionTitle}>
              <p>Your Top Mixes</p>
            </div>

            <div className={styles.SectionCardsMedium}>
              {PLAYLIST.slice(0, 6).map((item) => {
                return <PlaylistCardM key={item.title} data={item} />;
              })}
            </div>
          </section>
        </div>
      </div>
    );
};

export default Home;