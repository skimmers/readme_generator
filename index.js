// Included packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

//These are my question prompts
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is the description?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What is the project installation instructions?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What is the project usage information?',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'What is the project license?',
            name: 'license',
            choices: ["MIT", "ISC", "zLib License",]
        },
        {
            type: 'input',
            message: 'Who is contributing to the project?',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'What are your project test instructions?',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        }
    ])
    //this initializes the app
    .then(response =>{
        console.log(response);
        fs.writeFile("newREADME.md", generateMarkdown(response), function(error) {
            if(error) {
                return console.log(error);
            }
            console.log('Your README had been GENERATED!');
        });
    });

