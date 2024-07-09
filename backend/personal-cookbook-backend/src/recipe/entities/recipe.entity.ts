import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Step } from '../../step/entities/step.entity';

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
}
