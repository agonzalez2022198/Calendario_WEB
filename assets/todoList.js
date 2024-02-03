let array = [];
let contador = 1;

function listar() {
    
    
    let mostrar = document.getElementById('contenedor');

    array.forEach(() => {

    });

    for (let i = 0; i < array.length; i++) {

        let palabraActual = array[i];

        let nuevoCodigo = `
            <ul>
                <li class="pending">
                    ${palabraActual}
                    <div class="btn-container">
                        <button class="btn">Actualizar</button>
                        <button class="btn">Eliminar</button>
                    </div>
                </li>
            </ul>`;

            

        mostrar.innerHTML += nuevoCodigo;
    }



}

function agregar() {
    var tarea = document.getElementById('new-task').value;


    array.push(tarea);

    listar();


}


