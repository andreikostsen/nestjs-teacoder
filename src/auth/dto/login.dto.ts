import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginRequest{
  @IsEmail({}, { message: 'Email address is incorrect' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 50)
  password: string;
}