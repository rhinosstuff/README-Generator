// TODO: Include packages needed for this application
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
  'What is your GitHub username?',
  'What is your email address?',
  'What is your project name?',
  'Please write a short description of your project:',
  'What kind of license should your project have?',
  'What command should be run to install dependencies?',
  'What comman should be run to run tests?',
  'What does the user need to know about using the repo?',
  'What does the user need to know about contributing to the repo?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data)
  
  fs.appendFile(fileName, markdown, (err) =>
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
