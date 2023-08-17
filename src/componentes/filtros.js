import React from "react";
import GridGatos from "./productos/grid/gridGatos";
import PaginaGatos from "./productos/paginaGatos";

export default class Filtros extends React.Component{

        constructor(props){
        super(props);
        this.state= {
            escondidoFiltros: false,
            escondidoAlimento: false,
            escondidoJuguete: false,
            escondidoMarca: false,
            escondidoPeso: false,
        }

        this.toggleEsconderFiltros = this.toggleEsconderFiltros.bind(this);
        this.toggleEsconderAlimento = this.toggleEsconderAlimento.bind(this);
        this.toggleEsconderJuguete = this.toggleEsconderJuguete.bind(this);
        this.toggleEsconderMarca = this.toggleEsconderMarca.bind(this);
        this.toggleEsconderPeso = this.toggleEsconderPeso.bind(this);

    }

    toggleEsconderFiltros() {
        console.log("funciona filtro")
        this.setState(prevState => ({
            escondidoFiltros: !prevState.escondidoFiltros
        }));
    }

    toggleEsconderAlimento() {
        console.log("funciona alimento")
        this.setState(prevState => ({
            escondidoAlimento: !prevState.escondidoAlimento
        }));
    }
    toggleEsconderJuguete() {
        console.log("funciona juguete")
        this.setState(prevState => ({
            escondidoJuguete: !prevState.escondidoJuguete
        }));
    }
    toggleEsconderMarca() {
        this.setState(prevState => ({
            escondidoMarca: !prevState.escondidoMarca
        }));
    }
    toggleEsconderPeso() {
        this.setState(prevState => ({
            escondidoPeso: !prevState.escondidoPeso
        }));
    }
    render(){
        return(
        <>
        <PaginaGatos
            toggleEsconderAlimento={this.toggleEsconderAlimento}
            toggleEsconderJuguete={this.toggleEsconderJuguete}
            toggleEsconderFiltros={this.toggleEsconderFiltros}
            toggleEsconderMarca={this.toggleEsconderMarca}
            toggleEsconderPeso={this.toggleEsconderPeso}
            escondidoFiltros={this.state.escondidoFiltros}

            />
        <GridGatos
        toggleEsconderAlimento={this.toggleEsconderAlimento}
        toggleEsconderJuguete={this.toggleEsconderJuguete}
        toggleEsconderFiltros={this.toggleEsconderFiltros}
        escondidoAlimento={this.state.escondidoAlimento}
        escondidoJuguete={this.state.escondidoJuguete}/>
        </>
        )
    }
}