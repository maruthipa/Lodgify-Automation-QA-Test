import core from "../framework/Utils/CoreFunctions";
const locator = require("../framework/locatorsJSON/contacts.json");


context('Lodgify contacts page', () => {
    let contactdata;

    before(function () {
        cy.fixture('contacts').then(function (data) { contactdata = data; });
        core.log("Contacts Page Test - Started");

    });
    
    it('Verify all the mandatory feilds validations and other validations in the contacts page and finally creating the contacts', () => {
        core.visit('/contact.html');
        core.validateTitle(contactdata.contactTitleValue);
        core.findElement(locator.contactHeaderLocator).invoke('text').then(function (text) {
            expect(text.trim()).equal(contactdata.contactHeaderValue);
        });
        core.findElement(locator.testBioLocator).invoke('text').then(function (text) {
            expect(text.trim()).equal(contactdata.bioValue);
        });
        core.findElement(locator.fullNameLocator).invoke('text').then(function (text) {
            expect(text.trim()).equal(contactdata.fullNameValue);
        });
        core.findElement(locator.emailLocator).first().invoke('text').then(function (text) {
            expect(text.trim()).equal(contactdata.emailValue);
        });
        core.findElement(locator.phoneLocator).last().invoke('text').then(function (text) {
            expect(text.trim()).equal(contactdata.phoneValue);
        });
        core.findElement(locator.submitButtonLocator).click();
        core.findElement(locator.nameErrorStateLocator).invoke('text').then(function (text) {
            expect(text.trim()).equal(contactdata.nameErrorMessage);
        });
        core.findElement(locator.emailErrorStateLocator).invoke('text').then(function (text) {
            expect(text.trim()).equal(contactdata.emailErrorMessage);
        });
        core.findElement(locator.commentErrorStateLocator).invoke('text').then(function (text) {
            expect(text.trim()).equal(contactdata.commentsErrorMessage);
        });
        core.type(locator.nameLocator, contactdata.nameValue);
        core.type(locator.emailIDLocator, core.randomValues(contactdata.nameValue) + contactdata.emailIDValue);
        core.type(locator.phoneNumLocator, contactdata.phoneNumValue);
        core.type(locator.commentTextareaLocator, (contactdata.commentsValue + " "+core.randomValues(contactdata.nameValue)+""+core.randomValues(contactdata.nameValue) + contactdata.emailIDValue));
        core.findElement(locator.privacyMessageLocator).invoke('text').then(function (text) {
            expect(text.trim()).contains(contactdata.privacyMessageValue);
        });

        core.click(locator.dateLocator, false);
        var months = {
            "01":"January",
            "02":"February",
            "03":"March",
            "04":"April",
            "05":"May",
            "06":"June",
            "07":"July",
            "08":"August",
            "09":"September",
            "10":"October",
            "11":"November",
            "12":"December"
        }
        let aFullDate= contactdata.arrivalDate;
        let arrival= aFullDate.split("/");
        let dFullDate= contactdata.departureDate;
        let departure= dFullDate.split("/");
        cy.selectYear(arrival[2]);
        cy.selectMonth(months["+arrival[1]+"]);
        cy.selectDate(arrival[0]);
        cy.selectYear(departure[2]);
        cy.selectMonth(months["+departure[1]+"]);
        cy.selectDate(departure[0]);

        // core.findElement(locator.arrivalLocator).invoke('val').then((text) => {
        //     expect(contactdata.arrivalDate).to.equal(text);
        // });
        // core.findElement(locator.departureLocator).invoke('val').then((text) => {
        //     expect(contactdata.departureDate).to.equal(text);
        // });

        core.findElement(locator.submitButtonLocator).click();
        cy.get(locator.successMessageLocator).invoke('text').then(function (text) {
            expect(text.trim()).equal(contactdata.successMessageValue);
        });
    });

    after(() => {
        core.log("Contacts Page Test - Finished");
    });
})