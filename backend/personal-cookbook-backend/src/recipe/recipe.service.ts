import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class RecipeService {
    constructor(
        @InjectRepository(Recipe) private repository: Repository<Recipe>,
    ) {}

    async create(createRecipeDto: CreateRecipeDto): Promise<InsertResult> {
        const recipe = this.repository.create(createRecipeDto);

        return this.repository.insert(recipe);
    }

    async findAll(): Promise<Recipe[]> {
        return this.repository.find();
    }

    async findOne(id: number): Promise<Recipe> {
        const result = await this.repository.findOne({
            where: { id },
            order: {
                steps: {
                    order: 'ASC',
                },
                ingredients: {
                    id: 'ASC',
                },
            },
            // relationLoadStrategy: 'query',
            // relations: ['steps', 'ingredients'],
        });

        if (!result) {
            throw new NotFoundException(`Recipe with id ${id} not found`);
        }

        return result;
    }

    async update(
        id: number,
        updateRecipeDto: UpdateRecipeDto,
    ): Promise<Recipe> {
        const result = this.findOne(id);

        return this.repository.save({ ...result, ...updateRecipeDto });
    }

    async remove(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
    }

    async import(url: string): Promise<Recipe> {
        const result = await fetch(
            `http://${process.env.SCRAPER_API_HOST}:8000/recipes`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(url),
            },
        );

        return this.repository.create(<Recipe>await result.json());
    }

    async importSave(url: string): Promise<Recipe> {
        const recipe = await this.import(url);
        return this.repository.save(recipe);
    }
}
