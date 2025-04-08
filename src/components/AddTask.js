import { useState } from "react";

const AddTask = ({ onAddTask }) => {
    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.title && task.description) {
            onAddTask(task);
            setTask({ title: "", description: "" }); // Reset form fields
        }
    };

    return (
        <>
            <h3 className="ui heading center">Add new Task</h3>
            <div className="ui form">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={task.title}
                            placeholder="Task Title"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="description">Description</label>
                        <textarea
                            rows="2"
                            id="description"
                            name="description"
                            value={task.description}
                            placeholder="Task Description"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="ui primary button" type="submit">
                        Add Task
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddTask;
