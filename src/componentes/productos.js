import React from "react";

export default class Productos extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            escondido: true,
            buttonValue: "Ver más"
        };

        this.toggleEscondido = this.toggleEscondido.bind(this);

    }

    toggleEscondido(){
        this.setState(prevState =>({
            escondido: !prevState.escondido,
            buttonValue: prevState.escondido ? "Ver menos" : "Ver más"
        }))
    }
    render(){
        return(
            <div className="card productoimg">
            <img src={this.props.imgProducto} class="card-img-top" alt={this.props.nomProducto}/>
            <div className="card-body">
                <h5 classsName="card-title">{this.props.nomProducto} </h5>
                <p className="card-text">{this.props.descriProducto}</p>
                <button className="btn btn-danger" onClick={this.toggleEscondido}>{this.state.buttonValue}</button>
                <p class={"breakMyWords card card-text m-2 bg-warning-subtle " +(this.state.escondido ? " d-none" : "")}>{this.props.compleProducto}</p>
            </div>
            
            </div>
        )
}
}