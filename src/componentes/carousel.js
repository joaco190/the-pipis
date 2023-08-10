import React from "react";

export default class Carousel extends React.Component{


    render(){
        return(
            <div id="carouselExampleAutoplaying" class="carousel slide p-2 m-2" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="img/bannerUno.jpg" class="d-block w-100" alt="bannerUno"/>
                </div>
                <div class="carousel-item">
                <img src="img/bannerDos.jpg" class="d-block w-100" alt="bannerDos"/>
                </div>
                <div class="carousel-item">
                <img src="img/bannerTres.jpg" class="d-block w-100" alt="bannerTres"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
        )
}
}