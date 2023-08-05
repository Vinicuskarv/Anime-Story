import NavBar from '../../components/navbar';
import IconNameLogo from '../../components/IconLogoName';
import FooterHome from '../../components/footerHome';
import Header from './header';
function Home() {
  return (
    <div>
        <NavBar/>
        <Header/>
        <IconNameLogo/>
        <FooterHome/>
    </div>
  );
}

export default Home;