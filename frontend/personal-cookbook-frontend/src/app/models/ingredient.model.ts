import { Recipe } from './recipe.model';
import { Step } from './step.model';

export class Ingredient {
    constructor(
        public id: number,
        public text: string,
        public name: string,
        public note: string,
        public quantity: number,
        public unit: string,
        public prep: string,
        public recipe: Recipe,
        public step: Step,
    ) {}
}
