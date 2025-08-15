describe('FAQ section', () => {
    // beforeEach(() => {
    //     cy.visit('https://pic-a-talk.com/sparkle/').then(() => {
    //         cy.get('div.et_pb_menu__logo').should('be.visible')
    //     })
    // })
    it('verify FAQ header visibility', () =>{
        cy.get("div.et_pb_row_5 h2").scrollIntoView().should('be.visible');
        cy.get("div.et_pb_row_5 h2").invoke("text").should('eq', "Frequently Asked Questions");
        cy.get("div.et_pb_row_5 h2").invoke("text").then(text => {
            let txt = text.trim().toLowerCase();
            expect(txt).to.include("frequently asked questions");
        })
    })
    it.only('Verify linkedIn link', () => {
        cy.visit('https://pic-a-talk.com/about-us/');
        cy.get('div.et_pb_row_2 > div.et_pb_column_3 h4').scrollIntoView().invoke('text').then(text => {
            let txt  = text.trim().toLowerCase().split(" ");
            cy.log(txt[0]);
            cy.get('div.et_pb_row_2 > div.et_pb_column_3 ul > li > a').invoke('attr', 'href').then(link => {
                expect(link).to.include(txt[0]);
            })
        })
    })
})