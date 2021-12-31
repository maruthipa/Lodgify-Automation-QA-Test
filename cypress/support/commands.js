// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/* this command is used to select year in the calendar*/
Cypress.Commands.add("selectYear", (yearName) => {
    const currentyear = new Date().getFullYear();
    cy.get('div[class="CalendarMonth_caption CalendarMonth_caption_1"]').its('length').then(function (len) {
        cy.get('div[class="CalendarMonth_caption CalendarMonth_caption_1"]').each((subname) => {
            const myArray = subname.text().split(" ");
            if (myArray[1] == yearName) {
                return
            }
            else {
                if (yearName < currentyear) {
                    cy.get('svg[class="DayPickerNavigation_svg__horizontal DayPickerNavigation_svg__horizontal_1"]').first().click();

                }
                else if (yearName > currentyear) {
                    cy.get('svg[class="DayPickerNavigation_svg__horizontal DayPickerNavigation_svg__horizontal_1"]').last().click();
                }
            }
            cy.selectYear(yearName);
        })
    })
})

/* this command is used to select month in the calendar*/
Cypress.Commands.add("selectMonth", (monthNameValue) => {
    var months = {
        "January": "1",
        "February": "2",
        "March": "3",
        "April": "4",
        "May": "5",
        "June": "6",
        "July": "7",
        "August": "8",
        "September": "9",
        "October": "10",
        "November": "11",
        "December": "12"
    }

    let currentMonth = new Date().getMonth() + 1;
    let givenMonth = months[monthNameValue];
    cy.get('div[class="CalendarMonth_caption CalendarMonth_caption_1"]').each((subname) => {
        const myArray = subname.text().split(" ");
        let gotmonth = myArray[0];
        if (gotmonth.localeCompare(monthNameValue)) {
            return false;
        }
        else {
            if (givenMonth > currentMonth) {
                cy.get('svg[class="DayPickerNavigation_svg__horizontal DayPickerNavigation_svg__horizontal_1"]').first().click();
            }
            else if (givenMonth < currentMonth) {
                cy.get('svg[class="DayPickerNavigation_svg__horizontal DayPickerNavigation_svg__horizontal_1"]').last().click();
            }
        }
        cy.selectMonth(monthNameValue);
    })
})

/* this command is used to select Date in the calendar*/
Cypress.Commands.add("selectDate", (DateValue) => {
    cy.contains(".CalendarDay.CalendarDay_1.CalendarDay__default.CalendarDay__default_2", DateValue).click({ force: true });
})