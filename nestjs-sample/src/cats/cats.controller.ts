import { Controller, Get, Param, Query, Req } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Query('name') name: string): string {
    console.log('name :', name)
    return 'This action returns all cats'
  }
}
