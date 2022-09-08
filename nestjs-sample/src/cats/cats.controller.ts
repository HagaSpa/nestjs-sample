import { Body, Controller, Get, HttpCode, Param, Post, Query,} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto.age);
    console.log(createCatDto.name);
    console.log(createCatDto.breed);
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
