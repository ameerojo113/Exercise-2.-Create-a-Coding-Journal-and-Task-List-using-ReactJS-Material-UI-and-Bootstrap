import React from 'react'

const ThoughtsForm = ({ thoughtsDate, thoughts,
    handleThoughtsDate, handleThoughts, handleSave }) => {
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
            <form onSubmit={handleSave}>
                <label style={{ float: "left" }}>Thoughts for the Day</label>
                <label style={{ float: "right" }}>Date: <input type="date" onChange={handleThoughtsDate} value={today} /></label>
                <textarea cols="88" rows="5" placeholder="Input fields for thoughts" onChange={handleThoughts} value={thoughts} />
                <input type="submit" className="float-end" value="Save" />
            </form>
        </div>
    )
}

export default ThoughtsForm
