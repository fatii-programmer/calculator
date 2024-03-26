// CALCULATOR:
// project00calculator:
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "please enter your first number:"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "please enter your second number:"
    },
    {
        type: "list",
        name: "operators",
        choices: ["+", "-", "*", "/", "%"],
        message: "select an operation or percentage:"
    },
]);
// console.log(answers);
const { numberone, numbertwo, operators } = answers;
if (numberone && numbertwo && operators) {
    let result = 0;
    if (operators === "+") {
        result = numberone + numbertwo;
    }
    else if (operators === "-") {
        result = numberone - numbertwo;
    }
    else if (operators === "*") {
        result = numberone * numbertwo;
    }
    else if (operators === "/") {
        result = numberone / numbertwo;
    }
    else if (operators === "%") {
        result = (numberone / numbertwo) * 100;
    }
    console.log("great your resultis:,result", result);
}
else {
    console.log("oops! please enter your valid number and choose operations.");
}
