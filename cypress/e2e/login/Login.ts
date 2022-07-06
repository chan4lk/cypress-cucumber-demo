import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit sharpcloud", () => {
  cy.visit("/");
});

Then("I should see login prompt", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Username"
  );
});