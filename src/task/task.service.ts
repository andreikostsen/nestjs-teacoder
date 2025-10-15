import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

type TaskType = {
  id: number;
  title: string;
  isCompleted: boolean;
};

@Injectable()
export class TaskService {
  private tasks: Array<TaskType> = [
    {
      id: 1,
      title: 'Nest JS',
      isCompleted: false
    },
    {
      id: 2,
      title: 'JS',
      isCompleted: true
    }
  ]

  findAll() {
    return this.tasks
  }

  findById(id: number) {
    const task = this.tasks.find((task) => task.id == id);

    if (!task) {
      throw new NotFoundException('No task with id ' + id);
    }

    return task;
  }

  create(dto: CreateTaskDto) {

    const {title} = dto

    const newTask: TaskType= {
      id: this.tasks.length + 1,
      title,
      isCompleted: false
    }

    this.tasks.push(newTask);

    return this.tasks

  }

  update(id: number, dto: UpdateTaskDto) {

    let taskToUpdate = this.findById(id)

    // taskToUpdate.title = dto.title
    // taskToUpdate.isCompleted = dto.isCompleted

    Object.assign(taskToUpdate, dto)

    return taskToUpdate

  }

  patchUpdate(id: number, dto: Partial<UpdateTaskDto>) {

    const task = this.findById(id)

    Object.assign(task, dto)

    return task

  }

  delete(id: number) {

    const taskToDelete = this.findById(id)

    this.tasks = this.tasks.filter(task => task.id !== taskToDelete.id)

    return true
  }

}
