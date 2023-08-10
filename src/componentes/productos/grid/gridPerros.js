import React from "react";
import Productos from "../../productos";
export default class GridPerros extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="container m-2 d-flex justify-content-center">
        <div className="row container-center m-5">
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/perros/ali1.webp"
              nomProducto="Alimento para perro"
              descriProducto="Excellent Smart Formula Perro Adulto 20 Kg"
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/perros/ali2.webp"
              nomProducto="Alimento para perros"
              descriProducto="Pro Plan Active Perro Mind 7+ Mediano Y Grande X 15 Kg"
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/perros/jug1.webp"
              nomProducto="Juguete para perros"
              descriProducto="Kong Classic Small"
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/perros/jug2.webp"
              nomProducto="Juguete para perros"
              descriProducto="Ckuckit Tumble Bumper Large"
            />
             
          </div>
          </div>
        </div>
            <br />
      </>
    );
  }
}
