import styles from "./searchpage-card.module.css";

function SearchPageCard({cardData}){
    return (
        <div key={cardData.title} className={styles.SearchCardBox} style={{backgroundColor: `${cardData.bgcolor}`}}>
            <div className={styles.SearchCard}>
                <img src={cardData.imgurl} />
                <p>{cardData.title}</p>
            </div>
        </div>
    );
}

export default SearchPageCard;