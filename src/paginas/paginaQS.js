import React from "react";

export default class PaginaQS extends React.Component{


    render(){
        return(
            <>
            <div className="container bg-light rounded">
                <div className="row mb-3">
                    <div className="col-2"></div>
                    <div className="col-8">
                    <h2>Quienes somos?</h2>
                    <br/>
                    <h4>Hace más de 30 años nos dedicamos al cuidado de las mascotas</h4>
                    <br/>
                    <h5>Nuestra visión</h5>
                    <p>Las mascotas son nuestra pasión. Trabajamos todos los días para mejorar su calidad de vida,
                         como así también la relación con sus tutores mediante el traspaso de información útil y la recomendación de productos adecuados.
                    </p>
                    <br/>
                    <h5>Nuestra misión</h5>
                    <p>Lograr que nuestra comunidad comparta la misma pasión que nosotros por las mascotas y, de esta forma, seguir fomentando el cuidado de las mismas. 
                        Continuar brindando la mejor atención por medio de personal capacitado para informar y cubrir las necesidades del cliente y su mascota con productos de primera calidad.
                    </p>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
            </>
        )
}
}