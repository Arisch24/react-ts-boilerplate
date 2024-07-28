export interface TaskItemInterface {
	id: number | string;
	title: string;
	isCompleted: boolean;
}

export interface TaskItemProps {
	tasks?: TaskItemInterface[];
	task?: TaskItemInterface;
	dispatch: React.Dispatch<any>;
}
