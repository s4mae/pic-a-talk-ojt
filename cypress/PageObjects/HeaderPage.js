class HeaderPage{
    dropdownMenuRedirectToCorrespondingPage(menu){
        return cy.get('a.nav-panel-link').contains(menu).click().then(() => {
            // Assert that the heading contains the menu text
            cy.get('h1').invoke('text').should('contain', menu);
            
            // Assert that the URL includes the menu
            const url_menu = menu.trim().toLowerCase().split(' ');
            cy.url().should('include', url_menu[0]);
        });
    }
}

export default HeaderPage;