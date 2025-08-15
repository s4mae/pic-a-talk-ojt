class WebPage{
    hasText(selector, expectedText){
        return cy.get(selector).should('be.visible').then($elem => {
            const text = $elem.text().trim();
            return text.includes(expectedText); // Check if the text includes the expected text
        })
    }
    getDropdownList(selector){
        var dropdown_list = [];
        return cy.get(selector).should('be.visible').each(($elem)=>{
            dropdown_list.push($elem.text().trim());
        })
        .then(() => {
            return dropdown_list;
        })
    }
}
export default WebPage;