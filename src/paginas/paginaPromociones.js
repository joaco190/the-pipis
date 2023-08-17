import React from "react";
import Carousel from '../componentes/carousel';

export default class PaginaPromociones extends React.Component{


    render(){
        return(
            <>
            <div className="container bg-light my-3 rounded text-center">
            <h1 className="text-center">Ofertas y Promociones</h1>
            <Carousel/>
            <br/>
            <img src="./img/promo.png" className="img-fluid " alt="promo"/>
            </div>
            </>
        )
}
}