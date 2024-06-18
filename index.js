#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.what is the correct way to check if tow values are not equal in Typescript?",
        choices: ["a == b", "a === b", "a = b", "a !== b"],
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.Which of the following characters is commonly allowed in variable name in Typescript?",
        choices: ["$", "@", "#", "&"],
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.Which operator is commonly used for string concatination in Typescript?",
        choices: ["+", "-", "*", "/"],
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.In Typescript, which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";", ","],
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.which method of inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()", "run()"],
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log("1. correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "$":
        console.log("2. correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "+":
        console.log("3. correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case ";":
        console.log("4. correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "prompt()":
        console.log("5. correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(`score: ${score}`);
