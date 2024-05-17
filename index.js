import inquirer from "inquirer";
import chalk from "chalk";
let score = 0;
async function runQuiz() {
    const Quiz1 = await inquirer.prompt([{
            type: "list",
            name: "Q1",
            message: "TypeScript is a?",
            choices: ["Strongly typed", "Object-oriented", "Statically typed", "All of the above"]
        }]);
    // Answer: All of the above
    if (Quiz1.Q1 == "All of the above") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz2 = await inquirer.prompt([{
            type: "list",
            name: "Q2",
            message: "Which keyword is used to define a type alias in TypeScript?",
            choices: ["type", "class", "interface", "var"]
        }]);
    // Answer: type
    if (Quiz2.Q2 == "type") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz3 = await inquirer.prompt([{
            type: "list",
            name: "Q3",
            message: "What does 'strictNullChecks' flag in tsconfig.json do?",
            choices: ["Enables strict null checks", "Disables strict null checks", "Enables strict type checks", "Disables strict type checks"]
        }]);
    // Answer: Enables strict null checks
    if (Quiz3.Q3 == "Enables strict null checks") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz4 = await inquirer.prompt([{
            type: "list",
            name: "Q4",
            message: "Which operator is used for optional properties in TypeScript interfaces?",
            choices: ["!", "?", "*", "+"]
        }]);
    // Answer: ?
    if (Quiz4.Q4 == "?") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz5 = await inquirer.prompt([{
            type: "list",
            name: "Q5",
            message: "What does the 'readonly' keyword do in TypeScript?",
            choices: ["Marks a property as writable", "Marks a property as readable", "Marks a property as immutable", "Marks a property as optional"]
        }]);
    // Answer: Marks a property as immutable
    if (Quiz5.Q5 == "Marks a property as immutable") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz6 = await inquirer.prompt([{
            type: "list",
            name: "Q6",
            message: "Which TypeScript feature allows defining types that can be union of several types?",
            choices: ["Type aliases", "Union types", "Interface inheritance", "Type assertions"]
        }]);
    // Answer: Union types
    if (Quiz6.Q6 == "Union types") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz7 = await inquirer.prompt([{
            type: "list",
            name: "Q7",
            message: "What is the purpose of 'class' keyword in TypeScript?",
            choices: ["To define a function", "To define an object", "To define a type", "To define a class"]
        }]);
    // Answer: To define a class
    if (Quiz7.Q7 == "To define a class") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz8 = await inquirer.prompt([{
            type: "list",
            name: "Q8",
            message: "How can you declare an array in TypeScript?",
            choices: ["let arr: Array<number>", "let arr: number[]", "Both are correct", "None of the above"]
        }]);
    // Answer: Both are correct
    if (Quiz8.Q8 == "Both are correct") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz9 = await inquirer.prompt([{
            type: "list",
            name: "Q9",
            message: "Which TypeScript feature is used to ensure a specific structure of an object?",
            choices: ["Classes", "Interfaces", "Enums", "Modules"]
        }]);
    // Answer: Interfaces
    if (Quiz9.Q9 == "Interfaces") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz10 = await inquirer.prompt([{
            type: "list",
            name: "Q10",
            message: "What is TypeScript's equivalent of JavaScript's 'var' keyword?",
            choices: ["let", "const", "var", "None of the above"]
        }]);
    // Answer: var
    if (Quiz10.Q10 == "var") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz11 = await inquirer.prompt([{
            type: "list",
            name: "Q11",
            message: "Which type assertion is used for type casting in TypeScript?",
            choices: ["<Type>", "(Type)", "[Type]", "{Type}"]
        }]);
    // Answer: (Type)
    if (Quiz11.Q11 == "(Type)") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz12 = await inquirer.prompt([{
            type: "list",
            name: "Q12",
            message: "What is the benefit of using TypeScript over JavaScript?",
            choices: ["Faster execution", "Static type checking", "More features", "Better browser compatibility"]
        }]);
    // Answer: Static type checking
    if (Quiz12.Q12 == "Static type checking") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz13 = await inquirer.prompt([{
            type: "list",
            name: "Q13",
            message: "Which TypeScript feature allows for defining types based on existing types?",
            choices: ["Type aliases", "Type assertions", "Type guards", "Type annotations"]
        }]);
    // Answer: Type aliases
    if (Quiz13.Q13 == "Type aliases") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz14 = await inquirer.prompt([{
            type: "list",
            name: "Q14",
            message: "What is the purpose of 'void' keyword in TypeScript?",
            choices: ["To specify a return type of 'undefined'", "To specify a return type of 'null'", "To specify a return type of 'void'", "To specify a return type of 'any'"]
        }]);
    // Answer: To specify a return type of 'undefined'
    if (Quiz14.Q14 == "To specify a return type of 'undefined'") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz15 = await inquirer.prompt([{
            type: "list",
            name: "Q15",
            message: "Which TypeScript feature is used to create reusable code?",
            choices: ["Modules", "Interfaces", "Classes", "Enums"]
        }]);
    // Answer: Modules
    if (Quiz15.Q15 == "Modules") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz16 = await inquirer.prompt([{
            type: "list",
            name: "Q16",
            message: "Which operator is used to perform type assertion in TypeScript?",
            choices: ["as", "is", "typeof", "instanceof"]
        }]);
    // Answer: as
    if (Quiz16.Q16 == "as") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz17 = await inquirer.prompt([{
            type: "list",
            name: "Q17",
            message: "What is the purpose of 'never' type in TypeScript?",
            choices: ["To specify a type that never occurs", "To specify a type that always occurs", "To specify a type that is void", "To specify a type that is any"]
        }]);
    // Answer: To specify a type that never occurs
    if (Quiz17.Q17 == "To specify a type that never occurs") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz18 = await inquirer.prompt([{
            type: "list",
            name: "Q18",
            message: "What is TypeScript?",
            choices: ["A superset of JavaScript", "A replacement for JavaScript", "A framework for JavaScript", "A subset of JavaScript"]
        }]);
    // Answer: A superset of JavaScript
    if (Quiz18.Q18 == "A superset of JavaScript") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz19 = await inquirer.prompt([{
            type: "list",
            name: "Q19",
            message: "Which command is used to compile TypeScript code?",
            choices: ["tsc", "node", "npm", "ts"]
        }]);
    // Answer: tsc
    if (Quiz19.Q19 == "tsc") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    const Quiz20 = await inquirer.prompt([{
            type: "list",
            name: "Q20",
            message: "Which TypeScript feature allows for specifying multiple possible types for a variable?",
            choices: ["Type assertions", "Type annotations", "Union types", "Intersection types"]
        }]);
    // Answer: Union types
    if (Quiz20.Q20 == "Union types") {
        console.log(chalk.greenBright(" Correct ✓"));
        score = score + 1;
    }
    else {
        console.log(chalk.red(" Wrong Answer ✘"));
    }
    console.log(chalk.bgBlue.white.bold("Quiz completed! Check your score."));
    console.log(chalk.bgBlue.white.bold(`you answered ${score} out of 20 correctly`));
}
runQuiz();
