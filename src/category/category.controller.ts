import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ChangeStateCategoryDto } from './dto/change-state-category.dto';
import { CategoriesService } from './categories.service';

@ApiTags('Categorias')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoriesService: CategoriesService) {}

  //Metodo para buscar uno a mas registros paginados
  @ApiOperation({ summary: 'Find Categories' })
  @Get()
  async find() {
    const response = await this.categoriesService.find();
    return response;
  }

  //Metodo para buscar un registro en particular
  @ApiOperation({ summary: 'Find One Categories' })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    const response = await this.categoriesService.findOne(id);
    return response;
  }

  //Metodo para crear
  @ApiOperation({ summary: 'Create Categories' })
  @Post()
  create(@Body() payload: CreateCategoryDto){
    return payload;
  }

  //Metodo para actualizar
  @ApiOperation({ summary: 'Update Categories' })
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return { id, body: payload };
  }

  //Metodo para actualizar parcialmente
  @ApiOperation({ summary: 'Change Categories State' })
  @Patch(':id')
  changeState(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: ChangeStateCategoryDto,
  ) {
    return { id, body: payload };
  }

  //Metodo para eliminar
  @ApiOperation({ summary: 'Delete Categories' })
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number){
    return `Registro eliminado ${id}`;
  }
}
