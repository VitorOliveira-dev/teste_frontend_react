describe("Test Weapon Page", () => {

    it("Test if data is coming from upstream by weapon name", () => {
        cy.visit("http://127.0.0.1:3000/armas/ae3de142-4d85-2547-dd26-4e90bed35cf7")
        cy.get('h1[data-test="weaponTitle"]')
        .should('exist')
        .invoke('text')
        .should('not.be.empty')
    })

    it("Test weapon damage ranges ", () =>{
        cy.visit("http://127.0.0.1:3000/armas/ae3de142-4d85-2547-dd26-4e90bed35cf7")
        cy.get('div[data-test="damageRanges"]')
        .should('exist')
        .should('have.length.to.be.greaterThan',0)
    })
})