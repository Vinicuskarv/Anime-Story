import React from 'react';


const CarouselComponent = ({Img1, paragrafo1, titulo1,linkInfo1,Img2, paragrafo2, titulo2,linkInfo2,Img3, paragrafo3, titulo3,linkInfo3}) => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" style={styles.ContaineCarousel}>
      <div className="carousel-indicators">
        <button type="button" style={styles.carouselExampleCaptions} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" style={styles.carouselExampleCaptions} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" style={styles.carouselExampleCaptions} data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a style={styles.a} href={linkInfo1}>
            <img src={Img1} className="d-block w-100" alt={titulo1}/>
            <div className="CampoConteudo"> 
                <h2>{titulo1}</h2>
                <p>{paragrafo1}</p>
            </div>
          </a>
        </div>
        <div className="carousel-item">
          <a style={styles.a} href={linkInfo2}>
            <img src={Img2} className="d-block w-100" alt={titulo2}/>
            <div className="CampoConteudo">
              <h2>{titulo2}</h2>
              <p>{paragrafo2}</p>
            </div>
          </a>
        </div>
        <div className="carousel-item">
          <a style={styles.a} href={linkInfo3}>
            <img src={Img3} className="d-block w-100" alt={titulo3}/>
            <div className="CampoConteudo">
              <h2>{titulo3}</h2>
              <p>{paragrafo3}</p>
            </div>
          </a>
        </div>
      </div>
      <button className="carousel-control-prev" style={styles.NextIcon} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" style={styles.NextIcon} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
const styles = {
  ContaineCarousel:{
    margin: '3px',
    boxShadow: "-5px -5px 10px rgba(121, 85, 85, 0.188),5px 5px 10px rgba(121, 85, 85, 0.188)",
  },
  NextIcon:{
      background: 'transparent',
      border:'none',
  },
  carouselExampleCaptions:{
    border:'none',
    background: '#61677A',
    margin:'3px',
    padding:'3px 20px',
    borderRadius:'10px'
  },
  a:{
    textDecoration: 'none',
  }
}

export default CarouselComponent;
