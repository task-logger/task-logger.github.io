export interface ITasks {
	current?: string;
	tasks: {
		[taskName: string]: ITaskInterval[]
	}
}

export interface ITaskInterval {
	start: number;
	end?: number;
}
