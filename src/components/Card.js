import React, { useRef, useEffect } from 'react';



function Card({foto, paragrafo, titulo, episodios}) {
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
    return (
        <div className='ContainerCard' ref={minhaDivRef} onClick={AbrirDivInfo}>
            <span>
                <img className='ContainerCardimg' src={foto} alt={titulo}></img>
                <div className='InfoCard'>
                    <h2>{titulo}</h2>
                    <p>{episodios}</p>
                </div>
            </span>
            <div className='ContainerCardInfoLAteral'>
                <h2>{titulo}</h2>
                <p>{paragrafo}</p>
            </div>
        </div>
    );
}
export default Card