import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ChangeStateCategoryDto } from './dto/change-state-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoriesRepository: Repository<CategoryEntity>,
  ) {}

  async find() {
    const categories = await this.categoriesRepository.find();
    return categories;
  }

  async findOne(id: number) {
    const category = await this.categoriesRepository.findOne({
      where: { id: id },
    });
    return category;
  }

  async create(payload: CreateCategoryDto) {
    const newCategory = this.categoriesRepository.create();
    newCategory.name = payload.name;
    newCategory.description = payload.description;
    newCategory.subcategory = payload.subcategory;

    const response = await this.categoriesRepository.save(newCategory);
    return response;
  }

  async update(id: number, payload: UpdateCategoryDto) {
    const category = await this.findOne(id);
    category.name = payload.name;
    category.description = payload.description;
    category.subcategory = payload.subcategory;

    const response = await this.categoriesRepository.update(id, category);
    return response;
  }

  async delete(id: number) {
    const category = await this.findOne(id);
    if (!category) {
      throw new NotFoundException();
    }
    const response = await this.categoriesRepository.delete(id);
    return response;
  }

  async patch(id: number, payload: ChangeStateCategoryDto) {
    const find = await this.findOne(id);

    const data = { ...find, ...payload };
    return await this.categoriesRepository.update(id, data);
  }
}
