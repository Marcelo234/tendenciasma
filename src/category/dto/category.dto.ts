import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
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

  @IsBoolean()
  state: boolean;
}