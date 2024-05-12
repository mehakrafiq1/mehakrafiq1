#! /usr/bin/env/ node
import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number"
});
if (pinAnswer.pin === mypin) {
    console.log("correct pin code!!!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "checkBalance"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        // = , += , _=
        myBalance -= amountAnswer.amount;
        console.log("your remaining balance is" + myBalance);
    }
    else if (operationAns.operation === "checkBalance") {
        console.log("yourBalance is: " + myBalance);
    }
}
else {
    console.log("incorrect pin number");
}
