import React from "react";
import Button from "./Button";
import "../index.css"

function Header({ title }) {
    const handleClick = () => {
        console.log("Clicked Add Task");
    }

    return (
        <header className="header">
            <h1>{ title }</h1>
            <Button text="Add Task" onClick= { handleClick } />
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;