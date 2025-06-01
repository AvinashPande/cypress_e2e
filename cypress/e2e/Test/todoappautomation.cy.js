
describe('Automate app', () => {

    beforeEach('URL', () => {

        cy.visit("https://todolist.james.am/#/")

    })


    it(' TC1 automate todo input field', () => {

        cy.get('.new-todo').type('This is my second task{enter}')

        cy.get('.view').should('contain.text', 'This is my second task')
        cy.get('.todo-count').should('contain.text', 'items left')
        cy.get('.filters').should('contain.text','All').and('contain.text','active')
        
        

    })

    it('clear data',() =>{
    cy.get('.new-todo').type('This is my second task{enter}')
    cy.get('input[type="checkbox"]').check()
    cy.get('.clear-completed').click()
     cy.get('.new-todo').should('not.include.text','This is my second task')

    } )

    




})