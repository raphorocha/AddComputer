class computersPage{
    elements = {
        addNewComputer : () => cy.get("[id=add]")
    }
    addComputer(){
        this.elements.addNewComputer().click();
    }
}
export default computersPage;