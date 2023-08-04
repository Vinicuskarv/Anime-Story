import KeigoTakami from '../../components/img/ImgPng/KeigoTakami.png';
import IconEmail from '../../components/img/Icons/Email.png'
import IconGithub from '../../components/img/Icons/Github.png'
import IconLinkedin from '../../components/img/Icons/Linkedin.png'
import IconWhatsapp from '../../components/img/Icons/whatsapp.png'

import './header.css';
function header() {
  return (
    <div className="Container">
        <img className='KeigoTakamiImg' src={KeigoTakami} alt="Keigo Takami"/>
        <div className='CampoInfoContacto'>
            <h1>I'm Vinicius Carvalho</h1>
            <p>Web Developer</p>
            <p>Olá! Fiz este site com a intenção de aprimorar minhas habilidades em React. Se você notar alguma coisa que possa ser aperfeiçoada, por favor, entre em contato comigo por meio de uma das plataformas abaixo. Adoraria receber suas sugestões para que eu possa aprimorar e praticar ainda mais minhas habilidades com essa poderosa ferramenta. O seu feedback é extremamente valioso para mim. Vamos juntos tornar este projeto ainda melhor!</p>
            <div style={style.GrupIcons}>
              <a style={style.IconLink} href='https://github.com/Vinicuskarv'>
                <img src={IconGithub} className='IconAnimation' alt="Icon Github"/>
                <p style={style.p} className='HoverAnimation'>Github</p>
              </a>
              <a style={style.IconLink} href="https://www.linkedin.com/in/vinicius-carvalho-lucius">
                <img src={IconLinkedin} className='IconAnimation' alt="Icon Linkedin"/>
                <p style={style.p} className='HoverAnimation'>Linkedin</p>
              </a>
              <a style={style.IconLink} href="https://mail.google.com/mail/u/0/#inbox">
                <img src={IconEmail} className='IconAnimation' alt="Icon Email"/>
                <p style={style.p} className='HoverAnimation'>Email</p>
              </a>
              <a style={style.IconLink} href="https://api.whatsapp.com/send/?phone=351914127602&text&type=phone_number&app_absent=0" >
                <img src={IconWhatsapp} className='IconAnimation' alt="Icon Whatsapp"/>
                <p style={style.p} className='HoverAnimation'>Whatsapp</p>
              </a>
            </div>
        </div>
    </div>
  );
}
const style={
  GrupIcons:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  IconLink:{
    margin: "5px",
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "white",
  },
  p:{
    marginTop: "auto",
    fontSize: "15px",
  }
}
export default header;