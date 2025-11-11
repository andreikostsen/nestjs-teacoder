import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest{
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