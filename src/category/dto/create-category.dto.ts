import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsInt()
  @IsNotEmpty()
  numberofCategories: number;

  @IsString()
  @IsNotEmpty()
  subcategory: string;

}