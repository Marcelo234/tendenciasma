import { PartialType } from '@nestjs/swagger';
import { CategoryDto } from './category.dto';

export class ChangeStateCategoryDto extends PartialType(CategoryDto) {}
