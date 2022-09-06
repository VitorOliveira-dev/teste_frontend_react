describe("Test Agent Page", () => {

    it("Test if data is coming from upstream by agent name", () => {
        cy.visit("http://127.0.0.1:3000/agentes/5f8d3a7f-467b-97f3-062c-13acf203c006")
        cy.get('h1[data-test="agentTitle"]')
        .should('exist')
        .invoke('text')
        .should('not.be.empty')
    })

    it("Test agent skills ", () =>{
        cy.visit("http://127.0.0.1:3000/agentes/5f8d3a7f-467b-97f3-062c-13acf203c006")
        cy.get('div[data-test="agentSkills"]')
        .should('exist')
        .should('have.length.to.be.greaterThan',0)
    })
})