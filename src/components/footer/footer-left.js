import { connect } from "react-redux";
import * as Icons from '../icons';
import IconButton from '../buttons/icon-button';

import styles from "./footer-left.module.css";

function FooterLeft(props){
    return (
        <div className={styles.footerLeft}>
            <ImgBox 
                trackData={props.trackData}
            />
            <SongDetails 
                trackData={props.trackData}
            />
            <IconButton icon={<Icons.Like />} activeicon={<Icons.LikeActive />}/>
            <IconButton icon={<Icons.Corner />} activeicon={<Icons.Corner />}/>
        </div>
    );
}

function ImgBox({ trackData }){
    return (
        <div className={styles.imgBox}>
            <img src={trackData.trackImg} alt="Gavurlar"/>
        </div>
    );
}

function SongDetails({ trackData }){
    return (
        <div className={styles.songDetails}>
            <p>{trackData.trackName}</p>
            <p><small>{trackData.trackArtist}</small></p>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
      trackData: state.trackData
    };
};
  
export default connect(mapStateToProps)(FooterLeft);