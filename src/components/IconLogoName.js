import './IconLogoName.css';
import { Link } from 'react-router-dom';

function IconNameLogo() {
  return (
    <Link to='/'style={styles.a}><h1 className='iconNameLogo'><strong style={styles.txtColor}>NIME</strong><br/>STORY</h1></Link>
    
  );
}
const styles = {
    txtColor: {
        color:'#b53636',
    },
    a:{
      textDecoration: 'none',
      color:'black',
  },
}

export default IconNameLogo;