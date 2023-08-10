import React from "react";

import Carousel from '../componentes/carousel';
import Gridproductos from '../componentes/gridproductos';


export default class PaginaInicio extends React.Component{


    render(){
        return(
            <>
            <div className="container bg-light">
            <Carousel/>

            <Gridproductos/>


            </div>
            </>
        )
}
}