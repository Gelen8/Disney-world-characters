import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/MainPage';
import styles from './app.module.scss'
import AppHeader from '../app-header/app-header';
import ProductsPage from '../../pages/products-page/ProductsPage';

const App = () => {
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