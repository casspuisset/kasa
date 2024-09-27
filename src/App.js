import { Routes, Route, BrowserRouter } from 'react-router-dom';
import aboutPage from './pages/aboutPage/aboutPage';
import logementPage from './pages/logementPage/logementPage';
import errorPage from './pages/errorPage/errorPage'
import Header from './components/headerComponent/headerComponent'
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<aboutPage />} />
          <Route path="/logement/:id" element={<logementPage />} />
          <Route path="*" element={<errorPage />} />
        </Routes>    
    </BrowserRouter>
  );
}

export default App;
