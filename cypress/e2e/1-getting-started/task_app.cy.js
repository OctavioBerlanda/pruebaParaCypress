describe('Task App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
    cy.contains('Tasks');
  })

  it('task form can do gets', () => {
    cy.get('button').eq(1).click(); // Selecciona el segundo botón (índice empieza en 0)
    cy.get('input:first').clear().type('Probar aplicación con cypress');
    cy.get('textarea[name="description"]')
      .clear() // Borra el contenido actual del textarea
      .type('Hay que probar aplicación con Cypress');
    cy.get('button').contains('Save').click();
    cy.get('button').eq(5).contains('Toggle Task').click();
    // cy.get('button').eq(3).contains('Delete').click();
  })

  it('task form can create a task', () => {
    cy.get('a').contains('Create task').click();
    cy.get('input[name="title"]')
      .type('Futbol 5 con amigos');
    cy.get('textarea[name="description"]')
      .type('Equipo: pupi lauta renzo alejo mati');
    cy.get('button').contains('Save').click();
  })

});