// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const regex = /^(?!.*(.)\1{2,})[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/;
    
    if (nombre === "" || !regex.test(nombre)) {
        alert("Por favor ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

// Función para actualizar la lista de amigos en la UI
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un único amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 personas para jugar.");
        return;
    }
    let seleccionado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultados(seleccionado);
}

// Función para mostrar el resultado en la UI
function mostrarResultados(seleccionado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${seleccionado}`;
    resultado.appendChild(li);
}
