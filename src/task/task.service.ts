import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

type TaskType = {
  id: number;
  title: string;
  isCompleted: boolean;
}


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

    const taskToUpdated = this.tasks.find((task) => task.id == id)

     const updatedTask = {
      ...taskToUpdated,
      isCompleted: dto.isCompleted,
      title: dto.title,
    }

    //
    //
    // this.tasks = this.tasks.map(task=> task.id == id ? updatedTask : task)

    const newTasks = this.tasks.map(task=> task.id == id ? updatedTask : task)


    this.tasks = [...newTasks]

    debugger


    return newTasks


    // return updatedTask



  }



}
