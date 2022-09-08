import { Controller, Get, HttpCode, Param, Post, Query,} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }
  
  @Get()
  findAll(@Query('name') name: string): string {
    console.log('name :', name)
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
