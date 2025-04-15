import React from "react";
import Logo from '../../midia/logo.jpg'
import '../header/header.css'
import { Link } from "react-router-dom";


function Header() {

    return (
        <header>
            <img id='logo' src={Logo} alt=""/>
            
            <nav>
                <ul>
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link to={'/contatos'}>
                        <li>Contatos</li>
                    </Link>
                    <Link to={'/fotos'}>
                        <li>Fotos</li>                    
                    </Link>
                    <Link to={'/comentarios'}>
                        <li>Comentarios</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )

}

export default Header; 