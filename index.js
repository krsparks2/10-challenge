const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'employees.html');

const create = require('./src/template.js');

console.log
(
    'Welcome to the Team Generator'
);

const managerQuestions = [
    {
        type: 'input',
        message: "What is Team Manager's name?",
        name: 'managerName',
        default: 'Team Manager Name',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the Team Manager's employee ID?",
        name: 'managerID',
        default: 'Manager ID',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the Team Manager's office number?",
        name: 'officNumber',
        default: 'Office Number',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid office number is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the Team Manager's email address?",
        name: 'managerEmail',
        default: 'Email Address',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the Engineer's name?",
        name: 'engineerName',
        default: 'Engineer Name',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the Engineer's employee ID?",
        name: 'engineerID',
        default: 'Engineer ID',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the Engineer's email address?",
        name: 'engineerEmail',
        default: 'Email Address',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the Engineer's Github Username?",
        name: 'githubUserName',
        default: 'Github Username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Github User name is required.");
            }
            return true;
        }
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "What is the Intern's name?",
        name: 'internName',
        default: 'Intern Name',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Name is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the Intern's employee ID?",
        name: 'internID',
        default: 'Intern ID',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid ID is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the Intern's email address?",
        name: 'internEmail',
        default: 'Email Address',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Where does the Intern go to school?",
        name: 'internSchool',
        default: 'Intern School',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid school name is required.");
            }
            return true;
        }
    }
]

const menuQuestion = {
    type: 'list',
    message: 'choose option',
    name: 'teamMember',
    choices: ['add an engineer', 'add an intern', 'finish building my team']
}

function buildTeam(){
    inquirer
        .prompt(managerQuestions).then((answers) =>{
            menu()
        })
}

function addEngineer() {
    inquirer
        .prompt(engineerQuestions).then((answers) => {
            menu()
        })
}

function addIntern() {
    inquirer
        .prompt(internQuestions).then((answers) => {
            menu()
        })
}

function generateHTML() {

}

function menu (){
    inquirer.prompt(menuQuestion).then((answers) => {
        switch(answers.teamMember){
            case 'add an engineer':
                addEngineer()
                break;
            case 'add an intern':
                addIntern()
                break;
            default:
                generateHTML()
                break;
        }
    })
}

function addEngineer(){
    inquirer
    .prompt(engineerQuestions).then((answers) =>{
        menu()
    })
}

function addIntern(){
    inquirer
    .prompt(internQuestions).then((answers) =>{
        menu()
    })
}

buildTeam();