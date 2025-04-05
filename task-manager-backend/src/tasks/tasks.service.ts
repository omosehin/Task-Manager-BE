import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  createTask(title: string, description: string): Task {
    const newTask: Task = {
      id: this.idCounter++,
      title,
      description,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  markTaskAsCompleted(id: number): Task | null {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = true;
      return task;
    }
    return null;
  }
}
