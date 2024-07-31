import React from "react";
import TaskItems from "./TaskItems";

const TaskLists = ({ tasks }) => {
    console.log("Tasks in TaskLists:", tasks);

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {tasks.length > 0 ? (
                tasks.map((task) => <TaskItems key={task.id} data={task} />)
            ) : (
                <div>No Tasks Available</div>
            )}
        </div>
    );
};

export default TaskLists;
