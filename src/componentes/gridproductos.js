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
                    descriProducto = "Excellent Smart Formula Perro Adulto 20 Kg"
                    compleProducto ="Pro Plan incorporó a su fórmula de alimentos balanceados la espirulina, componente que ayuda a proteger los sistemas inmune y digestivo de tu perro. Está hecho a base de carne de pollo, que proporciona un alto contenido de proteínas de alto valor biológico,
                     esenciales para su buena alimentación. Procura un balance óptimo de minerales para mantener sus huesos y dientes sanos y fuertes."/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                    <Productos
                    imgProducto ="./img/productos/alg2.webp"
                    nomProducto ="Alimento para gatos"
                    descriProducto = "Excellent Smart Gato Adulto Pollo Y Arroz 7.5 Kg"
                    compleProducto = "Excellent Cat Adult Smart es un alimento completo y balanceado a base de proteínas de alta calidad provenientes del pollo y el arroz como principales ingredientes. Ayuda a mantener un pH adecuado en la orina, el cual contribuye a impedir la formación de cálculos y cristales. Los ácidos activos grasos omega 3 y 6 aportan elasticidad a la piel y favorecen a un pelo sano y brillante. También las proteínas de pollo de alta digestibilidad garantizan el desarrollo de músculos fuertes y sanos."/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                    <Productos
                    imgProducto="./img/productos/alp2.jfif"
                    nomProducto="Alimento para perros"
                    descriProducto="Dog Chow S/ Colorante Adulto M/G X 21 Kg"
                    compleProducto="Dog Chow para perros adultos de razas medianas y grandes es un alimento balanceado que maximiza la calidad de vida de tu mascota. Equilibra la flora intestinal, promueve un pelaje brillante y contribuye a un buen desarrollo del cerebro y la visión. Nutrición especificamente diseñada para tu perro adulto mediano y grande de 1 a 7 años de edad, que ayuda a mejorar su calidad de vida de forma visible, con una receta sin colorantes."/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                    <Productos
                    imgProducto="./img/productos/alg1.jfif"
                    nomProducto="Alimento para gatos"
                    descriProducto="Cat Chow Adulto Pescado Y Pollo X 15 Kg"
                    compleProducto="Purina Cat Chow Defense Plus + es un alimento 100% balanceado y completo, con prebiótico natural, sin colorantes ni sabores artificiales, indicado para gato adulto a partir de 1 año de edad. Su fórmula refuerza la protección del tracto urinario y ayuda a reducir la acumulación de sarro, cuidando la piel y manteniendo su pelo saludable. Sabor a pescado."/>
                    </div>
                </div>
            <br/>
            </div>

            </>
        )
}
}