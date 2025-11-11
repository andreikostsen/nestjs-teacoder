import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post, Req, Res, UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterRequest } from './dto/register.dto';
import { LoginRequest } from './dto/login.dto';
import type { Response, Request } from 'express';
import { ApiBadRequestResponse, ApiConflictResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { AuthResponse } from './dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Создание аккаунта',
    description: 'Создает новый аккаунт',
  })
  @ApiOkResponse({type: AuthResponse})
  @ApiBadRequestResponse({description: 'некорректные входные данные'})
  @ApiConflictResponse({description: 'Пользователь с такой почтой уже существует'})
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Res( {passthrough: true}) res:Response, @Body() dto: RegisterRequest) {
    return await this.authService.register(res, dto);
  }

  @Get()
  async getAllUsers() {
    return this.authService.getAllUsers();
  }

  @ApiOperation({
    summary: 'Вход в систему',
    description: 'Авторизует пользователя и выдает токен доступа',
  })
  @ApiOkResponse({type: AuthResponse})
  @ApiBadRequestResponse({description: 'некорректные входные данные'})
  @ApiConflictResponse({description: 'Пользователь не найден'})
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Res( {passthrough: true}) res:Response, @Body() dto: LoginRequest) {
    return await this.authService.login(res, dto);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Req() req: Request,
    @Res( {passthrough: true}) res:Response) {
    return await this.authService.refresh(req, res);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Res( {passthrough: true}) res:Response) {
    return await this.authService.logout(res);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('@me')
  @HttpCode(HttpStatus.OK)
  async me(@Req() req: Request) {
    return req.user;
  }


}
