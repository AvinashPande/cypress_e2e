
/// <reference types="cypress"/>

 describe('API get call', () => {

    it('get', () =>  { 

         cy.request('https://jsonplaceholder.typicode.com/posts').then((res) => {

            expect(res.status).to.eq(200);
            expect(res.body[1].title).to.eq("qui est esse");
            //expect(res.)
         })


            // cy.request('https://reqres.in/api/users?page=2').then((response) => {

            //     expect(response.status).to.eq(200);
            // })
 


        })
 })
