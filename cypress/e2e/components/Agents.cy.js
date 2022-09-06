describe('Test Agent Card', () => {

    it("Test if card exist is being rendered", ()=> {
        cy.visit("http://localhost:3000/agentes")
        cy.get('div[data-test="agentCard"]')
        .should('exist')
    })

    it("Test if agent has a image", ()=> {
        cy.visit("http://localhost:3000/agentes")
        cy.get('div[data-test="agentImage"]')
        .find('img')
        .should('have.attr', 'src')
        .should('not.be.empty')
    })

    it("test if agent button has a valid link", ()=> {
        cy.visit("http://localhost:3000/agentes")
        cy.get('div[data-test="agentCard"]')
        .should('exist')
        .find('a')
        .should('have.attr', 'href')
        .then((href) => {
            cy.visit(`http://localhost:3000/agentes${href}`)
        })
    })

    it("Check if page has 5 agents", () => {
        cy.visit("http://localhost:3000/agentes")
        cy.get('div[data-test="agentCard"]')
        .should('exist')
        .should('have.length',5)
    })
})