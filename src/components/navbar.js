import '../components/navbar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='ContainerNavBar'>
      <nav  style={styles.NavBar}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link to='/'style={styles.a}>HOME</Link>
          </li>
          <li style={styles.li}>
            <Link to='/AnimeList'style={styles.a}>ANIME LIST</Link>
          </li>
          <li style={styles.li}>
            <Link to='/News'style={styles.a}>NEWS</Link>
          </li>
          <li style={styles.li}>
            <Link to='/Contacto'style={styles.a}>CONTACTO</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
const styles = {
  NavBar:{
    position: 'relative',
    top: '30px',
  },
  ul: {
    paddingLeft: '0',
    display: 'flex',
    listStyle:'none',
    justifyContent: 'space-around',
  },
  li:{
    margin: 'auto',
    fontFamily: "'Lora', serif",
  },
  a:{
    color: 'black',
    textDecoration:'none',
  }
}
export default NavBar;