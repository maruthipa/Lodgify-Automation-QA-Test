Open LodgifyHTML as a project to get started

The following instructions use Bash, so make sure to install Git Bash before running the commands.

1. Download Node.js from https://nodejs.org/es/download/ and then execute "$ npm run install-all". 
2. You will need to start a local server to run tests, execute "$ npm run dev-server" in a different terminal, leave this terminal open.
3. To run your test, you should test files inside "cypress/integration/testName.test.js" (where "testName" is the name of the test you're adding).
4. Run the tests with $ "npm run cy:run"
5. Get mochawesome report for tests with $ "npm run cy:getmochawesomereport"
6. Get junit report for tests with $ "npm run cy:getjunitreport"
7. Get tests run in the different environment with $ "npm run cy:runsmokeinprodenv"
8. You should be able to run and check tests results with these steps, now you can proceed with the requirements below, which you will also find in the Test file.
9. Added a folder named framework and it has two sub folders named locatorsJSON and Utils. 
10. Utils has CoreFunctions.js which contains functions for basics operations like click, type .... (Note: we can extend the functions as per our needs)
11. locatorsJSON folder contains different json files for each page. 
12. All the test data for the scripts will be driven from the fixtures folder(Note: Each page has its own json file in our case it will be two files)
13. Utlilized the commands.js under the support folder to add couple of commands. (Note: we can add all our re usable or commands in the commands.js file but then i have implement the coreFunctions in the Utils under framework so it gives the feel of abstract meaning not seeing the cy. in each line)
14. Tests should be able to run on any environment. --- we can over ride the default cypress.json with the environment json file by passing as arguments while running For this we can simply change the baseUrl in cypress.json
15. Add a folder named qa defects which has two documents, one for the defect report and another one is for the execution screenshots as i am not pushing the reports to the branch.

## How we'd like to receive the solution?

Clone this repository and upload it as a new public repository in your GitHub account
Create a new branch in your repository
Create a pull request with the requested functionality to unchanged master branch in your repository
Share link to the PR with us

Quick start commands:
## Installing
```
$ npm run install-all
```
## Starting mock up server (leave a terminal open for this command, and run the test in another terminal)
```
$ npm run dev-server

Note: by default, server.js is using your port 8080, feel free to change it in case you're using it for something else, port 3000 would also be a good alternative. (node server/server.js)
```
## Execute Tests
```
$ npm run cy:run
```
## Generate the mochawesome report along with run
```
$ npm run cy:getmochawesomereport
```
## Generate the Junit report along with run
```
$ npm run cy:getjunitreport
```
## Running in different env
```
$ npm run cy:runsmokeinprodenv

Note: If not dont want to do this way then we can simply change the baseUrl in the cypress.json.
```

Challengue Requirements:

Two HTML files are provided:

*Pricing page: This page allows the users to select different pricing options.
*Contact page: This page allows the users to fill a form and then send an email.

These simpler version of those pages will require you to add the following tests:

Steps:

1. On "Lodgify Pricing" page, add a test to verify that the "Yearly" plan selecting 50 rentals displays: 
   $64 for Starter plan
   $375 for Professional plan
   $525 for Ultimate plan
2. On "Lodgify Pricing" page, add a test to verify that the change of currency (located just below the pricing options) properly changes the currency of the pricing options. 
   The way you do so, and the extra verification steps are up to you (such as verifying the currency price difference)
3. Using your own criteria, add tests according to what you think should be important to cover in this page "Lodgify Pricing". (Optional)
4. On "Contact" page, add a test to verify that the field validations appear according to the following requirements. 
   "Name" is mandatory and a message should be displayed in case this field is left empty
   "Phone number" is mandatory and a message should be displayed in case this field is left empty
   "Email address" is mandatory and a message should be displayed in case this field is left empty
   "Comment" is mandatory and a message should be displayed in case this field is left empty
   This test should pick the date of arrival "April 14th" and date of departure "June 14" to verify the datepicker is working as expected
   This test should also add a random Lorem Ipsum of your choice to "Comment" field
5. Using your own criteria, add tests according to what you think should be important to cover in this page "Contact". (Optional)


IMPORTANT NOTE: Some tests, if followed the requirements correctly, will fail. For those, add an example of a bug report in the test document. 


## Troubleshooting

Using the provided steps, everything should work as explained, if not, make sure your Node.js is updated. In case you have any issues with Webdriver.io, you can always install another webframework like Express. In these cases, please also add extra information in the README. 

In case you change your configuration, make sure to change your package.json file to run accordingly to avoid any kind of troubles or incompatibilities.

Good luck!
