const alumnos = [
    {nombre: "Rodrigo", paterno: "Lopez", materno: "Escobedo",matricula: "2049807"},
    {nombre: "Regina", paterno: "Hernandez", materno: "Rodriguez",matricula: "20006460"},
    {nombre: "Brandon", paterno: "Quezada", materno: "Gamez",matricula: "2062402"},
    {nombre: "Carlos", paterno: "Valerio", materno: "Rios",matricula: "1234567"},
    {nombre: "Diego", paterno: "Torres", materno: "Azua",matricula: "7891234"},
    {nombre: "Eliud", paterno: "Sanchez", materno: " Garcia",matricula: "1478523"}
];

const lista = document.getElementById("listaAlumnos");

// Crear la lista inicial
alumnos.forEach(function(elemento){
  let li = document.createElement("li");
  li.textContent = `${elemento.nombre} ${elemento.paterno} ${elemento.materno} ${elemento.matricula}`;
  lista.appendChild(li);
});

const input = document.getElementById("filtroAlumno");
const elementosBase = Array.from(lista.getElementsByTagName('li'));

// Filtrar al escribir
input.addEventListener('input', function(e){
  const busqueda = e.target.value.toLowerCase();
  listaFiltrada(busqueda);
});

function listaFiltrada(busqueda){
  lista.innerHTML = '';
  
  const elementosFiltrados = elementosBase.filter(item => {
    return item.textContent.toLowerCase().startsWith(busqueda); 
  });

  elementosFiltrados.forEach(item => {
    lista.appendChild(item);
  });
}

document.getElementById("botonBusqueda", onclick = function(){
    const filtro = document.getElementById("filtroAlumno").value.toLowerCase();
    const tipoFiltro = document.getElementById("tipoFiltro").value;
    let resultados = [];

    if(filtro.trim() === ""){
        listaFiltrada(alumnos);
        return;
    }

    resultados = alumnos.filter(a => a[tipoFiltro].toLowerCase().includes(filtro));

    const lista = document.getElementById("listaAlumnos");
    lista.innerHTML = 
        resultados.length > 0
            ? resultados
                .map(
                    a =>
                        `<li><strong>${a.nombre} ${a.paterno} ${a.materno}</strong><br>Matricula: ${a.matricula}</li>`
                )
                .join("")
            : "<li>No se encontraron coincidencias</li>";
});