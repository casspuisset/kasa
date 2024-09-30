import { Routes, Route, BrowserRouter } from 'react-router-dom';
import aboutPage from './pages/aboutPage';
import logementPage from './pages/logementPage';
import errorPage from './pages/errorPage'
import Header from './components/headerComponent'
import HomePage from './pages/homePage';

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
