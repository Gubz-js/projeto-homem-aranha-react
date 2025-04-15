import React from "react";
import Header from '../../components/header/header'
import '../fotos/fotos.css'
import Footer from '../../components/footer/footer'

function Fotos() {
    return(
        <>
            <Header />
                <div className="main-container-fotos">
                    <div className="main-content-fotos">
                        <div className="foto a"></div>
                        <div className="foto b"></div>
                        <div className="foto c"></div>
                        <div className="foto d"></div>
                        <div className="foto e"></div>
                        <div className="foto f"></div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default Fotos;