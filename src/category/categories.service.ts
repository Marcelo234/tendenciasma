import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoriesRepository: Repository<CategoryEntity>,
  ) {}

  async find(){
    const categories = await this.categoriesRepository.find();
    return categories;
  }

  async findOne(id: number){
    const category = await this.categoriesRepository.findOne({
      where: { id: id },
    });
    return category;
  }

  async create(payload: CreateCategoryDto){
    const newCategory = this.categoriesRepository.create();
    newCategory.name = payload.name;
    newCategory.description = payload.description;
    newCategory.subcategory = payload.subcategory;

    this.categoriesRepository.save(newCategory);
    return category;
  }
}