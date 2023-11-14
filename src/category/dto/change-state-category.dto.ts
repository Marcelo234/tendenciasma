import { PickType } from '@nestjs/swagger';
import { CategoryDto } from './category.dto';

export class ChangeStateCategoryDto extends PickType(CategoryDto, [
  'state',
  'name',
]) {}
