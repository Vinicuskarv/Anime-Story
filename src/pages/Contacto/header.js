import KeigoTakami from '../../components/img/ImgPng/KeigoTakami.png';
import './header.css';
function header() {
  return (
    <div className="Container">
        <img className='KeigoTakamiImg' src={KeigoTakami} alt="Keigo Takami"/>
        <div className='CampoInfoContacto'>
            <h1>I'm Vinicius Carvalho</h1>
        </div>
    </div>
  );
}
export default header;