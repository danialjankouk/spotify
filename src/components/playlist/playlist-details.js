import styles from "./playlist-details.module.css";

function PlaylistDetails({data}) {
	return (
        <div className={styles.playlistDetails}>
            <div className={styles.imgBox}>
                <img src={data.imgUrl} />
            </div>
            <div className={styles.textBox}>
                <p className={styles.capitalType}>{data.type}</p>
                <p>{data.title}</p>
                <div className={styles.Artist}>
                    <figure>
                        <img src={data.imgUrl} />
                    </figure>
                    <p>{data.artist}</p>
                </div>
            </div>
        </div>
	);
}

export default PlaylistDetails;
