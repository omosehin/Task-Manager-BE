import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  createTask(@Body() body: { title: string; description: string }) {
    const { title, description } = body;
    return this.tasksService.createTask(title, description);
  }

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Patch(':id')
  markTaskAsCompleted(@Param('id') id: string) {
    const taskId = parseInt(id, 10);
    const updatedTask = this.tasksService.markTaskAsCompleted(taskId);
    if (!updatedTask) {
      throw new NotFoundException(`Task with ID ${taskId} not found`);
    }
    return updatedTask;
  }
}
