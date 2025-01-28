interface TaskFiltersProps {
    currentFilter: "all" | "active" | "completed";
    onChangeFilter: (filter: "all" | "active" | "completed") => void;
}

const TaskFilters = ({ currentFilter, onChangeFilter }: TaskFiltersProps) => {
    return (
        <div className="task-filters">
            {["all", "active", "completed"].map((filter) => (
                <button
                    key={filter}
                    className={currentFilter === filter ? "active" : ""}
                    onClick={() => onChangeFilter(filter as "all" | "active" | "completed")}
                >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default TaskFilters;