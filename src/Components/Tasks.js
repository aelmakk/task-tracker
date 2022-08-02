import Task from "./Task"
import "../index.css"

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        tasks.map((task) => (
            <div className="taskContainer" >
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            </div>
        ))
    );
}

export default Tasks;