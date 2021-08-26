import React, { useState, useEffect } from 'react'
import ThoughtsForm from './ThoughtsForm';
import ThoughtsList from './ThoughtsList';

const retrieveData = localStorage.getItem("Thoughts") ? JSON.parse(localStorage.getItem("Thoughts")) : [];
function ThoughtsTracker() {
    const [ThoughtDate, setThoughtDate] = useState("");
    const [Thought, setThought] = useState("");
    const [completeThought, setCompleteThought] = useState(retrieveData)

    const handleThoughtsDate = e => {
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
        setThoughtDate(today);
    }
    const handleThoughts = e => {
        setThought(e.target.value);
    }
    const handleSave = e => {
        e.preventDefault();
        if (ThoughtDate !== "" && Thought !== "") {
            const mind = { ThoughtDate, Thought };
            setCompleteThought([...completeThought, mind]);
            setThought("");
            setThoughtDate("");
        } else {
            alert("Please input something in date and thought!!!")
        }
    }
    // const handleDelete = (e) => {
    //     e.preventDefault();
    //     setTotalPrice([])
    // }
    useEffect(() => {
        localStorage.setItem("Thoughts", JSON.stringify(completeThought))
    }, [completeThought])

    return (
        <div>
            <header><h1>Thought Tracker</h1></header>
            <ThoughtsForm
                thoughtsDate={ThoughtDate}
                thoughts={Thought}
                handleThoughtsDate={handleThoughtsDate}
                handleThoughts={handleThoughts}
                handleSave={handleSave} />
            <br></br>
            <ThoughtsList completeThought={completeThought} />
        </div>
    )
}

export default ThoughtsTracker
