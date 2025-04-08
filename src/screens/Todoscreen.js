//We’ll add functions to add, edit, and delete tasks, as well as manage the task list.
import { useState } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import { v4 as uuidv4 } from 'uuid'; 

const ToDoscreen = () => {
    const [taskList, setTaskList] = useState([]);

    const addTask = (task) => {
        setTaskList([
            ...taskList,
            {
                id: uuidv4(),
                ...task,
                createdDate: new Date(),
            },
        ]);
    };

    const editTask = (updatedTask) => {
        setTaskList(
            taskList.map((task) =>
                task.id === updatedTask.id ? updatedTask : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTaskList(taskList.filter((task) => task.id !== taskId));
    };

    return (
        <>
            <div className="screen">
                <h1 className="ui heading center">To-Do List</h1>
                <AddTask onAddTask={addTask} />
                <section>
                    <div className="ui cards">
                        {taskList.map((task) => (
                            <Task
                                key={task.id}
                                task={task}
                                onEditTask={editTask}
                                onDeleteTask={deleteTask}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default ToDoscreen;
