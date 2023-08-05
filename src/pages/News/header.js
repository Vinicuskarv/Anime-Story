import CarouselComponent from '../../components/Carrousel';
import Noticia1 from '../../components/img/Noticias/jujutsu-kaisen-anime-hiato.webp';
import Noticia2 from '../../components/img/Noticias/one-piece-diretor-destaca-a-dublagem-do-luffy-com-gear-5.webp'
import Noticia3 from '../../components/img/Noticias/Good-Night-World-Adaptacao-em-anime-confirmada-para-outubro-1.webp'

import './news.css'
function Header() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-8'>
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
          linkInfo3 = "vsvdv"
          Img3 = {Noticia3}
          />
        </div>
        <div className='col-4'>
          dvsv
        </div>
      </div>

    </div>
  );
}
export default Header;
