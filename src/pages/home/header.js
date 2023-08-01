import characters from '../../components/img/ImgPng/CharactersGroup.png';
import '../../components/master.css';
import './home.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
        <h1 style={styles.icon} className='icon'><strong style={styles.txtColor}>NIME</strong><br/>STORY</h1>
        <img className='headerImgCharacters' src={characters} alt="characters"/>
        <div className='cardInfo' style={styles.cardInfo}>
            <h1>KNOW ALL THE STORIES OF THE BEST ANIMES WITH <strong style={styles.txtColor}>NIME</strong>STORY</h1>
            <Link to='/AnimeList'style={styles.a}>Anime List</Link>
        </div>
    </header>
  );
}
const styles = {
    header:{
        display: 'flex',
    },
    cardInfo:{
        position: 'relative',
        top: '160px',
        display: 'inline',
        width: '450px',
        left: '55%',
        fontFamily: "'REM', sans-serif",
    },
    icon:{
        position: 'absolute',
        top: '-15px',
        left: '30px',
    },
    a:{
        textDecoration: 'none',
        background: 'linear-gradient(0.25turn,#b53636,#a85858)',
        color:' rgb(250, 252, 253)',
        padding: '10px 15px',
        borderRadius: '30px',
    },
    txtColor: {
        color:'#b53636',
    }
}

export default Header;