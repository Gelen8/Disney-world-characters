import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import styles from './productsPage.module.scss';
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "../../services/store";
import { selectLiked, selectNews, selectNewsLoading } from "../../services/disneySlice";

const ProductsPage = () => {
  const [show, setShow] = useState('all');

  const onValueChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setShow(e.target.value)
  }, []);

  const isLoading = useSelector(selectNewsLoading);
  const allCards = useSelector(selectNews);
  const favoriteCards = useSelector(selectLiked);

  const showCards = useMemo(() => {
    return show === 'all' ? allCards : favoriteCards;
  }, [show, allCards, favoriteCards])

  return (
    <main>
      <div className={styles.panel}>
        <div className={styles.panelFilter}>
          <span>Показать:</span>
          <label>
            <input
              type="radio"
              value='all'
              checked={show === 'all'}
              onChange={onValueChange}
            />
            Все персонажи
          </label>
          <label>
            <input
              type="radio"
              value='favorites'
              checked={show === 'favorites'}
              onChange={onValueChange}
            />
            Избранное
          </label>
        </div>
        <Link to='/create-product'>
          <button className={styles.panelButton}>Создать персонажа</button>
        </Link>
      </div>
      <ul className={styles.cards}>
        {isLoading ? (<div>Loading...</div>) : (showCards.map((card) => (
          <Card key={card._id} id={card._id} image={card.imageUrl} title={card.name}></Card>
        )))}
      </ul>
    </main>
  )
};

export default ProductsPage;