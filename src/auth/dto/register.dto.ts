import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterRequest {
  @ApiProperty({
    description: 'Отображаемое имя',
    example: 'John Smith',
    minLength: 3,
    maxLength: 120,
  })
  @IsString()
  @IsNotEmpty()
  @Length(3, 120)
  name: string;

  @ApiProperty({
    description: 'e-mail',
    example: 'pks@tutorial.com',
  })
  @IsEmail({}, { message: 'Email address is incorrect' })
  email: string;

  @ApiProperty({
    description: 'пароль',
    example: '123456',
    minLength: 6,
    maxLength: 50,
  })
  @IsString()
  @IsNotEmpty()
  @Length(6, 50)
  password: string;
}
