import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Step } from '../../step/entities/step.entity';
import { Ingredient } from '../../ingredient/entities/ingredient.entity';

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @OneToMany(() => Step, (step) => step.recipe, { eager: true })
    steps: Step[];

    @OneToMany(() => Ingredient, (ingredient) => ingredient.recipe, {
        eager: true,
    })
    ingredients: Ingredient[];
}
