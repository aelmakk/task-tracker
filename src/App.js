import Header from "./Components/Header"
import { useState } from "react"
import Tasks from "./Components/Tasks"
import "./index"

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Finish Task Tracker App",
        reminder: true,
    },
    {
        id: 2,
        text: "Add Style to Register Page Ft_transcendence",
        reminder: true,
    },
    {
        id: 3,
        text: "Fix Sending Form Data in register Page ft_transcendence",
        reminder: true,
    },
    {
        id: 4,
        text: "Update MY Resume",
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
      // (
        // task.id === id ? task.reminder = !task.reminder : task.reminder
      // )
    ))
    // console.log('toggle Reminder', id)

  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={handlDelete} onToggle={toggleReminder} /> : 'No Tasks To Show' }
    </div>
  );
}

export default App;
