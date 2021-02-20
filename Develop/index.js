// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// const questions = [];

//These are my question prompts
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'Title'
        },
        {
            type: 'input',
            message: 'What is the description?',
            name: 'Description'
        },
        {
            type: 'input',
            message: 'What are the table of contents?',
            name: 'Table of Contents'
        },
        {
            type: 'input',
            message: 'What is the project installation instructions?',
            name: 'Installation'
        },
        {
            type: 'input',
            message: 'What is the project usage information?',
            name: 'Usage'
        },
        {
            type: 'list',
            message: 'What is the project license?',
            name: 'License',
            choices: ["MIT", "Mozilla Public License 2.0", "ISC", "Open Software License 3.0", "zLib License", "Academic Free License v3.0"]
        },
        {
            type: 'input',
            message: 'Who is contributing to the project?',
            name: 'Contributing'
        },
        {
            type: 'input',
            message: 'What are your project test instructions?',
            name: 'Tests'
        },
        {
            type: 'input',
            message: 'What are your project questions?',
            name: 'Questions'
        }
    ])
    .then(response =>{
        console.log(response);
        fs.writeFile("newREADME.md", generateMarkdown(response), function(error) {
            if(error) {
                return console.log(error);
            }
            console.log('Your README had been GENERATED!');
        });
    });

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
