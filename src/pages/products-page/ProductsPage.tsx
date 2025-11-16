import { Link } from "react-router-dom";
import Card from "../../components/card/card";
import styles from './productsPage.module.scss';
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "../../services/store";
import { removeItem, selectLiked, selectNews, selectNewsLoading } from "../../services/newsSlice";
import { TCard } from "../../utils/types";

const ProductsPage = () => {
  const [show, setShow] = useState('all');

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShow(e.target.value)
  };
  const dispatch = useDispatch();

  const isLoading = useSelector(selectNewsLoading);
  const allCards: TCard[] = useSelector(selectNews);
  const favoriteCards = useSelector(selectLiked);

  const showCards = show === 'all' ? allCards : favoriteCards;

  return (
    <section>
      <div className={styles.panel}>
        <div>
          <span>Показать:</span>
          <label>
            <input
              type="radio"
              value='all'
              checked={show === 'all'}
              onChange={onValueChange}
            />
            все новости
          </label>
          <label>
            <input
              type="radio"
              value='favorites'
              checked={show === 'favorites'}
              onChange={onValueChange}
            />
            понравившиеся новости
          </label>
        </div>
        <Link to='/create- product'>Создаить новость</Link>
      </div>
      <ul className={styles.cards}>
        {isLoading ? (<div>Loading...</div>) : (showCards.map((card) => (
          <Card key={card._id} id={card._id} image={card.imageUrl} title={card.name}></Card>
        )))}
      </ul>
    </section>
  )
};

export default ProductsPage;