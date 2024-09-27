context('Pruebas en Mercado Libre', () => {
  // Antes de cada prueba, visitamos el sitio principal de Mercado Libre
  beforeEach(() => {
    cy.visit('https://www.mercadolibre.com.ar')
  });


  it('Buscar celulares y añadir el primero al carrito', () => {
    // Buscar "celulares" en la barra de búsqueda
    cy.get('input[name="as_word"]').type('celulares{enter}'); // Encuentra la barra de búsqueda, escribe "celulares" y presiona Enter

    // Esperar que se carguen los resultados y seleccionar el primer producto
    cy.get('.poly-card__portada').first().click(); // Encuentra el primer resultado de la búsqueda y haz clic

    // Asegurarse de que el producto cargue correctamente
    cy.url().should('include', '/item'); // Verificar que estamos en la página de detalles del producto

    // Intentar añadir el producto al carrito
    cy.contains('Comprar ahora').click(); // Busca y hace clic en el botón "Comprar ahora" (el texto podría variar según el producto)

    // Verificar si llegamos a la página de compra o si el producto fue añadido al carrito
    cy.url().should('include', '/checkout'); // Verifica si llegamos a la página de checkout

    cy.pause();
  });
});
