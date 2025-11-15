import { TCard } from "./type";
import styles from './card.module.scss';
import LikeButton from "../../ui/like-button/likeButton";
import { useState } from "react";
import { ReactComponent as Basket } from '../../assets/icons/basket.svg';

const Card = ({image, title}: TCard) => {
  const [isLike, setIsLike] = useState(false);
  const onClick = () => {
    setIsLike(!isLike)
    console.log('z ne')
  }; 
  return (
    <li className={styles.card}>
      <img className={styles.cardImage} src={image} alt={title}></img>
      <div className={styles.cardDescription}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.cardButtons}>
          <LikeButton liked={isLike} isActive={isLike} onClick={onClick}></LikeButton>
          <Basket width={24} height={24} viewBox="0 0 50 50"></Basket>
        </div>
      </div>
      
    </li>
  )
}

export default Card;