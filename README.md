# Deep Origin API Testing Suite

![NodeJS 18](https://img.shields.io/badge/node.js|18-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Chai](https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white)

This is a project where I implemented a test automation framework, to perform automated API Testing using cypress. This is a project focused on Deep Origin Company.

***

## Status

![IN PRODUCTION](https://img.shields.io/badge/IN_PRODUCTION-1983fc?style=for-the-badge)

### Developer

#### Kervinn Aguilera

***

## 📌 Key Features

- Support for API testing with Cypress.

- Schema validation with AJV and AJV Formats.

- Random data generation with Faker.

- UUID handling with uuid.

- Integration with ESLint and Prettier to maintain clean code.

- Ready-to-run test configuration.

## ✅ Prerequisites

Ensure you have the following tools installed:

- Node.js (Latest version recommended)

- npm (Included with Node.js)

## 📥 Installation

Follow these steps to set up the environment:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/automation-deep-origin-project.git
    cd automation-deep-origin-project
    ```

2. Install dependencies:

    ```bash
    npm ci
    ```

3. Open Cypress for the first time:

    ```bash
    npx cypress open
    ```

## 📦 Installed Dependencies

The repository includes the following dependencies:

1. Cypress and Utilities

   ```bash
    npm install --save-dev cypress
    ```

2. Schema Validation with AJV

   ```bash
    npm install --save-dev ajv ajv-formats
    ```

3. Test Data Generation

   ```bash
    npm install --save-dev @faker-js/faker uuid
    ```

4. UUID Handling

   ```bash
    npm install uuid --save-dev
    ```

5. ESLint and Prettier Setup

    ```bash
    npm install --save-dev eslint eslint-plugin-cypress
    npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
    ```

## 🔍 ESLint and Prettier Configuration

```bash
    import js from "@eslint/js";
    import cypress from "eslint-plugin-cypress";

    export default [
    js.configs.recommended,
    {
        languageOptions: {
        ecmaVersion: "latest",
        globals: {
            cy: "readonly",
            Cypress: "readonly",
            describe: "readonly",
            it: "readonly",
            before: "readonly",
            beforeEach: "readonly",
            after: "readonly",
            afterEach: "readonly",
            context: "readonly",
            expect: "readonly",
        },
        },
        plugins: {
        cypress,
        },
        rules: {
        "no-undef": "off",
        },
    },
    ];
```

## Useful Commands

```bash
npx cypress open  # open the Cypress UI
npx eslint cypress/**/*.js --fix  # Auto-fix errors
```

## Installed Dependencies

```bash
  "@faker-js/faker": "^9.5.0",       // For test data generation
  "ajv": "^8.17.1",                   // JSON Schema validation
  "ajv-formats": "^3.0.1",           // Format support for ajv (e.g. URI, email, date-time)
  "cypress": "^14.0.3",              // Core testing framework
  "uuid": "^11.0.5"                  // UUIDs for data variation in tests
```

## 📂 Project Structure

```bash
cypress/
│
├── e2e/product-api/
│   ├── monitor-api-health/       # Health check tests
│   │   └── monitor-api-health.cy.js
│   └── product-regression-suite/ # Full API regression coverage
│       ├── get-products.cy.js
│       ├── get-product-by-id.cy.js
│       ├── get-products-categories.cy.js
│       ├── ...
│
├── support/
│   ├── commands.js               # Custom Cypress commands
│   └── e2e.js                    # Support file loaded before each test
│
├── fixtures/                     # (Optional) Static data/mocks
│
└── utils/validators/
    └── productValidator.js       # Reusable validation logic

```

## Utilities & Validators

To promote code reusability, readability, and maintainability, common assertions and validation logic are abstracted into utility functions inside:

```bash
utils/validators/productValidator.js
```

## GitHub Actions Workflows

### monitor-health-check.yml

A daily health check that runs all API endpoints and ensures:

HTTP 200 response
Response time under 5000ms
Schedule: every day at 10 AM Pacific Time
Useful for continuous monitoring of public or third-party APIs.

### pipeline.yml

Runs the full regression suite on every push to the main branch.
This ensures the API functionality and contracts are continuously validated.

## Running Tests

Run tests in the browser or headless mode:

- Open Cypress UI:

    ```bash
        npx cypress open
    ```

- Run only API tests (example):

    ```bash
        npx cypress run --spec "cypress/e2e/**/**/*.cy.js"
    ```

## 🤝 Contributions

If you would like to contribute:

1. Fork the repository.

2. Create a new branch (git checkout -b feature-new).

3. Add your changes and commit (git commit -m "Description of change").

4. Push to your branch (git push origin feature-new).

5. Open a Pull Request on GitHub.

🚀 Thank you for your interest in improving this repository!

## Project Overview (Video)

🎥 [Watch the full walkthrough of this test automation framework](https://www.loom.com/share/bd876b75d4844af99ba118936c940824?sid=f7f55e4e-1e85-414f-92cb-802df3db018c)

## 📜 License

This project is under the MIT License. You can use, modify, and share it freely.
