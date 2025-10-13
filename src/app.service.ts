import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHi(userName:string): string {
    return 'Hi ' + userName;
  }
}
