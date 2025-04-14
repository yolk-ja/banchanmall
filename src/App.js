import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetailPage from './pages/ProductDetailPage'
import SidePage from './pages/SidePage'
import SoupPage from './pages/SoupPage'
import SaladPage from './pages/SaladPage'
import MainPage from './pages/MainPage'

function App() {
  return (
    <BrowserRouter>
    <div className="wrap">
      <Header />

      <Routes>
        <Route path='/' element={<ProductList />} />
        {/* 상품상세 */}
        <Route path='/product/:id' element={<ProductDetailPage />} />

        {/* 서브페이지 */}
        <Route path='/side-1' element={<SidePage />} />
        <Route path='/main-1' element={<MainPage />} />
        <Route path='/soup-1' element={<SoupPage />} />
        <Route path='/salad' element={<SaladPage />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
