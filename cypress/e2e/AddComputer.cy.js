import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import computersPage from "../pages/computersPage";
import addComputerPage from "../pages/addComputerPage";
import { should } from "chai";
const computerPage = new computersPage();
const addComputersPage = new addComputerPage();

beforeEach(() => {
  cy.fixture('computer').then((computer) => {
    this.computer = computer
  })
})

Given("I am on computers page", () => {
  cy.visit("/");
});

When("I click 'Add new computer'", () => {
  computerPage.addComputer();
});

When("I visit the add new computer page", () => {
  cy.url().should('equal', 'https://computer-database.gatling.io/computers/new');
});

When("I fill all fields", () => {
  addComputersPage.fillName(this.computer.name);
  addComputersPage.fillIntroducedDate(this.computer.introducedDate);
  addComputersPage.fillDiscontinuedDate(this.computer.discontinuedDate);
  addComputersPage.selectCompany(this.computer.company)
  .should('have.value', '1');
});

When("I type the introduced and discontinued fields with a wrong date format", () => {
  addComputersPage.fillIntroducedDate(this.computer.name);
  addComputersPage.fillDiscontinuedDate('1998/01/10');
});

When("I type the computer name field", () => {
  addComputersPage.fillName(this.computer.name);
});

When("I click 'Create this computer'", () => { 
  addComputersPage.createComputer();
});

When("I should be redirected to the computers page", () => {
  cy.url()
  .should('equal', 'https://computer-database.gatling.io/computers')
});

Then("I should be able to read the success mensage", () => {
  cy.contains('Done ! Computer ' + this.computer.name + ' has been created')
  .should('be.visible')
  .invoke('attr', 'class')
  .and('equal', 'alert-message warning');
});


Then("I should be able to read the required field mensage", () => {
  addComputersPage.emptyRequiredFields('Failed to refine type : Predicate isEmpty() did not fail.')
 /* .and('be.visible')
  .invoke('attr', 'class')
  .and('equal', 'help-inline'); */
});

Then("I shouldn't be redirected to the computers page", () => {
  addComputersPage.title().should('be.visible');
});

Then("I should be able to read the wrong date format mensage", () => {
  addComputersPage.emptyRequiredFields("Failed to decode date : java.time.format.DateTimeParseException: Text '" + this.computer.name + "' could not be parsed at index 0")
  addComputersPage.emptyRequiredFields("Failed to decode date : java.time.format.DateTimeParseException: Text '1998/01/10' could not be parsed at index 4")

});


