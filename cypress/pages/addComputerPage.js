class addComputerPage {
    elements = {
        name : () => cy.get("[id=name]")
    }
    title(){
        return cy.get("[id=main]");
    }
    createComputer(){
        return cy.get("[type=submit]").should('have.value', 'Create this computer').click()
    }
    name(){
        return this.elements.name()
    }
    fillName(text) {
        return  this.elements.name().type(text)
    }
    fillIntroducedDate(text) {
        return cy.get("[id=introduced]").type(text)
    }
    fillDiscontinuedDate(text) {
        return cy.get("[id=discontinued]").type(text)
    }
    selectCompany(company) {
        return cy.get("[id=company]").select(company)
    }
    emptyRequiredFields(text){
        return cy.contains(text).should('have.attr', 'class', 'help-inline').and('be.visible')
    }
}


export default addComputerPage;