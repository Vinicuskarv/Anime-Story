import CarouselComponent from '../../components/Carrousel';
import Noticia1 from '../../components/img/Noticias/jujutsu-kaisen-anime-hiato.webp';
import Noticia2 from '../../components/img/Noticias/one-piece-diretor-destaca-a-dublagem-do-luffy-com-gear-5.webp';
import Noticia3 from '../../components/img/Noticias/Good-Night-World-Adaptacao-em-anime-confirmada-para-outubro-1.webp';
import CardNoticia from '../../components/NoticiaCard';
import CardImg1 from '../../components/img/Noticias/Zom-100-Bucket-List-of-the-Dead-5o-Episodio-do-anime-sofrera-atraso-350x190.webp';
import CardImg2 from '../../components/img/Noticias/Undead-Murder-Farce-Novo-arco-ganha-trailer-e-arte-promocional-1.webp';
import CardImg3 from '../../components/img/Noticias/Oumuro-ke-Spin-off-de-Yuruyuri-tem-filme-anunciado-1.webp';


import './news.css';
function Header() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8 '>
          <CarouselComponent
          paragrafo1 = "O anime de One Piece entrará em um dos momentos mais marcantes da franquia em breve ao apresentar a nova transformação de Luffy. Então Tatsuya Nagamine, o diretor do anime, disse que Mayumi Tanaka, a dubladora original de Luffy, fez uma dublagem incrível para o despertar do Gear 5."
          titulo1 = "Jujutsu Kaisen - Segunda temporada do anime entra em hiato de 4 semanas"
          linkInfo1 = "https://pt.wikipedia.org/wiki/Jujutsu_Kaisen"
          Img1 = {Noticia1}

          paragrafo2 = "O anime de One Piece entrará em um dos momentos mais marcantes da franquia em breve ao apresentar a nova transformação de Luffy. Então Tatsuya Nagamine, o diretor do anime, disse que Mayumi Tanaka, a dubladora original de Luffy, fez uma dublagem incrível para o despertar do Gear 5."
          titulo2 = "Diretor de One Piece diz que Luffy terá uma dublagem inovadora com o Gear 5"
          linkInfo2 = "https://pt.wikipedia.org/wiki/One_Piece"
          Img2 = {Noticia2}
          
          paragrafo3 = "A Netflix começou divulgou um trailer para anunciar a adaptação em anime do mangá “Good Night World”, de Uru Okabe, nesta segunda-feira (31). De acordo com informações, a estreia acontece dia 12 de outubro."
          titulo3 = "Good Night World - Adaptação em anime confirmada para outubro"
          linkInfo3 = "https://en.wikipedia.org/wiki/Good_Night_World"
          Img3 = {Noticia3}
          />
        </div>
        <div className='col-lg-4 grid row '>
          
            <CardNoticia 
              titulo = "Zom 100: Bucket List of the Dead - 5º Episódio do anime sofre com atraso"
              Img = {CardImg1}
              linkInfo = "https://en.wikipedia.org/wiki/Zom_100:_Bucket_List_of_the_Dead"
              date = "02/08/2023"
            />
            <CardNoticia
              titulo = "Undead Murder Farce - Novo arco ganha trailer e arte promocional"
              Img = {CardImg2}
              linkInfo = "https://en.wikipedia.org/wiki/Undead_Girl_Murder_Farce"
              date = "01/08/2023"
            />
            <CardNoticia
              titulo = "Oumuro-ke - Spin-off de “Yuruyuri” tem filme anunciado"
              Img = {CardImg3}
              linkInfo = "https://en.wikipedia.org/wiki/YuruYuri"
              date = "05/08/2023"
            />
        </div>
      </div>
    </div>
  );
}
export default Header;
