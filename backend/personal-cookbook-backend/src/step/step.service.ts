import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Step } from './entities/step.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class StepService {
    constructor(@InjectRepository(Step) private repository: Repository<Step>) {}

    async create(createStepDto: CreateStepDto): Promise<InsertResult> {
        const step = this.repository.create(createStepDto);

        return this.repository.insert(step);
    }

    async findAll(): Promise<Step[]> {
        return this.repository.find();
    }

    async findOne(id: number): Promise<Step> {
        const result = await this.repository.findOneBy({ id });

        if (!result) {
            throw new NotFoundException(`Step with id ${id} not found`);
        }

        return result;
    }

    async update(
        id: number,
        updateStepDto: UpdateStepDto,
    ): Promise<UpdateResult> {
        const result = this.findOne(id);

        return this.repository.update(id, updateStepDto);
    }

    async remove(id: number): Promise<DeleteResult> {
        return this.repository.delete(id);
    }
}
