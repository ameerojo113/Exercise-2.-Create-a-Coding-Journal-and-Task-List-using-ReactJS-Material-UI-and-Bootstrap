import React from 'react'

const TasksForm = ({ tasksDate, tasks,
    handleTasksDate, handleTasks, handleSaveTask }) => {
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
    
    return (
        <div>
            <form onSubmit={handleSaveTask}>
                <label style={{ float: "left" }}>Task</label>
                <label style={{ float: "right" }}>Date: <input type="date" onChange={handleTasksDate}  value={today} /></label>
                <textarea cols="88" rows="5" onChange={handleTasks} value={tasks} />
                <input type="submit" className="float-end" value="Save" />
            </form>
        </div>
    )
}

export default TasksForm
