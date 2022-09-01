import Topnav from "../components/topnav/topnav";
import SearchPageCard from "../components/cards/searchpage-card";
import { SEARCHCARDS } from "../data/index";

import styles from "./search.module.css";

function Search() {
  return (
    <div className={styles.SearchPage}>
      <Topnav search={true} />

      <div className={styles.Search}>
        <p className={styles.title}>Your top genres</p>
        <div className={styles.SearchCardGrid}>
          {SEARCHCARDS.map((card) => {
            return (
              <SearchPageCard
                key={card.title}
                cardData={{
                  bgcolor: card.bgcolor,
                  title: card.title,
                  imgurl: card.imgurl,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
