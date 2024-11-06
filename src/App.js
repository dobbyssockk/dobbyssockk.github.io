import 'normalize.css';
import { ThemeProvider } from 'styled-components';
import { breakpoints } from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <ThemeProvider theme={{ breakpoints}}>
        <GlobalStyle />
        <Header />

        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/contacts' element={<ContactPage />} />
          </Routes>
        </main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
