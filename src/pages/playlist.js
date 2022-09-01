import { useParams } from "react-router";
import { connect } from "react-redux";
import { changeTrack } from "../components/actions/index";
import Topnav from "../components/topnav/topnav";
import PlayButton from "../components/buttons/play-button";
import IconButton from "../components/buttons/icon-button";
import PlaylistDetails from "../components/playlist/playlist-details";
import PlaylistTrack from "../components/playlist/playlist-track";
import * as Icons from "../components/icons";
import { PLAYLIST } from "../data/index";

import styles from "./playlist.module.css";
import { useEffect, useState } from "react";

function PlaylistPage(props) {
  const [playlistIndex, setPlaylistIndex] = useState(undefined);
  const [isthisplay, setIsthisPlay] = useState(false);
  const { path } = useParams();

  function changeBg(color) {
    document.documentElement.style.setProperty("--hover-home-bg", color);
  }

  useEffect(() => {
    setIsthisPlay(playlistIndex === props.trackData.trackKey[0]);
  },[]);

  return (
    <div className={styles.PlaylistPage}>
      <div className={styles.gradientBg}></div>
      <div className={styles.gradientBgSoft}></div>
      <div className={styles.Bg}></div>

      <Topnav />

      {PLAYLIST.map((item) => {
        if (item.link === path) {
          return (
            <div
              key={item.title}
              onLoad={() => {
                changeBg(item.playlistBg);
                setPlaylistIndex(PLAYLIST.indexOf(item));
              }}
            >
              <PlaylistDetails data={item} />

              <div className={styles.PlaylistIcons}>
                <button
                  onClick={() => props.changeTrack([PLAYLIST.indexOf(item), 0])}
                >
                  <PlayButton isthisplay={isthisplay} />
                </button>
                <IconButton
                  icon={<Icons.Like />}
                  activeicon={<Icons.LikeActive />}
                />
                <Icons.More className={styles.moreIcon} />
              </div>

              <div className={styles.ListHead}>
                <p>#</p>
                <p>TITLE</p>
                <Icons.Time />
              </div>

              <div className={styles.PlaylistSongs}>
                {item.playlistData.map((song) => {
                  return (
                    <button
                      key={song.index}
                      onClick={() =>
                        props.changeTrack([
                          PLAYLIST.indexOf(item),
                          item.playlistData.indexOf(song),
                        ])
                      }
                      className={styles.SongBtn}
                    >
                      <PlaylistTrack
                        data={{
                          listType: item.type,
                          song: song,
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    trackData: state.trackData,
  };
};

export default connect(mapStateToProps, { changeTrack })(PlaylistPage);
