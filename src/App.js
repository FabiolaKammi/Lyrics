import React from 'react';
import './App.css';
import Lyrics from "./Components/Lyrics";
import TopIntro from "./Components/TopIntro";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <TopIntro />
      <Lyrics />
      <Footer />
    </div>
  );
}

export default App;
