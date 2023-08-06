import characters from '../../components/img/ImgPng/CharactersGroup.png';
import './home.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
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