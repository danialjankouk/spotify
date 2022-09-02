import convertTime from '../../../functions/convertTime';

import RangeSlider from '../range-slider';

import styles from "./music-progress-bar.module.css";

function MusicProgressBar({ currentTime, duration, handleTrackClick}){
    return (
        <div className={styles.musicProgress}>
            <span>
                <p>{convertTime(currentTime)}</p>
            </span>
            <RangeSlider value={currentTime} minvalue={0} maxvalue={duration} handleChange={handleTrackClick}/>
            <span>
                <p>{convertTime(duration)}</p>
            </span>
        </div>
    );
}

export default MusicProgressBar;