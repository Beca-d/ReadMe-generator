// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer.prompt(
    [
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
            
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can others contribute to this project?',
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
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use?',
            choices: [
                {
                    name: 'The MIT License',
                    value: 'badge1'
                },                   
                {
                    name: 'The GPL License',
                    value: 'badge2' 
                },
                {
                    name: 'Apache License',
                    value: 'badge3' 
                },
                {
                    name: 'GNU License',
                    value: 'badge4'
                }
            ]

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
        }
    ]
).then(({
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

${license}
## Description 
${description}
## Table of Contents
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
or visit my GitHub Profile [${github}](https://github.com/${github})`;

const fileName = "./develop/README.md"
writeToFile(fileName, template);
}
);

function writeToFile(fileName,data){

fs.writeFile(fileName, data, (err)=>{
        if (err) {
            console.log(err);
        }
            console.log('Your README file has been created!');
})
}
// // TODO: Create a function to write README file
// function writeToFile (fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

