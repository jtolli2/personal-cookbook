import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Step } from '../../step/entities/step.entity';

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column()
    quantity: number;

    @Column()
    unit: string;

    @ManyToOne(() => Step, (step) => step.ingredients)
    step: Step;
}
