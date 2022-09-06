describe("Test Map Page", () => {

    it("Test if data is coming from upstream by map name", () => {
        cy.visit("http://127.0.0.1:3000/mapas/b529448b-4d60-346e-e89e-00a4c527a405")
        cy.get('h1[data-test="mapTitle"]')
            .should('exist')
            .invoke('text')
            .should('not.be.empty')
    })

})
