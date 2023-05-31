describe('The Login Page', () => {
    it('sets auth cookie when logging in via form submission', function () {
        // destructuring assignment of the this.currentUser object
        const { username, password } = ["briandorantes@hotmail.com",]

        cy.visit('/login')

        cy.get('input[name=email]').type(username)

        // {enter} causes the form to submit
        cy.get('div input[name=password]').type(`${password}{enter}`)

        // we should be redirected to /dashboard
        cy.url().should('include', '/')

    })
})
