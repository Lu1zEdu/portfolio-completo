import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects'; // <--- Importe aqui
import { translations } from './data/translations';

function App() {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const currentTexts = translations[language];

  return (
    <div className="bg-primary min-h-screen text-txt">
      <Navbar
        toggleLanguage={toggleLanguage}
        currentLang={language}
        texts={currentTexts.navbar}
      />

      <main>
        <Hero texts={currentTexts.hero} />
        <Projects language={language} />
      </main>
    </div>
  )
}

export default App;