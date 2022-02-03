import { useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function ProjectTask() {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskName);
  };

  return (
    <div className="project-task">
      <ul className="task-list">
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
      <div className="add-task">
        <input
          type="text"
          placeholder="task-name"
          onChange={(e) => setTaskName(e.target.value)}
          value={taskName}
        />
        <button onClick={handleSubmit}>Add Task</button>
      </div>
    </div>
  );
}
