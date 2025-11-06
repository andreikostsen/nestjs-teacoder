import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegisterRequest {
  @IsString()
  @IsNotEmpty()
  @Length(3, 120)
  name: string;

  @IsEmail({}, { message: 'Email address is incorrect' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6, 50)
  password: string;
}
