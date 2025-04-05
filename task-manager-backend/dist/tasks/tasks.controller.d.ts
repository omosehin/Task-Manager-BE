import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    createTask(body: {
        title: string;
        description: string;
    }): import("./task.model").Task;
    getAllTasks(): import("./task.model").Task[];
    markTaskAsCompleted(id: string): import("./task.model").Task;
}
