import './NoticiaCard.css';

const CardNoticia = ({Img, titulo, linkInfo, date}) => {
  return (
    <div className='col-lg-12 col-md-3 col-10' style={styles.contaninerCard}>
      <div className="card mb-2" style={styles.card}>
          <div className="row g-10">
            <div className="col-lg-5">
              <img src={Img} className="img-fluid rounded-start" alt={titulo}/>
              </div>
              <div className="col-lg-7">
              <div className="card-body " style={styles.InfoNoticiaCard}>
                <a href={linkInfo}>
                  <h5 className="card-title">{titulo}</h5>
                  <p>{date}</p>
                  </a>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};
const styles = {
    card:{
        width: '100%',
        background: "transparent",
        margin: "3px",
        border: "none",
        boxShadow: "-5px -5px 10px rgba(121, 85, 85, 0.188),5px 5px 10px rgba(121, 85, 85, 0.188)",
    },
    contaninerCard:{
      margin: "3px",
      testAlien:"center",
    }
  }
export default CardNoticia;