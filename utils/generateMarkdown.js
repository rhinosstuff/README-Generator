// Creates a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    license = `![Static Badge](https://img.shields.io/badge/license-${license.split(' ').join('_')}-blue.svg)`
  } else {
    license = ''
  }
  return license
}

// Creates a license link, in the "Table of Contents" section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ''
  if (license !== 'None') {
    link = '* [License](#license)'
  }
  return link
}

// Creates content for the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    license = `This project is licensed under the **${license}** license.`
  } else {
    license = ''
  }
  return license
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.dependencies}
  \`\`\`
  ## Usage
  ${data.useage} 

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  To run tests, run the following command:
  \`\`\`    
  ${data.tests}
  \`\`\`
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at **${data.email}**.
  
  You can explore my other projects on GitHub **[${data.username}](https://github.com/${data.username})**.
  
  `
}

// Makes the generateMarkdown.js file accesible by the require method
module.exports = generateMarkdown