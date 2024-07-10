import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { StepService } from './step.service';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { Step } from './entities/step.entity';

@Controller('steps')
export class StepController {
    constructor(private readonly stepService: StepService) {}

    @Post()
    create(@Body() createStepDto: CreateStepDto): Promise<InsertResult> {
        return this.stepService.create(createStepDto);
    }

    @Get()
    findAll(): Promise<Step[]> {
        return this.stepService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Step> {
        return this.stepService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateStepDto: UpdateStepDto,
    ): Promise<UpdateResult> {
        return this.stepService.update(+id, updateStepDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<DeleteResult> {
        return this.stepService.remove(+id);
    }
}
