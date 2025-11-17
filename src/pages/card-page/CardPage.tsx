import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../services/store";
import { getSelectedcard, loadCharacterById } from "../../services/disneySlice";
import styles from './cardPage.module.scss';

const CardPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCharacterById(Number(id)))
  }, [id])

  const card = useSelector(getSelectedcard);

  if (!card) {
    return (<div>Loading...</div>)
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <img className={styles.cardImage} src={card.imageUrl} alt={card.name}/>
        <div className={styles.cardDescription}>
          <div className={styles.cardInfo}>
            <h2>{card.name}</h2>
            {card.films.length > 0 && (
              <h3>Фильмы: {card.films.join(', ')}</h3>
            )}
            {card.tvShows.length > 0 && (
              <h3>ТВ-шоу: {card.tvShows.join(', ')}</h3>
            )}
            {card.parkAttractions.length > 0 && (
              <h3>Парки атракционов: {card.parkAttractions.join(', ')}</h3>
            )}
            {card.videoGames.length > 0 && (
              <h3>Парки атракционов: {card.videoGames.join(', ')}</h3>
            )}
          </div>
          <button className={styles.button} onClick={() => navigate(-1)}>К списку персонажей</button>
        </div>
      </div>
    </main>
  )
};

export default CardPage;