describe('Test Weapon Card', () => {

    it("Test if card exist is being rendered", ()=> {
        cy.visit("http://localhost:3000/armas")
        cy.get('div[data-test="weaponCard"]')
        .should('exist')
    })

    it("Test if weapon has a image", ()=> {
        cy.visit("http://localhost:3000/armas")
        cy.get('div[data-test="weaponImage"]')
        .find('img')
        .should('have.attr', 'src')
        .should('not.be.empty')
    })

    it("test if weapon button has a valid link", ()=> {
        cy.visit("http://localhost:3000/armas")
        cy.get('div[data-test="weaponCard"]')
        .should('exist')
        .find('a')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit(`http://localhost:3000/armas${href}`)
        })
    })

    it("Check if page has 5 weapons", () => {
        cy.visit("http://localhost:3000/armas")
        cy.get('div[data-test="weaponCard"]')
        .should('exist')
        .should('have.length',5)
    })
})