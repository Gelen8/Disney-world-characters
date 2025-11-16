import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/MainPage';
import styles from './app.module.scss'
import AppHeader from '../app-header/app-header';
import ProductsPage from '../../pages/products-page/ProductsPage';
import { useDispatch } from '../../services/store';
import { useEffect } from 'react';
import { loadNews } from '../../services/newsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNews())
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/products' element={<ProductsPage />}></Route>
      </Routes>
    </div>
  )
}

export default App