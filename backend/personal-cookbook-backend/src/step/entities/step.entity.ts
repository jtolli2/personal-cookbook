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

    @Column({ nullable: true })
    name?: string;

    @Column({ nullable: true })
    description?: string;

    @Column()
    body: string;

    @Column({ nullable: true })
    image?: string;

    @Column()
    order: number;

    @Column({ nullable: true })
    optional: boolean;

    @ManyToOne(() => Recipe, (recipe) => recipe.steps, { onDelete: 'CASCADE' })
    recipe: Recipe;

    @OneToMany(() => Ingredient, (ingredient) => ingredient.step, {
        eager: true,
    })
    ingredients: Ingredient[];
}
