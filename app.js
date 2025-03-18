// Lista para almacenar los nombres de los amigos
let amigos = [];
let resultadoVisible = false;

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido');
        return;
    }
    
    amigos.push(nombre);
    inputAmigo.value = '';
    
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    }
}

// Función para obtener un amigo aleatorio
function obtenerAmigoAleatorio() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return null;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    return amigos[indiceAleatorio];
}

// Función para realizar el sorteo y mostrar/ocultar el resultado
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    if (resultadoVisible) {
        // Si el resultado está visible, lo ocultamos
        resultado.innerHTML = '';
        resultadoVisible = false;
    } else {
        // Si el resultado está oculto, mostramos un nuevo sorteo
        const amigoSorteado = obtenerAmigoAleatorio();
        
        if (amigoSorteado) {
            resultado.innerHTML = `
                <li class="amigo-sorteado">
                    🎉 ¡Felicitaciones! Tu amigo secreto es: 
                    <strong>${amigoSorteado}</strong> 🎁
                </li>
            `;
            resultadoVisible = true;
        }
    }
}
