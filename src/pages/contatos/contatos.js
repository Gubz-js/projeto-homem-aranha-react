import React from "react";
import Header from '../../components/header/header'
import HomemAranha from '../../midia/homem_aranha_-_comentario-bg2.png'
import '../../pages/contatos/contatos.css'
import Footer from '../../components/footer/footer'

function Contatos() {
    return(
        <>
            <Header />
            <div className="main-container">
                <div className="main-content-contatos">
                    <div className="content-aranha">
                        <span className="text">Não deixe de dizer como foi a sua expêriencia!</span>
                        <img className="img-aranha" src={HomemAranha} alt=""></img>
                    </div>
                    <div className="formulario">
                        <form>
                            <label for='name'>Nome</label>
                            <input type="name" placeholder="Digite seu nome" />

                            <label for='email'>Email</label>
                            <input type='email' placeholder='Digite seu email' />

                            <label>Mensagem</label>
                            <textarea rows='8' placeholder="Digite sua mensagem"></textarea>

                            <div className="button">  <button>Enviar</button> </div>                              
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contatos;