import React from 'react';
import ImagemBackground from './ImagemBackgroundNaruto.jpg';
import Home from './pages/Home/PageHome';
import AnimeList from './pages/AnimeList/PageAnimelist';
import Contacto from './pages/Contacto/PageContacto';
import News from './pages/News/PageNews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div style={styles.content}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/AnimeList' element={<AnimeList/>}/>
            <Route path='/News' element={<News/>}/>  
            <Route path='/Contacto' element={<Contacto/>}/>
          </Routes>
        </BrowserRouter>
      </div>
      <img src={ImagemBackground} style={styles.ImagemBackground} alt="Image the background" />
    </div>
  );
}
const styles = {
  content: {
    position: 'relative',
    zIndex: 1,
  },
  ImagemBackground: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity:'20%',
  },
}
export default App;
