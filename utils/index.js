// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

const createMarkdown = require('./utils/generateMarkdown');
const { resolve } = require("path");
const { rejects } = require("assert");

// TODO: Create an array of questions for user input

const questions = [ 
    {
        type: "input",
        name: 'title',
        message: "What is the title of your prodject?",
        validate: noNewlineChar,
        filter: trimAnswer,
    },
    {
        type: "input",
        name: "discription",
        message: "What do you want to do?",
        validate: noNewlineChar,
        filter: trimAnswer,
    },
    {
        type:"input",
        name:"installation",
        message:"How do you install your app?",
        validate: noNewlineChar,
        filter: trimAnswer,
    },
    {
        type:"input",
        name:"usage",
        message:"How do you use your app?",
        validate: noNewlineChar,
        filter: trimAnswer,
    },
    {
        type:"input",
        name:"contribution",
        message:"Who are your contributers",
        validate:noNewlineChar,
        filter: trimAnswer,
    },
    {
        type:"input",
        name:"test",
        message:"How do you test your app?",
        validate: noNewlineChar,
        filter: trimAnswer,
    },
    {
        type:"list",
        name:"license",
        message:"What license do you want to use?",
        choices:[''],
    },
    {
        type:"input",
        name:"userName",
        message:"What is your name?",
        validate: noNewlineChar,
        filter: trimAnswer,
    },
    {
        type:"input",
        name:"email",
        message:"What is your email adress?",
        validate: noNewlineChar,
        filter: trimAnswer,
    },
];

function noNewlineChar(input){
    return new Promise((resolve, rejects) =>{
        if(input.includes('\\n')){
            resolve("Void new line");
        }else {
            resolve(true);
        }
    });
}

function trimAnswer(input) {
    return new Promise((resolve, reject) => {
        resolve(input,trim());
    });
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,error =>{
        if(error) throw error;
    });
}

// TODO: Create a function to initialize app
function init() {
    const answer = await inquirer.prompt(questions);
    const markdown = generateMarkdown (answer);

    writeToFile ('./readme.md', markdown);
    
}

// Function call to initialize app
init();
