import React from "react";
import Button from "./Button";
import "../index.css"

function Header(props) {
    const title = props.title;
    return (
        <header className="header">
            <h1>{ title }</h1>
            <Button text="Add Task" />
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;