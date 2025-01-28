

interface TaskItemProps {
    task: string;
    completed: boolean;
    onToggle: () => void;
}

const TaskItem = ({ task, completed, onToggle }: TaskItemProps) => {
    return (
        <li className={`task-item ${completed ? "completed" : ""}`}>
            <input className="task-checkbox" type="checkbox" checked={completed} onChange={onToggle} />
            <span className="task-text">{task}</span>
        </li>
    );
};



export default TaskItem;