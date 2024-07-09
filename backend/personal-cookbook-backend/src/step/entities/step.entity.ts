import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Recipe } from '../../recipe/entities/recipe.entity';
import { Ingredient } from '../../ingredient/entities/ingredient.entity';

@Entity({ orderBy: { order: 'ASC' } })
export class Step {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name?: string;

    @Column()
    description?: string;

    @Column()
    body: string;

    @Column()
    image?: string;

    @Column()
    order: number;

    @Column()
    optional: boolean;

    @ManyToOne(() => Recipe, (recipe) => recipe.steps)
    recipe: Recipe;

    @OneToMany(() => Ingredient, (ingredient) => ingredient.step, {
        eager: true,
    })
    ingredients: Ingredient[];
}
