#! /user/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        name: "no1",
        type: "number",
        message: "Your First Number"
    },
    {
        name: "no2",
        type: "number",
        message: "Your Second Number"
    },
    {
        name: "oprator",
        type: "list",
        message: "Slect Your Oprator",
        choices: ['add', 'sub', 'mult', 'div']
    }
])
if ( answer.oprator === 'add'){
    console.log(answer.no1+answer.no2);
    
}
else if (answer.oprator === 'sub'){
    console.log(answer.no1-answer.no2);
    
}
else if (answer.oprator === 'mult'){
    console.log(answer.no1*answer.no2);
    
}
else if (answer.oprator === 'div'){
    console.log(answer.no1/answer.no2);
    
}
else {
    console.log("Please Slect a valid Oprator");
    
}
