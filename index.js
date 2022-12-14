// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { rejects } = require("assert");
const generateMarkdown = require('./utils/generateMarkdown.js');

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
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ["Unlicensed", "MIT", "GPLv3", "Apache 2.0"]
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
];

// TODO: Create a function to write README file
function writeToFile(data){
    return new Promise((resolve, reject) => {
        fs.writeFile("./README.md", data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: console.log("file created successfully!"),
            });
        })
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(generateMarkdown)
    .then(writeToFile);
}

// // Function call to initialize app
init();

