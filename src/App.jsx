import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UrlShortenerPage from './pages/UrlShortenerPage';
import UrlStatisticsPage from './pages/UrlStatisticsPage';
import RedirectHandler from './routes/RedirectHandler';
import { LinkProvider } from './store/LinkContext';

function App() {
  return (
    <LinkProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<UrlShortenerPage />} />
          <Route path="/statistics" element={<UrlStatisticsPage />} />
          <Route path="/:shortcode" element={<RedirectHandler />} />
        </Routes>
      </Router>
    </LinkProvider>
  );
}

export default App;
