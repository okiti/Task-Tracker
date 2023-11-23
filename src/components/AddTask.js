import { useState } from "react"


const AddTask = ({ onAdd, onSave }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })
        onSave()


        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit} autoComplete="off">
            <div className="form-control">
                <label htmlFor="text">Task</label>
                <input type="text" id="text" autoFocus placeholder="Add Task"
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label htmlFor="day">Day & Time</label>
                <input type="text" id="day" placeholder="Add Day & Time"
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>

            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set Reminder</label>
                <input type="checkbox" id="reminder"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>


            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask
