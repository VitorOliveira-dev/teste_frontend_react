describe('Test SearchBar and Dropdown', () => {

    it("Test if searchbar exist is being rendered", () => {
        cy.visit("http://localhost:3000/")
        cy.get('input[data-test="searchBar"]')
            .should('exist')
    })

    it("Test if input is empty and dropdown filled", () => {
        cy.visit("http://localhost:3000/")
        cy.get('input[data-test="searchBar"]')
            .should('exist')
            .should('have.value', '')
            .get('ul[data-test="dropdown"]')
            .should('exist')
            .get('li[data-test="dropdownRow"]')
            .should('not.exist')
    })

    it("Test if input is not empty and dropdown filled with 3 elements", () => {
        cy.visit("http://localhost:3000/")      
        cy.get('input[data-test="searchBar"]')
            .should('exist')
            .type('a')
            .should('have.value', 'a')
            .get('ul[data-test="dropdown"]')
            .should('exist')
            .get('li[data-test="dropdownRow"]')
            .should('exist')
            .should('have.length.to.be.lessThan', 10)
    })
})