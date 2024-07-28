import { FormEvent, useState } from "react";
import { TaskItemProps } from "../types/Todos";
import { addTask } from "../store/actions";

const CreateForm = ({ dispatch }: TaskItemProps) => {
	const [title, setTitle] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		// add todo
		if (title) {
			dispatch(addTask(title));
		}
	};

	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-3xl font-bold">Add an Item</h2>
			<hr className="bg-slate-300 my-2 w-[25%]" aria-hidden="true" />
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label className="form-label" htmlFor="title">
						<input
							className="form-input"
							type="text"
							id="title"
							name="title"
							placeholder="The todo"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
				</div>
				<div className="form-group">
					<button className="form-button" type="submit">
						Create
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateForm;
