function Card({foto, paragrafo, titulo}) {
    return (
        <div className='ContainerCard'>
            <img className='ContainerCardimg' src={foto} alt={titulo}></img>
            <div className='InfoCard'>
                <h2>{titulo}</h2>
                <p>{paragrafo}</p>
            </div>
        </div>
    );
}
export default Card