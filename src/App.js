import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/Home";
import CONST from "./constants/index";
import MobileNavigation from "./components/sidebar/mobile-navigation";
import useWindowSize from "./hooks/useWindowSize";
import Library, { AlbumTab } from "./pages/library";
import { PodcastTab } from "./pages/library";
import Search from "./pages/search";
import PlaylistPage from "./pages/playlist"
//styles
import styles from "../src/style/App.module.css";
const App = () => {
   const size = useWindowSize();
  return (
    <div className={styles.layout}>
      {size.width > CONST.MOBILE_SIZE ? <Sidebar /> : <MobileNavigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/podcasts" element={<PodcastTab />} />
        <Route path="/library/albums" element={<AlbumTab />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlist/:path" element={<PlaylistPage/>} />
      </Routes>
    </div>
  );
};

export default App;
