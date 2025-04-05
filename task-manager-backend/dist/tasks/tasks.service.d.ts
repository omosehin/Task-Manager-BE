import { Task } from './task.model';
export declare class TasksService {
    private tasks;
    private idCounter;
    createTask(title: string, description: string): Task;
    getAllTasks(): Task[];
    markTaskAsCompleted(id: number): Task | null;
}
