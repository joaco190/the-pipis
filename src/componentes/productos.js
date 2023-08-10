import React from "react";

export default class Productos extends React.Component{

    render(){
        return(
            <div className="card productoimg">
            <img src={this.props.imgProducto} class="card-img-top" alt={this.props.nomProducto}/>
            <div className="card-body">
                <h5 className="card-title">{this.props.nomProducto} </h5>
                <p className="card-text">{this.props.descriProducto}</p>
                <a href="#" className="btn btn-primary">Ver más</a>
            </div>
            </div>
        )
}
}