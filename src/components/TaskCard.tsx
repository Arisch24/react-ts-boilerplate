import { TaskItemProps } from "../types/Todos";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const TaskCard = ({ dispatch }: TaskItemProps) => {
	const tasks = useSelector((state: RootState) => state.tasksReducer);

	return (
		<ul className="todo-list">
			{tasks && tasks.length > 0 ? (
				tasks.map((task) => {
					return (
						<TaskItem
							key={task.id}
							task={task}
							dispatch={dispatch}
						/>
					);
				})
			) : (
				<li className="todo-list__item">No items</li>
			)}
		</ul>
	);
};

export default TaskCard;
