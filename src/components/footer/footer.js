import React from "react";
import Imagem from '../../midia/logo.jpg'
import '../footer/footer.css'

function Footer() {

    return(
        <footer>
            <img className='img-footer' src={Imagem} alt="" />
            <span>Todos os direitos reservados &copy;</span>
            <span>Desenvolvido por Gustavo Batista</span>
        </footer>
    )

}

export default Footer;