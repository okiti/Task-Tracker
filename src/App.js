import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";



const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([

    // {
    //   id: 1,
    //   text: "Doctors Appointment",
    //   day: "Feb 5th at 2:30pm",
    //   reminder: true
    // },
    // {
    //   id: 2,
    //   text: "Meeting at School",
    //   day: "Feb 6th at 1:30pm",
    //   reminder: true
    // }
  ])


  //Add Task

  const addTask = async (task) => {

    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  //Delete TASK

  const deleteTask = async (id) => {

    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder

  const toggleReminder = async (id) => {

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  const closeAddTaskform = async () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <Router>
      <div className="container">
        <Header onClickAdd={() => setShowAddTask(!showAddTask)}
          AddFormShown={showAddTask} />
        <Routes>

          <Route path="/" element={
            <>
              {showAddTask && <AddTask onAdd={addTask} onSave={closeAddTaskform} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No task available"}
            </>
          } />

          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
