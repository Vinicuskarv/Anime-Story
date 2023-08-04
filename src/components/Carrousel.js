import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = () => {
  return (
    <Carousel breakPoint>
      <div>
        <img src="caminho/para/imagem1.jpg" alt="Imagem 1" />
        <p className="legend">Legenda da Imagem 1</p>
      </div>
      <div>
        <img src="caminho/para/imagem2.jpg" alt="Imagem 2" />
        <p className="legend">Legenda da Imagem 2</p>
      </div>
      <div>
        <img src="caminho/para/imagem3.jpg" alt="Imagem 3" />
        <p className="legend">Legenda da Imagem 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
