// TODO: Include packages needed for this application
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
  'What is your GitHub username?',
  'What is your email address?',
  'What is your project name?',
  'Please write a short description of your project:',
  'What kind of license should your project have?',
  'What command should be run to install dependencies?',
  'What command should be run to run tests?',
  'What does the user need to know about using the repo?',
  'What does the user need to know about contributing to the repo?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data)
  
  fs.writeFile(fileName, markdown, (err) =>
    err ? console.log(err) : console.log('Success!')
  )
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project:',
      name: 'description',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'dependencies',
      default: 'npm i',
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?',
      name: 'tests',
      default: 'npm test'
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'useage',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contributing',
    }
  ])
  .then((data) => {
    const filename = 'generatedREADME.md'
    writeToFile(filename, data)
    console.log(generateMarkdown(data))
  })  
}

// Function call to initialize app
init();
