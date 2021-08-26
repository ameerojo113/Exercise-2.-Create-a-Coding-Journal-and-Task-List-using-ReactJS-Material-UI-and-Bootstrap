import React from 'react'

const ThoughtsList = ({ completeThought }) => {
    return (
        <div>
            <table className="table table-striped table-bordered">
                <tr>
                    <th>Date</th>
                    <th>Thoughts for Today</th>
                </tr>
                {completeThought.map(item => (
                    <tr>
                        <td>{item.ThoughtDate}</td>
                        <td>{item.Thought}</td>
                        <input type="checkBox" />
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default ThoughtsList
