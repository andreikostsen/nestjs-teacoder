import { DocumentBuilder } from '@nestjs/swagger';

export function getSwaggerConfig() {
  return new DocumentBuilder()
      .setTitle('Nest JS Teacoder API')
      .setDescription('API Documentation')
      .setVersion('1.0')
      .setContact('Andrzej', 'http://localhost', 'support@andrzej.by')
      .addBearerAuth()
      .build();
}