import React from "react";
import Header from "../../components/header/header";
import '../home/home.css'
import Video from '../../midia/trailer.mp4'
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";

function Home() {

    return(
        <>
        <Header />
            <div id='banner'></div>
            <div className="container-content">
                <div className="content">
                    <video controls className="trailer">
                        <source src={Video} />
                        Seu navegador não suporta o video
                    </video>
                    <div id="sinopse">
                        <p className="description">Homem-Aranha: Através do Aranhaverso, é a continuação do vencedor do Oscar Homem-Aranha: No Aranhaverso, de 2018, que acompanha Miles Morales (Shameik Moore), o simpático Homem-Aranha do Brooklyn.</p>
                        <button className="button-ingresso">Comprar ingresso</button>
                    </div>
                </div>
            </div>
        <Cards />
        <Footer />
        </>
    )

}

export default Home;