// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const markDown = require('./utils/generateMarkdown');
const renderLicenseBadge = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const promptUser = ()=> {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'projectName',
          message: 'What is your project name?',
          validate: (value)=>{if(value){return true}else {return "You need to enter a response to continue! "}},
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please enter a description:',
          validate: (value)=>{if(value){return true}else {return "You need to enter a response to continue! "}},
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Please enter installation instructions:',
          validate: (value)=>{if(value){return true}else {return "You need to enter a response to continue! "}},
        },
        {
          type: 'input',
          name: 'usageInfo',
          message: 'Please enter usage information:',
          validate: (value)=>{if(value){return true}else {return "You need to enter a response to continue! "}},
        },
        {
          type: 'input',
          name: 'contributionGuid',
          message: 'Please enter contribution guidelines:',
          validate: (value)=>{if(value){return true}else {return "You need to enter a response to continue! "}},
        },
        {
          type: 'input',
          name: 'testInstruction',
          message: 'Please enter test instructions:',
          validate: (value)=>{if(value){return true}else {return "You need to enter a response to continue! "}},
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email address?',
          validate: (value)=>{if(value){return true}else {return "You need to enter a response to continue! "}},
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub Username',
          validate: (value)=>{if(value){return true}else {return "You need to enter a response to continue! "}},
        },
        {
          type: 'list',
          name: 'license',
          message: 'Please choose a license from the following:',
          choices: ['MIT license', 'GPL Lisence', 'Apache Lisence', 'N/A'] ,
          validate: (value)=>{if(value){return true}else {return "You need to select a lisence to continue! "}},
        },
      ]).then(({
        projectName,
        description,
        installation,
        usageInfo,
        contributionGuid,
        testInstruction,
        email,
        github,
        license
      })=> {
        const template = `# ${projectName}

        ${renderLicenseBadge(liscense)}


        ## Description
        
        ${description}

        
        ## Table of Contents:
        
        
        - [Installation](#Installation instructions)
        - [Usage Information](#Usage information)
        - [Contribute](#How to Contribute)
        - [Test](#Test instructions)
        - [License](#license)


        
        ## Installation instructions:
        What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
        
        ${installation}

        ## Usage information:
        Provide instructions and examples for use.

        ${usageInfo}
        
        ## How to Contribute
        If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so
        
        ${contributionGuid}

        ## Test instructions:
        Go the extra mile and write tests for your application.

        ${testInstruction}
        
        ## License
        Please provide the license you chose:
        
        ${license}
        

        #contact
        *Gitub username: ${github}
        *E-mail: ${email}`;
        writeToFile(projectName, template);
      } 

      )
    };
   

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README file has been created!')
    })
}

// TODO: Create a function to initialize app
function init() {
   promptUser()
}

// Function call to initialize app
init();
