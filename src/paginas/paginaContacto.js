import React from "react";

export default class PaginaContacto extends React.Component{

    constructor(props){
        super(props);

        this.sumitted= this.sumitted.bind(this);
        this.changed=this.changed.bind(this);
    }

    sumitted(event){
        alert("Se envio el formulario de " + this.state.nombre);
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
            <div className="container bg-light rounded mb-3">
            <h2>Contacto</h2>
            <form onSubmit={this.sumitted}>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" className="form-control" onChange={this.changed}/>
                </div>
                <div className="form-group">
                    <label>Mensaje:</label>
                    <textarea className="form-control">
                    </textarea>
                </div>
                <br/>
                <button className="d-block mx-auto btn btn-danger">Enviar</button>
            </form>
            </div>

            </>
        )
}
}