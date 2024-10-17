import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AboutPage from './pages/aboutPage';
import LogementPage from './pages/logementPage';
import ErrorPage from './pages/errorPage'
import Header from './components/headerComponent'
import HomePage from './pages/homePage';
import Footer from './components/footerComponent';
import './styles/index.scss'

function App() {
  return (
    <BrowserRouter>
    <div className='main'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/logement/:id" element={<LogementPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>    
        <Footer />
    </BrowserRouter>
  );
}

export default App;
