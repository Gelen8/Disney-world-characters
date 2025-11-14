import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/MainPage';
import styles from './app.module.css'
import AppHeader from '../app-header/app-header';

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
      </Routes>
    </div>
  )
}

export default App