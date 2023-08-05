import BokuHeroAcademia from '../../components/img/BokuHeroAcademia.jpg';
import Haikuu from '../../components/img/Haikuu.jpg';
import DemonSlayer from '../../components/img/DemonSlayer.jpg';
import FamiliaForger from '../../components/img/FamíliaForger.jpg';
import AttackTitan from '../../components/img/AttackTitan.jpg';
import JujutsuKaisen from '../../components/img/JujutsuKaisen.jpg';
import HunterHunter from '../../components/img/HunterHunter.jpg';
import Naruto from '../../components/img/Naruto.jpg';

import Card from '../../components/Card';
import './animeList.css';

function Header() {
  return (
      <div className="row row-cols-2 row-cols-sm-4 row-cols-md-6 scroll-container">
        <Card
          foto = {Haikuu}
          titulo = "Haikuu"
          paragrafo = "Shouyou Hinata assiste a um jogo da Escola Karasuno no campeonato nacional de vôlei e fica fascinado pelo esporte."
          episodios = "Episódios: 60"
          linkInfo = "https://pt.wikipedia.org/wiki/Haiky%C5%AB!!"
        />
        <Card
          foto = {BokuHeroAcademia}
          titulo = "Boku no Hero Academia"
          paragrafo = "É um mundo onde 80% da população mundial possuem super poderes."
          episodios = "Episódios: 113"
          linkInfo = "https://pt.wikipedia.org/wiki/Boku_no_Hero_Academia"
        />
        <Card
          foto = {DemonSlayer}
          titulo = "Kimetsu no Yaiba"
          paragrafo = "Tanjirō Kamado, um garoto bondoso e inteligente que vive junto com sua mãe e seus irmãos."
          episodios = "Episódios: 45 ,Filme: 1"
          linkInfo = "https://pt.wikipedia.org/wiki/Kimetsu_no_Yaiba"
        />
        <Card
          foto = {FamiliaForger}
          titulo = "Spy x Family"
          paragrafo = "Participantes são colocados no papel de um agente recém-chegado da agência de espionagem do universo WISE."
          episodios = "Episódios: 25"
          linkInfo = "https://en.wikipedia.org/wiki/Spy_%C3%97_Family"
        />
        <Card
          foto = {AttackTitan}
          titulo = "Shingeki no Kyojin"
          paragrafo = "Eren Yeager é um menino que mora na cidade de Shiganshina, localizada na extremidade de três paredes circulares que protegem seus habitantes dos Titãs."
          episodios = "Episódios: 88"
          linkInfo = "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin"
        />
        <Card
          foto = {JujutsuKaisen}
          titulo = "jujutsu kaisen"
          paragrafo = "Yuuji engole o dedo para proteger Megumi e seus amigos e se torna o anfitrião de Sukuna, uma poderosa Maldição."
          episodios = "Episódios: 26 ,Filme: 1"
          linkInfo = "https://pt.wikipedia.org/wiki/Jujutsu_Kaisen"
        />
        <Card
          foto = {HunterHunter}
          titulo = "Hunter x Hunter"
          paragrafo = "Gon decide sair de casa e entrar no Exame Hunter, que tem uma série de desafios que buscam testar suas habilidades."
          episodios = "Episódios: 148, Filmes: 2"
          linkInfo = "https://pt.wikipedia.org/wiki/Hunter_%C3%97_Hunter"
        />
        <Card
          foto = {Naruto}
          titulo = "Naruto"
          paragrafo = "Naruto luta por seu sonho de se tornar o líder máximo de sua aldeia (Hokage) e ser reconhecido como alguém importante."
          episodios = "Episódios: 770, Filmes: 11"
          linkInfo = "https://pt.wikipedia.org/wiki/Naruto"
        />
    </div>
  );
}


export default Header;