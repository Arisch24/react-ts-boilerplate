import { TaskItemProps } from "../types/Todos";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const TaskCard = ({ dispatch }: TaskItemProps) => {
	const tasks = useSelector((state: RootState) => state.tasksReducer);

	return (
		<section className="card flex flex-col gap-2 mb-6">
			<div className="container">
				<h1 className="text-slate-50">Task Manager</h1>
				<hr className="bg-slate-300 my-3" aria-hidden="true" />
			</div>
			<div className="container">
				<h2>Items</h2>
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
			</div>
		</section>
	);
};

export default TaskCard;
