import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import '../../styles/index.css'
import '../../styles/w3.css';
import './NavBar.css';
import logo from '../../img/logo.svg'
import {useContext} from "react";
import {ContextoGlobal} from "../../contexts/ContextoGlobal";

function NavBar(props){
    const contexto = useContext(ContextoGlobal);
    console.log(contexto);

    return(
        <div className="NavBar w3-center w3-bar w3-large w3-dark-gray sombra">
            <a className="w3-bar-item botao-menu w3-ripple w3-padding">
                <img className="logo"  src={logo}/>
            </a>
            <CloudinaryContext cloudName="postitu">
                <Image className="w3-right imgPerfil w3-bar-item w3-ripple w3-padding" publicId={contexto.state.imgPerfil} security="true"/>
            </CloudinaryContext>
            <p className="w3-right w3-bar-item w3-ripple w3-padding botao-menu">{contexto.state.nome}</p>
        </div>
    );
}
export default NavBar;