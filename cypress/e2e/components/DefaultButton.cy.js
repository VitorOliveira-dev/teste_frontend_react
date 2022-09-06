describe("Default Button", () =>{
    it("check if default button has url", () => {
        cy.visit('http://localhost:3000/agentes')
        cy.get('div[data-test="defaultButtonContainer"]')
        .find('a')
        .should('have.attr', 'href')
        .should('not.be.empty')
    })
})