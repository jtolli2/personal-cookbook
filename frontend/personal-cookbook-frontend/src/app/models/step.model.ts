import { Ingredient } from "./ingredient.model";
import { Recipe } from "./recipe.model";

export class Step {
    constructor(
        public id: number,
        public description: string,
        public body: string,
        public image: string,
        public order: number,
        public optional: boolean,
        public recipe: Recipe,
        public ingredients: Ingredient[],
    ) {}
}