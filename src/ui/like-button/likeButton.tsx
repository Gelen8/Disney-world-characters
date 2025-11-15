import { LikeButtonProps } from "./type";
import { ReactComponent as ActiveLike } from '../../assets/icons/like-active.svg';
import { ReactComponent as EmptyLike } from '../../assets/icons/like.svg';
import styles from './likeButton.module.scss';


export const LikeButton = ({ liked,
  onClick,
  isActive =  false
}: LikeButtonProps) => {
  
  return (
    <button 
      className={`${styles.likeButton} ${liked ? styles.liked : ''}`} 
      onClick={onClick}
      aria-label={liked ? 'Удалить из избранного' : 'Добавить в избранное'}
    >
      {liked? <ActiveLike className={styles.heart} />: <EmptyLike className={styles.heart} />}
    </button>
  );
};
 export default LikeButton;