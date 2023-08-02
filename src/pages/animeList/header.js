import BokuHeroAcademia from '../../components/img/BokuHeroAcademia.jpg';
import Haikuu from '../../components/img/Haikuu.jpg';
import DemonSlayer from '../../components/img/DemonSlayer.jpg';
import FamiliaForger from '../../components/img/FamíliaForger.jpg';
import AttackTitan from '../../components/img/AttackTitan.jpg';
import JujutsuKaisen from '../../components/img/JujutsuKaisen.jpg'
import Card from '../../components/Card'
import './animeList.css';

function Header() {
  return (
      <div className="row row-cols-2 row-cols-sm-4 row-cols-md-6 scroll-container">
        <Card
          foto = {Haikuu}
          titulo = "Haikuu"
          paragrafo = "Shouyou Hinata assiste a um jogo da Escola Karasuno no campeonato nacional de vôlei e fica fascinado pelo esporte."
        />
        <Card
          foto = {BokuHeroAcademia}
          titulo = "Boku no Hero Academia"
          paragrafo = "É um mundo onde 80% da população mundial possuem super poderes."
        />
        <Card
          foto = {DemonSlayer}
          titulo = "Kimetsu no Yaiba"
          paragrafo = "Tanjirō Kamado, um garoto bondoso e inteligente que vive junto com sua mãe e seus irmãos."
        />
        <Card
          foto = {FamiliaForger}
          titulo = "Spy x Family"
          paragrafo = "Participantes são colocados no papel de um agente recém-chegado da agência de espionagem do universo WISE."
        />
        <Card
          foto = {AttackTitan}
          titulo = "Shingeki no Kyojin"
          paragrafo = "Eren Yeager é um menino que mora na cidade de Shiganshina, localizada na extremidade de três paredes circulares que protegem seus habitantes dos Titãs."
        />
        <Card
          foto = {JujutsuKaisen}
          titulo = "jujutsu kaisen"
          paragrafo = "Yuuji engole o dedo para proteger Megumi e seus amigos e se torna o anfitrião de Sukuna, uma poderosa Maldição."
        />
    </div>
  );
}

export default Header;