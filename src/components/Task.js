import { formatDate } from "../utils/DateUtil";
import { useState } from "react";

const Task = ({ task, onEditTask, onDeleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleEditChange = (e) => {
        setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = () => {
        onEditTask(editedTask);
        setIsEditing(false);
    };

    return (
        <div className="card">
            <div className="content">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            name="title"
                            value={editedTask.title}
                            onChange={handleEditChange}
                        />
                        <textarea
                            name="description"
                            value={editedTask.description}
                            onChange={handleEditChange}
                        />
                        <button className="ui button" onClick={handleEditSubmit}>
                            Save
                        </button>
                    </>
                ) : (
                    <>
                        <div className="header">{task.title}</div>
                        <div className="meta">{formatDate(task.createdDate)}</div>
                        <div className="description">{task.description}</div>
                    </>
                )}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div
                        className="ui basic green button"
                        onClick={() => setIsEditing(!isEditing)}
                    >
                        {isEditing ? "Cancel" : "Edit"}
                    </div>
                    <div
                        className="ui basic red button"
                        onClick={() => onDeleteTask(task.id)}
                    >
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Task;
