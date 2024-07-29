import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import { Recipe } from './entities/recipe.entity';

@Controller('recipes')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) {}

    @Post()
    create(@Body() createRecipeDto: CreateRecipeDto): Promise<InsertResult> {
        return this.recipeService.create(createRecipeDto);
    }

    @Get()
    findAll(): Promise<Recipe[]> {
        return this.recipeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Recipe> {
        return this.recipeService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateRecipeDto: UpdateRecipeDto,
    ): Promise<Recipe> {
        return this.recipeService.update(+id, updateRecipeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<DeleteResult> {
        return this.recipeService.remove(+id);
    }

    @Post('import')
    import(@Body() url: string): Promise<Recipe> {
        return this.recipeService.import(url);
    }

    @Post('import-save')
    importSave(@Body() url: string): Promise<Recipe> {
        return this.recipeService.importSave(url);
    }

    @Post('export')
    export(): Promise<Recipe[]> {
        return this.recipeService.findAll();
    }
}
