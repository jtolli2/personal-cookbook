import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { Ingredient } from './entities/ingredient.entity';

@Controller('ingredients')
export class IngredientController {
    constructor(private readonly ingredientService: IngredientService) {}

    @Post()
    create(
        @Body() createIngredientDto: CreateIngredientDto,
    ): Promise<InsertResult> {
        return this.ingredientService.create(createIngredientDto);
    }

    @Get()
    findAll(): Promise<Ingredient[]> {
        return this.ingredientService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Ingredient> {
        return this.ingredientService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateIngredientDto: UpdateIngredientDto,
    ): Promise<UpdateResult> {
        return this.ingredientService.update(+id, updateIngredientDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<DeleteResult> {
        return this.ingredientService.remove(+id);
    }
}
