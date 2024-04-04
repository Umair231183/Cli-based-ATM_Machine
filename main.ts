#! /usr/bin/env node
import inquirer from "inquirer";  

let myBalance = 10000 ; // Dollar
let myPin = 1234 ;

// Welcome message 
console.log("welcome to coding with Umair _ ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        type:"number",
        message:"Enter your pin code:"
    }
])
if(pinAnswer.pin === myPin){
    console.log("Pin is correct, Login Successfully!");
    //console.log(`Current Account Balance is: ${myBAlance}`)

    let operationAnswer = await inquirer.prompt([
        {
            name:"operation",
            type:"list",
            message:"Select an operation",
            choices:["Withdraw Ammount","Check Balance"]
        }
    ])

    if(operationAnswer.operation === "Withdraw Ammount"){
      let amountAns = await inquirer.prompt([
        {
            name:"amount",
            type:"number",
            message:"Enter the amount to withdraw:"
        }
      ])
      if(amountAns.amount > myBalance){
           console.log('Insufficient Balancce');
      }
      else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
      }
    }

    else if (operationAnswer.operation === "Check Balance"){
      console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is Incorrect, Plese Try Again!")
}