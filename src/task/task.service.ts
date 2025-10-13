import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  findAll() {
    return [
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
  }

}
