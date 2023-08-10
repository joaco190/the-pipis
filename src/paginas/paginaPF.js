import React from "react";

export default class PaginaPF extends React.Component{


    render(){
        return(

        <>
        <div className="container pb-4">

            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        ¿Cómo hago mi pedido?
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Para realizar tu pedido, puedes seguir estos pasos:
                            <ul>
                                <li>Visita nuestro sitio web y navega por nuestros productos./li</li>
                                <li>Selecciona los alimentos para mascotas que deseas comprar y añádelos a tu carrito de compras.</li>
                                <li>Procede al proceso de pago y proporciona la información necesaria, como dirección de envío y método de pago.</li>
                                <li>Revisa cuidadosamente tu pedido antes de confirmarlo y haz clic en "Realizar pedido" para finalizar la compra.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        ¿Cuánto tarda en llegar mi compra?
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        El tiempo de entrega puede variar dependiendo de tu ubicación y el servicio de envío que elijas. 
                        Por lo general, hacemos todo lo posible para procesar y enviar los pedidos en un plazo de 2 días hábiles. 
                        Una vez que el pedido ha sido enviado, recibirás un número de seguimiento para rastrear el progreso de tu paquete. 
                        Ten en cuenta que pueden existir retrasos imprevistos debido a condiciones climáticas adversas o problemas logísticos ajenos a nuestro control.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        ¿Qué hago si mi compra no llega?
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Si tu compra no llega en el tiempo estimado o tienes problemas con la entrega, te recomendamos seguir estos pasos:
                        <ul>
                            <li>Verifica la información de seguimiento proporcionada. Asegúrate de que la dirección de envío sea correcta y de que no haya problemas en el proceso de entrega.</li>
                            <li>Si observas que hay un retraso significativo en la entrega, ponte en contacto con nuestro equipo de atención al cliente. Proporciona los detalles de tu pedido y número de seguimiento para que podamos investigar y ayudarte a resolver el problema lo antes posible.</li>
                            <li>En caso de extravío del paquete, nos encargaremos de gestionar una solución adecuada, ya sea reembolsando tu compra o enviándote nuevamente los productos.</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        
        </>
        )
}
}