import {objeto_ventas} from './objeto_ventas.js';

LoadVentas();

function LoadVentas(){
    let cont = 1;
    const elemento = document.getElementById('venta');
    let doc = `<h2>Propiedades en Venta</h2>
                <div class="row">`

    for (let i = 0; i < objeto_ventas.length; i++){
        doc += `<div class="col-md-4 mb-4">
                <div class="card">
            <img src="${objeto_ventas[i].src}" class="card-img-top" alt="${objeto_ventas[i].nombre}" />
            <div class="card-body">
                <h5 class="card-title">
                    ${objeto_ventas[i].nombre}
                </h5>
                <p class="card-text">
                    ${objeto_ventas[i].descripcion}
                </p>
                <p>
                    <i class="fas fa-map-marker-alt"></i> 123 Main Street,
                    ${objeto_ventas[i].ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${objeto_ventas[i].habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> 2 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${formatearNumero(objeto_ventas[i].costo)}</p>
                <p class="text-danger">`
                if (objeto_ventas[i].smoke === true)  {
                    doc += `<p class="text-success">
                            <i class="fas fa-smoking"></i> Permitido fumar
                            </p>`
                }else{
                    doc += `<p class="text-danger">
                            <i class="fas fa-smoking-ban"></i> No se permite fumar
                            </p>`
                }

                if (objeto_ventas[i].pets === true)  {
                    doc += `<p class="text-success">
                            <i class="fas fa-paw"></i> Mascotas permitidas
                            </p>`
                }else{
                    doc += `<p class="text-danger">
                            <i class="fas fa-ban"></i> No se permiten mascotas
                            </p>`        
                }
            doc +=`</div>
                    </div>
                    </div>`
                    
                    if (cont % 3 === 0 && cont < objeto_ventas.length){
                         doc +=`</div>
                         <div class="row">` 
                     } 

                     cont++;
    }

        doc += `</div>`

        elemento.innerHTML = doc;
}

//Separador de miles
function formatearNumero(numero){
    return new Intl.NumberFormat("es-CL").format(numero);
}