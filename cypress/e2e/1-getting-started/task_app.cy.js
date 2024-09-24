describe('Task App', () => {
  // Define el conjunto de pruebas para la "Task App".
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    // Antes de cada prueba, visita la URL de la aplicación (corriendo en localhost en el puerto 5173).
    cy.contains('Tasks');
    // Verifica que la página contiene el texto 'Tasks', asegurando que la página está cargada correctamente.
    cy.wait(2000); // Pausa de 2 segundos
  });

  it('task form can create a task', () => {
    // Define una prueba para verificar si se puede crear una tarea.
    cy.get('a').contains('Create task').click();
    // Encuentra el enlace (etiqueta <a>) que contiene el texto 'Create task' y hace clic en él.
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('input[name="title"]')
      .type('Futbol 5 con amigos');
    // Encuentra el campo de entrada con el atributo name="title" y escribe 'Futbol 5 con amigos'.
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('textarea[name="description"]')
      .type('Equipo: pupi lauta renzo alejo mati');
    // Encuentra el área de texto (textarea) con el atributo name="description" y escribe la descripción del equipo.
    cy.get('button').contains('Save').click();
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('li').contains('Home').click();
    // Encuentra el elemento de la lista (li) que contiene el texto 'Home' y hace clic en él para volver a la página principal.
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('h2').contains('Futbol 5 con amigos');
    // Verifica que existe un encabezado <h2> que contiene el texto 'Futbol 5 con amigos', confirmando que la tarea fue creada.
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('p').contains('Equipo: pupi lauta renzo alejo mati');
    // Verifica que existe un párrafo <p> que contiene la descripción de la tarea creada.
  });

  it('task form can edit a task', () => {
    // Define una prueba para verificar si se puede editar una tarea.
    cy.get('button').eq(1).click();
    // Encuentra el segundo botón (índice 1, ya que los índices empiezan en 0) y hace clic en él, posiblemente para editar una tarea existente.
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('input:first').clear().type('Hacer proof of concept');
    // Encuentra el primer campo de entrada en el formulario, lo borra y escribe 'Hacer proof of concept'.
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('textarea[name="description"]')
      .clear()
      .type('Hay que hacer la proof of concept con cypress');
    // Encuentra el área de texto (textarea) con name="description", lo borra y escribe una nueva descripción.
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('button').contains('Save').click();
    // Encuentra el botón que contiene el texto 'Save' y hace clic en él para guardar los cambios.
    cy.wait(2000); // Pausa de 2 segundos
    cy.get('button').eq(5).contains('Toggle Task').click();
    // Encuentra el sexto botón (índice 5) que contiene el texto 'Toggle Task' y hace clic para alternar el estado de la tarea.
  });

  it('should mark task as completed', () => {
    // Define una prueba para verificar si se puede marcar una tarea como completada.
    cy.get('button').contains('Toggle Task').click();
    // Encuentra el botón que contiene el texto 'Toggle Task' y hace clic en él para marcar la tarea como completada o incompleta.
    cy.wait(2000); // Pausa de 2 segundos
    cy.contains('span', '✅');
    // Verifica que un <span> contiene el símbolo de tarea completada '✅'.
    cy.wait(2000); // Pausa de 2 segundos
    cy.contains('span', '❌');
    // Verifica que un <span> contiene el símbolo de tarea no completada '❌', sugiriendo que la tarea puede alternarse.
  });

  it('should delete a task', () => {
    // Define una prueba para verificar si se puede eliminar una tarea.
    cy.get('button').contains('Delete').click();
    // Encuentra el botón que contiene el texto 'Delete' y hace clic en él para eliminar la tarea.
    cy.wait(2000); // Pausa de 2 segundos
  });
});
