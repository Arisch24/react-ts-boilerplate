import React, { useState } from "react";
import { TaskItemInterface } from "../types/Todos";
import ACTIONS from "../store/actions";

interface TaskItemProps {
	task: TaskItemInterface;
	dispatch: React.Dispatch<any>;
}

const TaskItem = ({ task, dispatch }: TaskItemProps) => {
	const [title, setTitle] = useState<string>(task.title);

	const removeItem = (id: string | number) => {
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

				<button
					className="todo-list__group-icon bg-transparent border-none"
					onClick={() => removeItem(task.id)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="size-6"
					>
						<path
							fillRule="evenodd"
							d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
		</li>
	);
};

export default TaskItem;
