import { Step } from '../../step/entities/step.entity';

export class CreateRecipeDto {
    name: string;
    description?: string;
    image?: string;
    steps: Step[];
}
