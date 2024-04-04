
const personasOficios = [
   {
    nombre: "Cristhian Paquirachin",
    oficio: "Ingeniero de Sistemas"
   },
   {
    nombre: "Jonatan Arzapalo",
    oficio: "Ingeniero Electronico"
   },
   {
    nombre: "Jorge Portocarrero",
    oficio: "Administrador de Empresas"
   },   {
    nombre: "Ariam Pacheco",
    oficio: "Atención al Cliente"
   },   {
    nombre: "Marcial Zegarra",
    oficio: "Capacitador"
   },
];

const personasElement = document.getElementById("listapersonas");

function writePersona() {
    let contenido = "";
    personasOficios.forEach(persona => {
        const template = `
            <div class="persona">
                <div class="data">
                <h4>${persona.nombre}</h4>
                <h4>${persona.oficio}</h4>
                </div>
                <button class="btn" onclick="contratar('${persona.nombre}')">Contratar</button>            
                </div>
        `;
        contenido = contenido + template;
    });
    personasElement.innerHTML = contenido;

}

function contratar(nombre) {
    Swal.fire({
        title: 'Contratar',
        text: `¿Estás seguro de contratar a ${nombre}?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('¡Contratado!', `${nombre} ha sido contratado.`, 'success');
        }
    });
}
writePersona();