describe('navbar tests', () => {
    beforeEach(() => {
        cy.visit('https://pic-a-talk.com/').then(() => {
            cy.get('div.et_pb_menu__logo').should('be.visible')
        })
    })
    it('Verify navbar menus are working', () => { 
        cy.get('nav.et-menu-nav > ul > li').each((_,index) => {
            cy.get('nav.et-menu-nav > ul > li').eq(index).click().then(el => {
                let text = el.text().trim().toLowerCase();
                cy.url().should('include',text)
                if(text === "about" || text === "contact" || text === "pricing") {
                    cy.get('div#main-content div.et_pb_row_0  > div:nth-child(1) > div:nth-child(1) p').invoke('text').then(text => {
                        expect(text.trim().toUpperCase()).to.include(text);
                    })
                }else if(text === "blog") {
                    cy.get('div#main-content  div.et_pb_row_0_tb_body p').invoke('text').then(text => {
                        expect(text.trim().toUpperCase()).to.include(text);
                    })
                }else if(text === "sparkle"){
                    cy.get('img[alt="SPARKLE"]').invoke('text').then(text => {
                        expect(text.trim().toUpperCase()).to.include(text);
                    })
                }
            })
        })
    })
    it('Verify contact validation', () => {
        cy.get('nav.et-menu-nav > ul > li').contains('Contact').click();
        cy.get('div.et_pb_contact').should('be.visible')
        cy.get("button[type = 'Submit']").click().then(() => {
            cy.get('div.et_pb_contact input[type = "text"]').should('have.class', 'et_contact_error')
            cy.get('div.et_pb_contact select').should('have.class', 'et_contact_error')
            cy.get('div.et_pb_contact textarea').should('have.class', 'et_contact_error')
        })
    })
})