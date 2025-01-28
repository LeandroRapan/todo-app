import TaskItem from "./TaskItem";
import TaskFilters from "./taskFilters";
import { useState } from "react";


interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const TaskList = () => {
    const [tasks, setTasks] = useState<Task[]>([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a TODO App", completed: false },
    ]);
    const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

    const toggleTaskCompletion = (id: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    return (
        <div>
            {/* Barra de filtros */}
            <TaskFilters currentFilter={filter} onChangeFilter={setFilter} />

            {/* Lista de tareas */}
            <ul className="tasklist">
                {filteredTasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task.text}
                        completed={task.completed}
                        onToggle={() => toggleTaskCompletion(task.id)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
// const TaskList = () => {
//     const tasks = ["Task 1", "Task 2", "Task 3"];

//     return (
//         <ul className="task-list">
//             {tasks.map((task, index) => (
//                 <TaskItem key={index} task={task} />
//             ))}
//         </ul>
//     );
// };

// export default TaskList;