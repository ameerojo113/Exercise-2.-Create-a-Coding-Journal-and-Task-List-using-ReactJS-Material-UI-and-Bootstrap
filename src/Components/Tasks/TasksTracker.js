import React, { useState, useEffect } from 'react'
import TasksForm from './TasksForm'
import TasksList from './TasksList'

const retrieveData = localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")) : [];
function TasksTracker() {
    const [TaskDate, setTaskDate] = useState("");
    const [Task, setTask] = useState("");
    const [completeTask, setCompleteTask] = useState(retrieveData)
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

    const handleTasksDate = e => {
        setTaskDate(today);
    }
    const handleTasks = e => {
        setTask(e.target.value);
    }
    const handleSaveTask = e => {
        e.preventDefault();

        if (Task !== "" && TaskDate !== "") {
            const gawain = { TaskDate, Task };
            setCompleteTask([...completeTask, gawain]);
            setTask("");
            setTaskDate("");
        } else {
            alert("Please input something in date and tasks!!!")
        }
    }
    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     setTotalPrice([])
    // }
    useEffect(() => {
        localStorage.setItem("Tasks", JSON.stringify(completeTask))
    }, [completeTask])
    return (
        <div>
            <header><h1>Task Tracker</h1></header>
            <TasksForm
                tasksDate={TaskDate}
                tasks={Task}
                handleTasksDate={handleTasksDate}
                handleTasks={handleTasks}
                handleSaveTask={handleSaveTask} />
            <br></br>
            <TasksList completeTask={completeTask} />
        </div>
    )
}

export default TasksTracker
