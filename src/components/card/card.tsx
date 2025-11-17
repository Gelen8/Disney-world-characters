
import styles from './card.module.scss';
import LikeButton from "../../ui/like-button/likeButton";
import { useState } from "react";
import { ReactComponent as Basket } from '../../assets/icons/basket.svg';
import { TCardProps } from './types';
import { useDispatch, useSelector } from '../../services/store';
import { removeItem, selectItemById, selectLiked, toggleLike } from '../../services/disneySlice';

const Card = ({title, image, id}: TCardProps) => {
  const dispatch = useDispatch();
  const currentCard = useSelector((state) => selectItemById(state, String(id)));

  const isLike = currentCard?.liked || false;

  const handleClick = () => {
    dispatch(toggleLike(id))
  };
  
  const handleDelete = () => {
    dispatch(removeItem(id))
  }
  return (
    <li className={styles.card}>
      <img className={styles.cardImage} src={image} alt={title}></img>
      <div className={styles.cardDescription}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <div className={styles.cardButtons}>
          <LikeButton liked={isLike} onClick={handleClick}></LikeButton>
          <Basket className={styles.basket} width={24} height={24} viewBox="0 0 50 50" onClick={handleDelete}></Basket>
        </div>
      </div>
      
    </li>
  )
}

export default Card;