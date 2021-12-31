import core from "../framework/Utils/CoreFunctions";
const locator = require("../framework/locatorsJSON/pricing.json");

context('Lodgify pricing page', () => {
  let pricingdata;
  let StarterExtractedValue;
  let ProfessionalExtractedValue;
  let UltimateExtractedValue;

  before(function () {
    cy.fixture('pricing').then(function (data) { pricingdata = data; });
    core.log("Pricing Page Test - Started");
  });
  beforeEach(() => {
    core.visit('/pricing.html');
  });
  
  it('Should have the right title and the prices for the number of rental as 50', () => {
    core.validateTitle(pricingdata.pricingTitleValue);
    core.click(locator.RentalLocator, true);
    core.findElement(locator.selectedRentalLocator).invoke('val').then(function (text) {
      expect(text.trim()).equal(pricingdata.RentalSelectedValue);
    });
    core.findElement(locator.StarterLocator).first().invoke('text').then(function (text) {
      expect(text.trim()).equal(pricingdata.usaStarterValue);
    });
    core.findElement(locator.ProfessionalLocator).first().invoke('text').then(function (text) {
      expect(text.trim()).equal(pricingdata.usaProfessionalValue);
    });
    core.findElement(locator.UltimateLocator).last().invoke('text').then(function (text) {
      expect(text.trim()).equal(pricingdata.usaUltimateValue);
    });
  });

  it('Currency change test in the pricing page', () => {
    core.findElement(locator.currenySymbolLocator).invoke('text').then(function (text) {
      expect(text.trim()).equal(pricingdata.usaDollar);
    });
    core.findElement(locator.StarterLocator).invoke('text').then(function (text) {
      StarterExtractedValue = text.trim();
      cy.log(StarterExtractedValue);
    });
    core.findElement(locator.ProfessionalLocator).first().invoke('text').then(function (text) {
      ProfessionalExtractedValue = text.trim();
      cy.log(ProfessionalExtractedValue);
    });
    core.findElement(locator.UltimateLocator).last().invoke('text').then(function (text) {
      UltimateExtractedValue = text.trim();
      cy.log(UltimateExtractedValue);
    });

    core.select(locator.currencyDropDown, pricingdata.setCurrencyValue);
    core.sleep(5000);

    // Consumed the Fixer (Foreign exchange rates and currency conversion JSON API) to get live conversion
    // commented wantedly to demonstrate how we can think of conversion
    // cy.request(
    //   {
    //     url: Cypress.env('CURRENCYAPI'),
    //     qs: {
    //       access_key: Cypress.env('ACCESSKEY')
    //     }
    //   })
    //   .its('body')
    //   .then(res => {
    //     expect(res.rates).property('USD').to.equal(1.130512);
    // });
    // due to the static pages, wont be able write scripts for conversion
    // StarterExtractedValue * USD = pricingdata.gbpStarterValue
    // ProfessionalExtractedValue * USD = pricingdata.gbpProfessionalValue
    // UltimateExtractedValue * USD = pricingdata.gbpUltimateValue

    core.findElement(locator.currenySymbolLocator).invoke('text').then(function (text) {
      expect(text.trim()).equal(pricingdata.gbpDollar);
    });
    core.findElement(locator.StarterLocator).scrollIntoView().invoke('text').then(function (text) {
      expect(text.trim()).equal(pricingdata.gbpStarterValue);
    });
    core.findElement(locator.ProfessionalLocator).first().invoke('text').then(function (text) {
      expect(text.trim()).equal(pricingdata.gbpProfessionalValue);
    });
    core.findElement(locator.UltimateLocator).last().invoke('text').then(function (text) {
      expect(text.trim()).equal(pricingdata.gbpUltimateValue);
    });
  });

  after(() => {
    core.log("Pricing Page Test - Finished");
  });
})