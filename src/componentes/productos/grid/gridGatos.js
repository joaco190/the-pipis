import React from "react";
import Productos from "../../productos";
export default class GridGatos extends React.Component {

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
              compleProducto="Excellent Cat Adult Smart es un alimento completo y balanceado a base de proteínas de alta calidad provenientes del pollo y el arroz como principales ingredientes. Ayuda a mantener un pH adecuado en la orina, el cual contribuye a impedir la formación de cálculos y cristales. Los ácidos activos grasos omega 3 y 6 aportan elasticidad a la piel y favorecen a un pelo sano y brillante. También las proteínas de pollo de alta digestibilidad garantizan el desarrollo de músculos fuertes y sanos."
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/gatos/ali2.webp"
              nomProducto="Alimento para gatos"
              descriProducto="Pouch Pro Plan Wet Cat Adult Pollo X 85 Grs"
              compleProducto="Es un delicioso alimento húmedo para gatos adultos con sabor a pollo que colabora al desarrollo de una estructura corporal plena y a un sistema inmune fortalecido. Sus ingredientes, sabor y consistencia resultan de una aceptación excepcional. Desarrollo de estructura corporal plena, salud dermatológica y sistema inmune fortalecido. Contiene proteína de pollo para mantenimiento de la masa muscular. Aporte óptimo vitaminas y minerales para piel y pelo sanos."
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/gatos/jug1.webp"
              nomProducto="Juguete para gatos"
              descriProducto="Tunel Gato Triple"
              compleProducto="Este túnel para gatos de tres salidas permitirá que tu mascota juegue, se divierta durante horas, tenga su espacio y pueda descansar. Este accesorio es totalmente seguro y se pliega para poder almacenarlo y transportarlo. Medidas: 1,30 x 50 cm."
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/gatos/jug2.webp"
              nomProducto="Juguete para gatos"
              descriProducto="Juguete Varita Ventana ( Exhibidor 1 Unid)"
              compleProducto="Sin descripción adicional"
            />
             
          </div>
          </div>
        </div>
            <br />
      </>
    );
  }
}
