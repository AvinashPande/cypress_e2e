describe('post api', () => {


    it('TC1 for post api ', () => {

        cy.log("this is my post api call")

        cy.request({

            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {

                "userId": 1,
                "id": 1,
                "title": "This is my demo post by avinash pandey",
                "body": " Testing purpose only"
            }
        }) .then( (res) => {

           expect( res.status).to.eq(201)
           expect(res.body.title).to.eq("This is my demo post by avinash pandey")
           expect(res.body).to.have.property("userId")
        }) 



    })




})
