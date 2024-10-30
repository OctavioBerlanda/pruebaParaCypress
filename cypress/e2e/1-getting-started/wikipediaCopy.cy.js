context('Pruebas en Wikipedia', () => {
  describe('Búsqueda en Wikipedia', () => {
    it('Buscar "Cypress", navegar al inicio', () => {
      // Visita la página principal de Wikipedia
      cy.visit('https://en.wikipedia.org/');
      // Pausa para ver la ejecución paso a paso

      cy.get('a.search-toggle').click();

      cy.get('input[name="search"]', { timeout: 10000 })
        .should('be.visible')
        .type('Cypress (software){enter}'); // Escribe "Cypress" y presiona Enter

      // Pausa para inspeción

      // Verificar que se haya cargado la página de resultados
      cy.url().should('include', 'Cypress');
      cy.contains('h1', 'Cypress').should('exist');


      cy.get('img.mw-logo-wordmark').then(($el) => {
        $el.css({
          'border': '2px solid red',
          'background-color': 'yellow',
          'transition': 'all 0.5s ease',
        });
      });

      // Realiza el clic en el logo después de resaltarlo
      cy.get('img.mw-logo-wordmark').click()



      cy.get('li#pt-login-2 a').then(($el) => {
        $el.css({
          'border': '2px solid red',
          'background-color': 'yellow',
          'transition': 'all 0.5s ease',
        });
      });
      cy.get('li#pt-login-2 a').click();

      // Esperar que la página de inicio de sesión cargue
      cy.url().should('include', 'Special:UserLogin'); // Verifica que estamos en la página de login

      // Completar los campos de inicio de sesión (asegurate de usar credenciales válidas)
      cy.get('input[name="wpName"]').type('Octa b123'); // Ingresa el nombre de usuario

      cy.get('input[name="wpPassword"]').type('octa2004'); // Ingresa la contraseña

      // Hacer clic en el botón "Acceder"
      cy.get('button#wpLoginAttempt').click();

      // Verificar que se haya iniciado sesión exitosamente
      cy.url().should('not.include', 'Special:UserLogin'); // Asegura que ya no estamos en la página de login
      cy.get('#p-vector-user-menu-userpage').should('exist'); // Verifica que el menú del usuario está presente
    });
  });
});
