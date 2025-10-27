import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTaskDto {
  @IsString({message: 'Название задачи должно быть строкой'})
  @IsNotEmpty({message: 'Название задачи не может быть пустым'})
  @Length(3, 40, {message: 'Название должно быть от 3 до 40 символов' })
  title: string;
}
