import BokuHeroAcademia from '../../components/img/BokuHeroAcademia.jpg';
import Haikuu from '../../components/img/Haikuu.jpg';
import DemonSlayer from '../../components/img/DemonSlayer.jpg';
import FamiliaForger from '../../components/img/FamíliaForger.jpg';
import AttackTitan from '../../components/img/AttackTitan.jpg';

import './animeList.css';

function Header() {
  return (
    <div className=" scroll-container">
        <div className='ContainerCard'>
          <img className='ContainerCardimg' src={Haikuu} alt="Haikuu"></img>
          <div className='InfoCard'>
            <h2>Haikuu</h2>
            <p>Shouyou Hinata assiste a um jogo da Escola Karasuno no campeonato nacional de vôlei e fica fascinado pelo esporte.</p>
          </div>
        </div>
        <div className='ContainerCard'>
          <img className='ContainerCardimg' src={BokuHeroAcademia} alt="BokuHeroAcademia"></img>
          <div className='InfoCard'>
            <h2>Boku no Hero Academia</h2>
            <p>É um mundo onde 80% da população mundial possuem super poderes.</p>
          </div>
        </div>
        <div className='ContainerCard'>
          <img className='ContainerCardimg' src={DemonSlayer} alt="BokuHeroAcademia"></img>
          <div className='InfoCard'>
            <h2>Kimetsu no Yaiba</h2>
            <p>Tanjirō Kamado, um garoto bondoso e inteligente que vive junto com sua mãe e seus irmãos.</p>
          </div>
        </div>
        <div className='ContainerCard'>
          <img className='ContainerCardimg' src={FamiliaForger} alt="BokuHeroAcademia"></img>
          <div className='InfoCard'>
            <h2>Kimetsu no Yaiba</h2>
            <p>Participantes são colocados no papel de um agente recém-chegado da agência de espionagem do universo WISE.</p>
          </div>
        </div>
        <div className='ContainerCard'>
          <img className='ContainerCardimg' src={AttackTitan} alt="BokuHeroAcademia"></img>
          <div className='InfoCard'>
            <h2>Kimetsu no Yaiba</h2>
            <p>Eren Yeager é um menino que mora na cidade de Shiganshina, localizada na extremidade de três paredes circulares que protegem seus habitantes dos Titãs.</p>
          </div>
        </div>
    </div>
  );
}

export default Header;