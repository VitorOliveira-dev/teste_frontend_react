describe('Test Map Card', () => {

    it("Test if card exist is being rendered", ()=> {
        cy.visit("http://localhost:3000/mapas")
        cy.get('div[data-test="mapCard"]')
        .should('exist')
    })

    it("Test if map has a image", ()=> {
        cy.visit("http://localhost:3000/mapas")
        cy.get('div[data-test="mapImage"]')
        .find('img')
        .should('have.attr', 'src')
        .should('not.be.empty')
    })

    it("test if map button has a valid link", ()=> {
        cy.visit("http://localhost:3000/mapas")
        cy.get('div[data-test="mapCard"]')
        .should('exist')
        .find('a')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit(`http://localhost:3000/mapas${href}`)
        })
    })

    it("Check if page has 5 maps", () => {
        cy.visit("http://localhost:3000/mapas")
        cy.get('div[data-test="mapCard"]')
        .should('exist')
        .should('have.length',5)
    })
})