describe('Prueba de contacto', () => {
    it('Los enlances de la pagina de contacto funcionan adecuadamente', () => {
        cy.visit('/');
        cy.get("footer section div a").each($a => {
            const message = $a.text();
            expect($a, message).to.have.attr("href").not.contain("undefined");
        });
    })
})