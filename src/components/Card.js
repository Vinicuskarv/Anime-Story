import React, { useRef, useEffect } from 'react';
import IconsCloseX from '../components/img/ImgPng/CloseX.png';
import './Card.css';

function Card({ foto, paragrafo, titulo, episodios, linkInfo}) {
  const minhaDivRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const minhaDiv = minhaDivRef.current;
      if (minhaDiv && !minhaDiv.contains(event.target)) {
        minhaDiv.classList.remove('centralizado');
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const AbrirDivInfo = () => {
    const minhaDiv = minhaDivRef.current;
    if (minhaDiv) {
      minhaDiv.classList.add('centralizado');
    }
  };

  const handleIconCloseClick = (event) => {
    const minhaDiv = minhaDivRef.current;
    if (minhaDiv) {
      minhaDiv.classList.remove('centralizado');
    }
    event.stopPropagation();
  };

  return (
    <div className='ContainerCard' ref={minhaDivRef} onClick={AbrirDivInfo}>
      <span>
        <img className='ContainerCardimg' src={foto} alt={titulo} />
        <div className='InfoCard'>
          <h2>{titulo}</h2>
          <p>{episodios}</p>
        </div>
      </span>
      <div className='ContainerCardInfoLAteral'>
        <img
          className='IconsCloseX'
          src={IconsCloseX}
          alt="Icons X Close"
          onClick={handleIconCloseClick}
        />
        <h2>{titulo}</h2>
        <p>{paragrafo}</p>
        <a href={linkInfo} className='LinkInfo'>KNOW MORE</a>
      </div>
    </div>
  );
}

export default Card;
