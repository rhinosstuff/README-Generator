// Includes file system, inquirer and local generateMarkdown packages.
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')


// Creates an object of questions for user input
const questions = {
  username: 'What is your GitHub username?',
  email: 'What is your email address?',
  projectName: 'What is your project name?',
  description: 'Please write a short description of your project:',
  license: 'What kind of license should your project have?',
  installCommand: 'What command should be run to install dependencies?',
  testCommand: 'What command should be run to run tests?',
  usageInfo: 'What does the user need to know about using the repo?',
  contributingInfo: 'What does the user need to know about contributing to the repo?'
}

// Creates & writes to a README.md file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data)
  
  fs.writeFile(fileName, markdown, (err) =>
    err ? console.log(err) : console.log('Success!')
  )
}

// Initialize the app, by colleting data, creating file name then calling writeToFile() 
function init() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: questions.username,
      name: 'username',
    },
    {
      type: 'input',
      message: questions.email,
      name: 'email',
    },
    {
      type: 'input',
      message: questions.projectName,
      name: 'projectName',
    },
    {
      type: 'input',
      message: questions.description,
      name: 'description',
    },
    {
      type: 'list',
      message: questions.license,
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      name: 'license',
    },
    {
      type: 'input',
      message: questions.installCommand,
      name: 'installCommand',
      default: 'npm i',
    },
    {
      type: 'input',
      message: questions.testCommand,
      name: 'testCommand',
      default: 'npm test'
    },
    {
      type: 'input',
      message: questions.usageInfo,
      name: 'usageInfo',
    },
    {
      type: 'input',
      message: questions.contributingInfo,
      name: 'contributingInfo',
    }
  ])
  .then((data) => {
    const filename = 'generatedREADME.md'
    writeToFile(filename, data)
  })  
}

// Function call to initialize app
init()