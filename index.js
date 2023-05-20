// CommonJS require
const { inquirer } = require('./main.js')
const { toDo } = require('./toDo.js')

const closure = toDo();

let info = {
    0: "Welcome to JS TODO-APP! \n",
    1: "1: Add a new task \n",
    2: "2: List all tasks \n",
    3: "3: List completed tasks \n",
    4: "4: Mark the task as done \n",
    5: "5: Delete a task \n",
    6: "6: Sort tasks by the due date \n",
    7: "7: Sort tasks by priority \n",
    8: "8: Clear all tasks \n",
}

console.log(...Object.values(info))

const input = () => {
    inquirer.question("Please choose a number to continue: ", num => {
        if (num > 0 && num < 9) {
            console.log("\n" + info[num])
            closure(num);
        }
        else {
            console.log("We are sorry! we don't support this operation yet :(");
        }
    });

}



const recursiveAsyncReadLine = () => {

    inquirer.question('Command: ', function (answer) {
        if (answer == 0)
            return inquirer.close();
        else {
            input()
            recursiveAsyncReadLine();
        }
    });

}


recursiveAsyncReadLine();


inquirer.on("close", function () {
    console.log("Good bye!");
    process.exit(0);
});



