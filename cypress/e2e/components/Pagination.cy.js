describe("Test Pagination", () =>{
    it("check if there is at least 1 page", () => {
        cy.visit('http://localhost:3000/agentes')
        cy.get('ul[data-test="pages"]')
        .should('exist')
        .should('have.length.to.be.greaterThan', 0)
    })
})