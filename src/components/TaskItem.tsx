import React, { useState } from "react";
import { TaskItemInterface } from "../types/Todos";
import CloseIcon from "@mui/icons-material/Close";
import { ACTIONS } from "../utils/defaults";

interface TaskItemProps {
	task: TaskItemInterface;
	dispatch: React.Dispatch<any>;
}

const TaskItem = ({ task, dispatch }: TaskItemProps) => {
	const [title, setTitle] = useState<string>(task.title);

	const removeItem = (id: number) => {
		dispatch({ type: ACTIONS.DELETE_TASK, payload: { id } });
	};

	return (
		<li className="todo-list__item">
			<div className="todo-list__group">
				<input
					className="todo-list__group-input"
					type="text"
					name={task.title}
					value={title}
					placeholder="Item Name"
					autoComplete="false"
					onChange={(e) => setTitle(e.target.value)}
				/>
				<CloseIcon
					className="todo-list__group-icon"
					onClick={() => removeItem(task.id)}
				/>
			</div>
		</li>
	);
};

export default TaskItem;
