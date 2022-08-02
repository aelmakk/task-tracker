import "../index.css"
// import Button from "./Button"

const AddTask = () => {

    const addNewTask = (e) => {
        e.preventDefault();
        console.log('form submited');
    }

    return (
        <form className="form-control" onSubmit={addNewTask}>
            <label>
                Task:
                <input type="text" name="task" />
            </label>
            <label>
                Day:
                <input type="text" name="day" />
            </label>
            <div className="form-control-check">
                <label >
                    Set reminder:
                </label>
                    <input type="checkbox" name="reminder" />
            </div>
            <input className="btn btn-block" type="submit" value="submit"></input>
        </form>
    );
}

export default AddTask;