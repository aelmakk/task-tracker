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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
