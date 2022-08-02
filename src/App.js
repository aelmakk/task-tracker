import Header from "./Components/Header"
import Tasks from "./Components/Tasks"
import AddTask from "./Components/AddTask"
import { useState } from "react"
import "./index"

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Finish Task Tracker App",
        day:"Aug 2th at 8:30pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Add Style to Register Page Ft_transcendence",
        day:"Aug 3th at 9:30am",
        reminder: true,
    },
    {
        id: 3,
        text: "Fix Sending Form Data in register Page ft_transcendence",
        day:"Aug 3th at 11:30am",
        reminder: true,
    },
    {
        id: 4,
        text: "Update MY Resume",
        day:"Aug 2th at 9:00pm",
        reminder: false,
    },
])

  const handlDelete = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    )
    // console.log('delete', id)
  }
  
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, reminder:!task.reminder} : task
    ))
    // console.log('toggle Reminder', id)

  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      <h6>*double click on a task to set reminder</h6>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={handlDelete} onToggle={toggleReminder} /> : 'No Tasks To Show' }
    </div>
  );
}

export default App;
