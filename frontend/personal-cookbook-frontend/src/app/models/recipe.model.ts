import { Ingredient } from './ingredient.model';
import { Step } from './step.model';

export class Recipe {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public image: string,
        public steps: Step[],
        public ingredients: Ingredient[],
    ) {}
}
