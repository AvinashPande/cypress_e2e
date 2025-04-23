
describe(" TC1", () => {

     it(" tc2 ", ()=> {

       cy. visit("https://www.amazon.in/");
        //cy.contains("Today's Deals").click(); 
        cy.get("#nav-link-accountList-nav-line-1").click();
        cy.get("#ap_email_login").eq(0).type("7683033803");
        cy.get(".a-button-input").click();
    // })
   // cy. visit("https://www.amazon.in/");
    //cy.contains("Today's Deals").click();
});

})