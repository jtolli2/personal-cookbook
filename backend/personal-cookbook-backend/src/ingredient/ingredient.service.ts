import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class IngredientService {
    constructor(
        @InjectRepository(Ingredient)
        private repository: Repository<Ingredient>,
    ) {}

    async create(
        createIngredientDto: CreateIngredientDto,
    ): Promise<InsertResult> {
        const ingredient = this.repository.create(createIngredientDto);

        return this.repository.insert(ingredient);
    }

    async findAll(): Promise<Ingredient[]> {
        return this.repository.find();
    }

    async findOne(id: number): Promise<Ingredient> {
        const result = await this.repository.findOneBy({ id });

        if (!result) {
            throw new NotFoundException(`Ingredient with id ${id} not found`);
        }

        return result;
    }

    async update(
        id: number,
        updateIngredientDto: UpdateIngredientDto,
    ): Promise<UpdateResult> {
        const result = this.findOne(id);

        return this.repository.update(id, updateIngredientDto);
    }

    async remove(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
    }
}
