import React from "react";
import Productos from './productos';

export default class Gridproductos extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            escondido: false
        }

        this.toggleEsconder = this.toggleEsconder.bind(this);
    }

    toggleEsconder(){
        this.setState(prevState =>({
            escondido: !prevState.escondido
        }))
    }


    render(){
        return(
            <>
            <div className="container m-2 d-flex justify-content-center">
                <div className="position-absolute start-50 translate-middle">
                    <button className="btn btn-secondary btn-sm mb-5" onClick={this.toggleEsconder}>Esconder productos</button>
                </div>
                <div className={"row container-center m-5 "+ (this.state.escondido ? "d-none" : "")}>
                    <div className="col-12 col-md-6 col-lg-3">
                    <Productos
                    imgProducto ="./img/productos/alp1.png"
                    nomProducto ="Alimento para perro"
                    descriProducto = "Excellent Smart Formula Perro Adulto 20 Kg"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                    <Productos
                    imgProducto ="./img/productos/alg2.webp"
                    nomProducto ="Alimento para gatos"
                    descriProducto = "Excellent Smart Gato Adulto Pollo Y Arroz 7.5 Kg"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                    <Productos
                    imgProducto="./img/productos/alp2.jfif"
                    nomProducto="Alimento para perros"
                    descriProducto="Dog Chow S/ Colorante Adulto M/G X 21 Kg"/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                    <Productos
                    imgProducto="./img/productos/alg1.jfif"
                    nomProducto="Alimento para gatos"
                    descriProducto="Cat Chow Adulto Pescado Y Pollo X 15 Kg"/>
                    </div>
                </div>
            <br/>
            </div>

            </>
        )
}
}