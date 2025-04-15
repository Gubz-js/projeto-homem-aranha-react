import React from "react";
import Header from '../../components/header/header'
import '../comentarios/comentarios.css'
import Footer from '../../components/footer/footer'

function Comentarios() {
    return(
       <>
        <Header />
            <div className="main-container-comentarios">
                <div className="main-content-comentarios">
                    <div className="comentarios">
                        <div className="imagem g"></div>
                        <div className="comentario">
                            <span>Atitude punk rock e superpoderes aranha? O Aranhaverso virou um show de rock!</span>
                        </div>
                    </div>
                    <div className="comentarios">
                        <div className="imagem h"></div>
                        <div className="comentario">
                            <span>Estudando e combatendo vilões em Mumbai? Moleza. Sou mestre em malabarismo com teias!</span>
                        </div>
                    </div>
                    <div className="comentarios">
                        <div className="imagem i"></div>
                        <div className="comentario">
                            <span>Viajando no tempo e espaço pra proteger o futuro da teia. Tacos holográficos, alguém?</span>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
       </>
    )
}

export default Comentarios;