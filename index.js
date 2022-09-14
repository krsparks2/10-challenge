const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'employees.html');

const generateHTML = require('./src/generateHTML.js');
 
let employeeList = [];

// console.log(generateHTML({managerName : 'keli'}));
// console.log(employeeList);

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
        message: "What is the Team Manager's email address?",
        name: 'managerEmail',
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
        message: "What is the Team Manager's office number?",
        name: 'officeNumber',
        default: 'Office Number',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid office number is required.");
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
    choices: ['add an engineer', 'add an intern', 'finish building the team']
}

function buildTeam(){
    inquirer
        .prompt(managerQuestions).then((answers) =>{
            // console.log(answers);
            employeeList.manager = answers;
            const newEmployee = new Manager(answers.managerName, answers.mangerID, answers.managerEmail, answers.officeNumber)
            return(newEmployee)
        })
        .then(() => {
            menu()
        })
}

function addEngineer() {
    inquirer
        .prompt(engineerQuestions).then((answers) => {
            // console.log(answers);
            employeeList.engineers = answers;
            const newEmployee = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.githubUserName)
            return(newEmployee)
        })
        .then(() => {
            menu()
        })
 }

function addIntern() {
    inquirer
        .prompt(internQuestions).then((answers) => {
            // console.log(answers);
            employeeList.intern = answers; 
            const newEmployee = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool)
            return(newEmployee)
        })
        .then(() => {
            menu()
        })
}

function finishTeam(){
    // console.log("employee list", employeeList);
    const employeeListHTML = generateHTML(employeeList);
    fs.writeFile('./dist/employees.html', employeeListHTML, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
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
                finishTeam()
                break;
        }
    })
}

buildTeam();