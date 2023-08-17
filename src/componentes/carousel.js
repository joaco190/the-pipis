import React from "react";

export default class Carousel extends React.Component{


    render(){
        return(
            <div id="carouselExampleAutoplaying" className="carousel slide p-2 m-2" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="img/bannerUno.jpg" className="d-block w-100" alt="bannerUno"/>
                </div>
                <div className="carousel-item">
                <img src="img/bannerDos.jpg" className="d-block w-100" alt="bannerDos"/>
                </div>
                <div className="carousel-item">
                <img src="img/bannerTres.jpg" className="d-block w-100" alt="bannerTres"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        )
}
}