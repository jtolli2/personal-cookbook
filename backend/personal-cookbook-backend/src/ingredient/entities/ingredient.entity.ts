import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Step } from '../../step/entities/step.entity';
import { Unit } from './unit.enum';
import { Recipe } from '../../recipe/entities/recipe.entity';

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    name: string;

    @Column()
    note: string;

    @Column()
    quantity: number;

    @Column('simple-enum', { enum: Unit })
    unit: string;

    @Column()
    prep: string;

    @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
    recipe: Recipe;

    @ManyToOne(() => Step, (step) => step.ingredients)
    step: Step;
}
