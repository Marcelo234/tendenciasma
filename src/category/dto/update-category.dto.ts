import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsOptional()
  description: string;

  @IsInt()
  @IsOptional()
  numberofCategories: number;

  @IsString()
  @IsOptional()
  subcategory: string;
}