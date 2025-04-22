

 define("", ()=> {
 
    before( () =>{

        cy.log("before all");
    })

    beforeEach( ()  => {
        cy.log("before each");

    })

    it("1st", () => { 

        cy.log("1st it block")
    })

    it("2nd", () => { 

        cy.log("2nd it block")
    })



 })