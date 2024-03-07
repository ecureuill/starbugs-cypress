# Starbugs Coffee e2e with Cypress

This project is an initial study on how to perform end-to-end (E2E) testing using Cypress Framework.

## Reporting

- **Junit**: Cypress generates JUnit XML test reports. These reports can be used to integrate with various third-party tools and services for further analysis and visualization.
- **Allure**: This project leverages the [cypress-allure-plugin](https://github.com/shelex/cypress-allure-plugin). This plugin integrates the Allure reporting framework with Cypress, providing a more comprehensive and interactive reporting experience.

### Viewing Reports

The workflow is configured to deploy **Allure reports** to the [GitHub Project's Pages](https://ecureuill.github.io/starbugs-cypress).

The workflow also includes an action that processes the JUnit XML test reports generated during the test run and displays the results as a check with a summary and annotations. 

Navigate to the project's GitHub page and access the "Actions" tab. Open the latest **Cypress Test** workflow executed.

![Github workflow action](.github/img/report.png)


## Evidences

- **Screenshots**: Cypress will automatically capture screenshots when a failure happens
- **Video recording**: Cypress records a video for each spec file when running tests during cypress



## Running locally

To run tests locally, you will need the following 
- nodejs installed
- cypress installed

### Steps

1. Clone this repository
1. Navigate to the project directory
1. Install the project dependencies
    ```bash
    npm install
    ```
1. Run tests from  cypress from CLI
    ```bash
    npx cypress run
    ```
1. Alternatively, open Interactive Cypress UI for detailed test execution and debugging
    ```bash
    npx cypress open
    ```
