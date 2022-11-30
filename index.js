import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lets Start Calculation');
    await sleep();
    rainbowTitle.stop();
    //console.log();
}
await welcome();
async function askQuestion() {
    const answers = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1:"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2:"
        }
    ]);
    //console.log(answer);
    if (answers.operator == "Addition") {
        //console.log('${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}');
        console.log(chalk.greenBright(answers.num1 + answers.num2));
    }
    else if (answers.operator == "Subtraction") {
        //console.log('${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}');
        console.log(chalk.greenBright(answers.num1 - answers.num2));
    }
    else if (answers.operator == "Multiplication") {
        //console.log('${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}');
        console.log(chalk.greenBright(answers.num1 * answers.num2));
    }
    else if (answers.operator == "Division") {
        //console.log('${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}');
        console.log(chalk.greenBright(answers.num1 / answers.num2));
    }
}
;
//askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? Press y or n:"
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'YES ');
}
startAgain();
