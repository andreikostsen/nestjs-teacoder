import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [
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

}
