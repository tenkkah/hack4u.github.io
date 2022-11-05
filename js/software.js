window.onload = function () {
    cargarCursosSoftware();
    mostrarUsuarioLogueado();

}

//Variable global donde almacenamos la lista de Cursos de Software obtenidas del JSON
var listaCursos = [];

//Funcion para cargar los cursos de Ciberseguridad
function cargarCursosSoftware() {
    $.get("/js/cursos.json", {}, (resultado) => {
        listaCursos = resultado;
        pintarCursos(resultado.software,"contenidoSoftware");
    });
}

// function pintarCursosSoftware(lista) {
//     lista.forEach(resultado => {
//         var texto =
//             `<div class="card" style="width: 18rem;">
//             <img class="card-img-top" src="${resultado.fotoCurso}" alt="Card image cap" style="margin-top:2em;">
//             <div class="card-body">
//               <h5 class="card-title">${resultado.titulo}</h5>
//               <hr>
//               <p class="card-text" style="text-align:center";>${resultado.autor}</p>
//               <p class="card-text" style='visibility:hidden; display:none;'>${resultado.id}</p>
//               <p class="card-text">${resultado.lecciones}</p>
//               <p class="card-text">${resultado.horas}</p>
//              <button class="btnInscribirse" type="button" onclick="inscribirse(event)">Inscribirse</button>
//             </div>
//         </div>`;

//         document.getElementById("contenidoSoftware").innerHTML += texto;
//     });
// }

