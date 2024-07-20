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

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    note: string;

    @Column({ nullable: true })
    quantity: number;

    @Column('simple-enum', { enum: Unit, nullable: true })
    unit: string;

    @Column({ nullable: true })
    prep: string;

    @ManyToOne(() => Recipe, (recipe) => recipe.ingredients, {
        onDelete: 'CASCADE',
    })
    recipe: Recipe;

    @ManyToOne(() => Step, (step) => step.ingredients)
    step: Step;
}
