import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/MainPage';
import styles from './app.module.scss'
import AppHeader from '../app-header/app-header';
import ProductsPage from '../../pages/products-page/ProductsPage';
import { useDispatch } from '../../services/store';
import { useEffect } from 'react';
import { loadCharacters } from '../../services/disneySlice';
import CardPage from '../../pages/card-page/CardPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCharacters())
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/products' element={<ProductsPage />}></Route>
        <Route path='/products/:id' element={<CardPage />}></Route>
        <Route path='/create- product' element={<ProductsPage />}></Route>
      </Routes>
    </div>
  )
}

export default App