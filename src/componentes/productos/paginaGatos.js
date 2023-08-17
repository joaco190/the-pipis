import React from "react";
import GridGatos from "./grid/gridGatos";
import './esconder.css';



export default class PaginaGatos extends React.Component{


    render(){
        return(
            <>
            <div className="container my-3 bg-light">
            <div className="position-absolute start-50 translate-middle">
                    <button className="btn btn-secondary btn-sm mb-5 btn-esconder" onClick={this.props.toggleEsconderFiltros}>Esconder filtros</button>
                </div>
                    <div className='row'>
                    <div className={"col-12 col-lg-2 pb-2 bg-secondary" + (this.props.escondidoFiltros ? " d-none" : "")}>
                        <h4 className="text-center mt-2">Filtros</h4>
                        <div className={"accordion" + (this.props.escondidoFiltros ? " d-none" : "")}id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Categoria
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" onClick={this.props.toggleEsconderAlimento}  type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                                Alimentos
                                            </label>
                                        </div>
                                        <div className="form-check">
                                                <input className="form-check-input" onClick={this.props.toggleEsconderJuguete} type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    Juguetes
                                                </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Marca
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Pro Plan
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Purina
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Peso
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    10 KG
                                                </label>
                                        </div>
                                        <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    20 KG
                                                </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                    </div>
                    <div className="col-12 col-lg-10">
                        <GridGatos escondidoAlimento={this.props.escondidoAlimento} escondidoJuguete ={this.props.escondidoJuguete}/>
                    </div>
                    </div>
                </div>
        </>
        )
}
}