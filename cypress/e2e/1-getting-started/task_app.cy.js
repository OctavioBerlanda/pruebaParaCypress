describe('Task App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.contains('Tasks');
  })

  it('task form can create a task', () => {
    cy.get('a').contains('Create task').click();
    cy.get('input[name="title"]')
      .type('Futbol 5 con amigos');
    cy.get('textarea[name="description"]')
      .type('Equipo: pupi lauta renzo alejo mati');
    cy.get('li').contains('Home').click();
    cy.get('h2').contains('Futbol 5 con amigos');
    cy.get('p').contains('Equipo: pupi lauta renzo alejo mati');
  })

  it('task form can edit a task', () => {
    cy.get('button').eq(1).click(); // Selecciona el segundo botón (índice empieza en 0)
    cy.get('input:first').clear().type('Hacer proof of concept');
    cy.get('textarea[name="description"]')
      .clear() // Borra el contenido actual del textarea
      .type('Hay que hacer la proof of concept con cypress');
    cy.get('button').contains('Save').click();
    cy.get('button').eq(5).contains('Toggle Task').click();
  })

  it('should mark task as completed', () => {
    cy.get('button').contains('Toggle Task').click();
    cy.contains('span', '✅'); // Para verificar una tarea completada
    cy.contains('span', '❌'); // Para verificar una tarea no completada
  });

});