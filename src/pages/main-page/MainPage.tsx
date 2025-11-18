import { Link } from 'react-router-dom';
import styles from './mainPage.module.scss';

const MainPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Здесь собраны персонажи мира Дисней</h2>
        <Link to='/products'>
          <button className={styles.containerButton}>Смотреть персонажей</button>
        </Link>
      </div>
    </main>
  )
}

export default MainPage