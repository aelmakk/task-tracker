import React from "react";
import Button from "./Button";
import "../index.css"

function Header({ title, onAdd, showAddTask }) {
    // const handleClick = () => {
    //     console.log("Clicked Add Task");
    // }

    return (
        <header className="header">
            <h1>{ title }</h1>
            <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'close' : 'Add Task'} onClick= { onAdd } />
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;