describe('Test Main Menu', () => {

    it("test if agents button has a valid link", ()=> {
        cy.visit("http://localhost:3000/")
        cy.get('div[data-test="agentsCard"]')
        .should('exist')
        .find('a')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit(`http://localhost:3000${href}`)
        })
    })

    it("test if weapons button has a valid link", ()=> {
        cy.visit("http://localhost:3000/")
        cy.get('div[data-test="weaponsCard"]')
        .should('exist')
        .find('a')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit(`http://localhost:3000${href}`)
        })
    })

    it("test if maps button has a valid link", ()=> {
        cy.visit("http://localhost:3000/")
        cy.get('div[data-test="mapsCard"]')
        .should('exist')
        .find('a')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit(`http://localhost:3000${href}`)
        })
    })

})
