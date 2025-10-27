import { Controller, Get, Query, Headers } from '@nestjs/common';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  // constructor(private readonly movieService: MovieService) {}

  @Get('headers')
  getUserAgent(@Headers() headers: any) {
    return headers;
  }

  @Get('all')
  findAll(@Query() query: any) {
    return JSON.stringify(query);
  }


}

