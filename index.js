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
            message: 'What are the table of contents?',
            name: 'contents'
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
            choices: ["MIT", "Mozilla Public License 2.0", "ISC", "Open Software License 3.0", "zLib License", "Academic Free License v3.0"]
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
            message: 'What are your project questions?',
            name: 'questions'
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

