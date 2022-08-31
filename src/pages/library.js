import { Link } from "react-router-dom";
import Topnav from "../components/topnav/topnav";
import PlaylistCardM from "../components/cards/playlist-card-m";
import { PLAYLIST } from "../data/index";

import styles from "./library.module.css";

function Library() {
  return (
    <div className={styles.LibPage}>
      <Topnav tabButtons={true} />
      <div className={styles.Library}>
        <Link to="/library">
          <PlaylistTab />
        </Link>
      </div>
    </div>
  );
}

function PlaylistTab() {
  return (
    <div>
      <p className={styles.titles}>Playlists</p>
      <div className={styles.Grid}>
        {PLAYLIST.filter((item) => item.type === "playlist").map((item) => {
          return <PlaylistCardM key={item.title} data={item} />;
        })}
      </div>
    </div>
  );
}

export function PodcastTab() {
  return (
    <div>
      <Topnav tabButtons={true} />
      <p className={styles.titles}>Podcasts</p>
      <div className={styles.Grid}>
        {PLAYLIST.filter((item) => item.type === "podcast").map((item) => {
          return <PlaylistCardM key={item.title} data={item} />;
        })}
      </div>
    </div>
  );
}

export function AlbumTab() {
  return (
    <div>
      <Topnav tabButtons={true} />
      <p className={styles.titles}>Albums</p>
      <div className={styles.Grid}>
        {PLAYLIST.filter((item) => item.type === "albüm").map((item) => {
          return <PlaylistCardM key={item.title} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Library;
