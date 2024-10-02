context('Pruebas en Wikipedia', () => {
  describe('Búsqueda en Wikipedia', () => {
    it('Buscar "Cypress" y verificar la carga de la página', () => {
      // Visita la página principal de Wikipedia
      cy.visit('https://www.wikipedia.org/');

      // Esperar que el campo de búsqueda sea visible y escribir "Cypress"
      cy.get('input#searchInput', { timeout: 10000 })
        .should('be.visible')
        .type('Cypress{enter}'); // Escribe "Cypress" y presiona Enter

      // Verifica que se ha cargado la página de resultados
      cy.url().should('include', 'Cypress');

      // Haz clic en el primer resultado que contiene el enlace al artículo de Cypress
      cy.get('.mw-search-result-heading a') // Selecciona el enlace dentro de los resultados
        .first() // Selecciona el primer enlace que aparece
        .click();

      // Verifica que la nueva página tiene el título esperado
      cy.get('h1').should('contain', 'Cypress Hills (Brooklyn)');
    });
  });
});