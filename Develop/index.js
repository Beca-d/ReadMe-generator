// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project\'s title?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('The project needs a title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('A description of your project is required!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your app?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter how to install your app!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: '',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter information for contributors!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the instructions for testing?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How should people ask questions?',
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Please enter where people can ask their questions');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: []
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
];
.then(({
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    questions,
    github,
    email
})=>{
const template =`# ${title}

## Description 
${description}
##Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${installation}
## Usage
${usage}
## License
${license}
## Contributing
${contributing}
## Tests
${tests}
## Questions
${questions}
If you have any questions please feel free to send me an email at <${email}>
or visit my GitHub Profile ${github}(https://github.com/${github})
`
}
)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
