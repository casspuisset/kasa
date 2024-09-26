import { Routes, Route } from 'react-router-dom';
import homePage from './pages/homePage/homePage';
import aboutPage from './pages/aboutPage/aboutPage';
import logementPage from './pages/logementPage/logementPage';
import errorPage from './pages/errorPage/errorPage'
import Header from './components/headerComponent/headerComponent'

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<homePage />}/>
          <Route path="/about" element={<aboutPage />}/>
          <Route path="/ogement/:id" element={<logementPage />}/>
          <Route path="*" element={<errorPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
