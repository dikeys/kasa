import './styles/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Accommodation from './pages/Accommodation/Accommodation';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='accueil' element={<Home />}></Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
        <Route path='/accommodation/:id' element={<Accommodation />}></Route>
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
