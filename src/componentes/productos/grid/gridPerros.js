import React from "react";
import Productos from "../../productos";
export default class GridPerros extends React.Component {

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
              compleProducto="Old Prince Novel es un alimento balanceado y completo para perros adultos de razas medianas y grandes. Completamente natural con: 0% de soja, 0% de tacc y 32% de proteínas compuestas de cordero y arroz integral, minimizando las probabilidades de alergias alimentarias y cutáneas. Sus ingredientes naturales favorece la salud bucal, reduce la intolerancia alimentaria, mejora la piel y el pelo."
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/perros/ali2.webp"
              nomProducto="Alimento para perros"
              descriProducto="Pro Plan Active Perro Mind 7+ Mediano Y Grande X 15 Kg"
              compleProducto="Pro Plan incorporó a su fórmula de alimentos balanceados la espirulina, componente que ayuda a proteger los sistemas inmune y digestivo de tu perro. Está hecho a base de carne de pollo, que proporciona un alto contenido de proteínas de alto valor biológico, esenciales para su buena alimentación. Procura un balance óptimo de minerales para mantener sus huesos y dientes sanos y fuertes."
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/perros/jug1.webp"
              nomProducto="Juguete para perros"
              descriProducto="Kong Classic Small"
              compleProducto="El Kong Classic está compuesto de goma natural roja, rebota bien y es perfecto para perros a los que les gusta masticar. Ideal para rellenar con bocados Kong. Disponible en seis tamaños: X-Pequeño, Pequeño, Mediano, Grande, X-Grande y XX-Grande."
            />
             
          </div>
           
          <div className="col-12 col-md-6 col-lg-6 col-xl-3">
              
            <Productos
              imgProducto="./img/productos/perros/jug2.webp"
              nomProducto="Juguete para perros"
              descriProducto="Ckuckit Tumble Bumper Large"
              compleProducto="El Kong Classic está compuesto de goma natural roja, rebota bien y es perfecto para perros a los que les gusta masticar. Ideal para rellenar con bocados Kong. Disponible en seis tamaños: X-Pequeño, Pequeño, Mediano, Grande, X-Grande y XX-Grande."
            />
             
          </div>
          </div>
        </div>
            <br />
      </>
    );
  }
}
