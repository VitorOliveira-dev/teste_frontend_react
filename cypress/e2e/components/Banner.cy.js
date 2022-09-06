describe("Banner", () =>{
    it("check if banner image is valid", () => {
        cy.visit('http://localhost:3000/')
        cy.get('div[data-test="banner"]')
        .find('img')
        .should('have.attr', 'src')
        .should('not.be.empty')
    })
})