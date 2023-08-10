import React from "react";
import Productos from "../../productos";
export default class GridGatos extends React.Component {
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
              imgProducto="./img/productos/gatos/ali1.webp"
              nomProducto="Alimento para gatos"
              descriProducto="Excellent Smart Gato Adulto Pollo Y Arroz 7.5 Kg"
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/gatos/ali2.webp"
              nomProducto="Alimento para gatos"
              descriProducto="Pouch Pro Plan Wet Cat Adult Pollo X 85 Grs"
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/gatos/jug1.webp"
              nomProducto="Juguete para gatos"
              descriProducto="Tunel Gato Triple"
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/gatos/jug2.webp"
              nomProducto="Juguete para gatos"
              descriProducto="Juguete Varita Ventana ( Exhibidor 1 Unid)"
            />
             
          </div>
          </div>
        </div>
            <br />
      </>
    );
  }
}
