// CommonJS require
const { inquirer, tasks, date } = require('./main.js')


console.log(tasks)

function isCompleted(arr) {
    return arr.isCompleted == true;
}

function notCompleted(arr) {
    return arr.isCompleted != true;
}

const Completed = tasks.filter(isCompleted);
const notComplete = tasks.filter(notCompleted);
let sortP = tasks.sort((s1, s2) => (s1.priority > s2.priority) ? 1 : (s1.priority < s2.priority) ? -1 : 0);
let sortD = tasks.sort((s1, s2) => (s1.date > s2.date) ? 1 : (s1.date < s2.date) ? -1 : 0);

const toDo = () => {
    return operations = (num) => {
        let counter = tasks.length + 1;
        if (num == 1) {
            inquirer.question("What is your task ?", title => {
                inquirer.question("priority from 1 to 3", pri => {
                    tasks.push(counter, title, date, pri, false);
                    process.stdout.write(tasks + "\n")
                    inquirer.close();
                });

            });
        } else if (num == 2) {
            for (let i = 0; i < tasks.length; i++) {
                process.stdout.write(Object.values(tasks[i]) + "\n")
            }
        } else if (num == 3) {
            console.log(Completed)
        } else if (num == 4) {
            console.log(notComplete)
            inquirer.question("select task id: ", id => {
                for (let i = 0; i < tasks.length; i++) {
                    if (id == tasks[i].id) {
                        tasks[i].isCompleted = true
                        process.stdout.write(`The task that has the ID number equal ${id} is now done!`)
                    }
                }
            });
        } else if (num == 5) {
            console.log(tasks)
            inquirer.question("select task id: ", id => {
                for (let i = 0; i < tasks.length; i++) {
                    if (id == tasks[i].id) {
                        tasks.splice(i, 1);
                        process.stdout.write(`The task that has the ID number equal ${id} now is deleted!`)
                    }
                }
            });
        } else if (num == 6) {
            console.log(sortD)
        } else if (num == 7) {
            console.log(sortP)
        } else if (num == 8) {
            tasks.splice(0, tasks.length);
            console.log("All tasks removed")
        }


    }

}




module.exports = { toDo }




