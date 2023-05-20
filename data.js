let tasks = [];
class task {
    constructor(id, title, date, priority, isCompleted) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.priority = priority;
        this.isCompleted = isCompleted;
    }

    addTask() {
        tasks.push(
            {
                "id": this.id,
                "title": this.title,
                "date": this.date,
                "priority": this.priority,
                "isCompleted": this.isCompleted,
            }
        )
    }


    printTask() {
        console.log(tasks);
    }
    isCompleted() {
        return this.isCompleted;
    }
}

let objectDate = new Date();


let day = objectDate.getDate();
console.log(day); 

let month = objectDate.getMonth();
console.log(month + 1); 

let year = objectDate.getFullYear();
console.log(year);


let date = day + "/" + month + "/" + year;



const task1 = new task(1, "User interface design", date, 1, true);
const task2 = new task(2, "Learn Javascript", date, 0, false);
const task3 = new task(3, "Stealing money from the bank", date,1, false);




task1.addTask();
task2.addTask();
task3.addTask();




module.exports = { tasks, task ,date}


