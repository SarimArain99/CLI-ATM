#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let answerPin = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin code",
    type: "number"
});
if (answerPin.pin === myPin) {
    console.log("Typed pin is correct.!");
    let operationAnswer = await inquirer.prompt([{
            name: "operation",
            message: "please select the option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }]);
    if (operationAnswer.operation === "withdraw") {
        let myAmount = await inquirer.prompt([{
                name: "amount",
                message: "select the amount to withdraw",
                type: "number"
            }]);
        myBalance -= myAmount.amount;
        if (myAmount.amount <= myBalance) {
            console.log("your remaining balance is:", myBalance);
        }
        else {
            console.log(`you have insufficient balance please recharge your account`);
        }
        ;
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`your balance is ${myBalance}`);
    }
    else if (operationAnswer.operation === "fast cash") {
        let fastCash = await inquirer.prompt([{
                name: "fastWithdraw",
                message: "please select the option",
                type: "list",
                choices: [2000, 5000, 10000],
            }]);
        if (fastCash.fastWithdraw === 2000 && fastCash.fastWithdraw <= myBalance) {
            myBalance -= fastCash.fastWithdraw;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else if (fastCash.fastWithdraw === 5000 && fastCash.fastWithdraw <= myBalance) {
            myBalance -= fastCash.fastWithdraw;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else if (fastCash.fastWithdraw === 10000 && fastCash.fastWithdraw <= myBalance) {
            myBalance -= fastCash.fastWithdraw;
            console.log(`your remaining balance is ${myBalance}`);
        }
        else {
            console.log(`You Have Insufficient Balance Please Recharge Your Account`);
        }
    }
    ;
}
else {
    console.log(`please enter a valid PIN`);
}
;
