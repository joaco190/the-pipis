import React from "react";
import { Link } from "react-router-dom";
import { FaDog} from "react-icons/fa";
import {GiHollowCat, GiPerspectiveDiceSixFacesRandom} from "react-icons/gi";


export default class Menu extends React.Component{

    render(){
        return(
                    <div className="container-flex">
                        <div className="bg-body-tertiary text-center">
                            
                            
                            
                            
                            
                            <span className="titulo">Los Pipis</span><br/>
                            <img className="logo img-thumbnail" alt="logo" src="./img/logo.png"/>
                            
                        </div>
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                <div className="container-fluid">
                                    <span></span>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                            <Link to ="/" className="nav-link active" aria-current="page">Inicio</Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link to="" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Mascota
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="/producto-perros" className="dropdown-item"><FaDog/>  Perros</Link></li>
                                                    <li><Link to="/producto-gatos" className="dropdown-item"><GiHollowCat/>  Gatos</Link></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/promociones" className="nav-link">Promociones</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/quienes-somos" className="nav-link" >Quienes somos</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/preguntas-frecuentes" className="nav-link" >Preguntas frecuentes</Link>
                                            </li>
                                            <li clasNames="nav-item">
                                                <Link to="/contacto" className="nav-link" >Contacto</Link>
                                            </li>
                                            <li clasNames="nav-item">
                                                <Link to="/perritos" className="nav-link" >Perritos randoms <GiPerspectiveDiceSixFacesRandom/></Link>
                                            </li>
                                            </ul>
                                        <form className="d-flex" role="search">
                                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                                            <button className="btn btn-danger" type="submit">Buscar</button>
                                        </form>
                                    </div>
                                </div>
                        </nav>
                    <br></br>
                    </div>

        )
}
}