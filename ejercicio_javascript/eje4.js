// Obtener referencias a los elementos del documento HTML
const nuevaTarea = document.getElementById('nuevaTarea');
const annadirTarea = document.getElementById('annadirTarea'); // annadir --> añadir
const listaTareas = document.getElementById('listaTareas');

// Evento para agregar una tarea al hacer clic en el botón "Agregar"
annadirTarea.addEventListener('click', function() {
  const texto_tarea_nueva = nuevaTarea.value;
  if (texto_tarea_nueva.trim() !== '') {
    const item_en_lista = crear_item_en_lista(texto_tarea_nueva);
    listaTareas.appendChild(item_en_lista);
    nuevaTarea.value = '';
  }
});

// Función para crear un elemento de tarea
function crear_item_en_lista(texto_tarea_nueva) {
  const item_en_lista = document.createElement('li');
  item_en_lista.className = 'list-group-item d-flex align-items-center';
  item_en_lista.innerHTML = `
    <span class="flex-grow-1">${texto_tarea_nueva}</span>
    <button class="btn btn-success mr-2 complete-btn">Completado</button>
    <button class="btn btn-danger delete-btn">Eliminar</button>
  `;

// Evento para marcar como completada una tarea
const completar_btn = item_en_lista.querySelector('.complete-btn');
completar_btn.addEventListener('click', function() {
  item_en_lista.classList.toggle('completed');
});

  // Evento para eliminar una tarea
  const borrar_btn = item_en_lista.querySelector('.delete-btn');
  borrar_btn.addEventListener('click', function() {
    // Mostrar una alerta de confirmación antes de borrar
  if (window.confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
    item_en_lista.remove();
  }
  });

  return item_en_lista;
}