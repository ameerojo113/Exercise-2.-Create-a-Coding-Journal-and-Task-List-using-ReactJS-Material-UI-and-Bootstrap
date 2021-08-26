import React from 'react'

const TasksList = ({ completeTask }) => {
    return (
        <div>
            <table className="table table-striped table-bordered">
                <tr>
                    <th>Date</th>
                    <th>Tasks for today</th>
                </tr>
                {completeTask.map(item => (
                    <tr>
                        <td>{item.TaskDate}</td>
                        <td>{item.Task}</td>
                        <input type="checkBox" />
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default TasksList
