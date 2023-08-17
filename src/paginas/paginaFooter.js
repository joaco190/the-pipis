import React from "react";
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from "react-icons/ai"


export default class PaginaFooter extends React.Component{

    constructor(props){

        super(props);
        this.sumitted= this.sumitted.bind(this);
        this.changed=this.changed.bind(this);
    }

    sumitted(event){
        alert("Su mail " + this.state.nombre + " ha sido registrado con éxito!");
        event.preventDefault();
    }

    changed(event){
        this.setState({
            nombre: event.target.value
        })
    }

    render(){
        return(
            <>
            
            <div className="container-flex p-1 text-center fs-4 text-bg-light">
            <div className="container">
            <div className="row fs-6">
            <div className="col-2"></div>
            <div className="col-8">
            <form className="form-inline" onSubmit={this.sumitted}>
                <div className="form-group">
                    <label>Suscribite para recibir nuestras novedades: </label>
                    <input type="email"  className="form-inline mx-1"  placeholder="Ingresa tu mail" onChange={this.changed}/>
                    <button className="btn btn-danger mx-2">Enviar</button>
                </div>
            </form>
            </div>
            <div className="col-2"></div>
            </div>
            </div>


                Seguinos en nuestras redes
                <br/>
                <AiFillFacebook/>
                <AiFillInstagram/>
                <AiFillTwitterSquare/>
            </div>

            
            
            </>
        )
}
}