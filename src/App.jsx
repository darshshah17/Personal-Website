import { useContext, useEffect } from 'react';
import ThemeContext from './contexts/ThemeContext';
import './App.css';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
// import Skills from './components/Skills';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <div className="app">
      <header className="app-header">
        <ThemeToggle />
      </header>
      <main>
        <About />
        <Work />
        {/* <Skills /> */}
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App;
