import { Component, Input, OnInit, signal } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    imports: [RouterLink, CommonModule, FormsModule],
    providers: [RecipeService],
    template: `
        <!-- Back Button -->
        <!-- <a routerLink="/recipes">Back</a> -->

        <!-- Header -->

        <ng-container *ngIf="!inEditMode(); else edit">
            <!-- <ng-container> -->
            <!-- Recipe Details -->
            <div class="my-10 mx-24 flex flex-col items-center gap-5">
                <ng-container *ngIf="recipe() as recipe; else loading">
                    <h1>
                        {{ recipe.name }}
                    </h1>
                    <img src="{{ recipe.image }}" class="w-1/3" />
                    <p class="w-3/4 text-center">{{ recipe.description }}</p>

                    <!-- Divider -->
                    <div
                        class="w-full h-[1px] bg-gray-200 dark:bg-tint-dark"
                    ></div>

                    <h2>Ingredients</h2>
                    <!-- <div class="w-1/3 h-0.5 bg-gray-200 dark:bg-tint-dark"></div> -->
                    <ul class="w-11/12 list-disc">
                        <li *ngFor="let ingredient of recipe.ingredients">
                            <!-- {{ ingredient.name }} - {{ ingredient.amount }} - {{ ingredient.measure }} -->
                            {{ ingredient.text }}
                        </li>
                    </ul>

                    <!-- Divider -->
                    <div
                        class="w-full h-[1px] bg-gray-200 dark:bg-tint-dark"
                    ></div>

                    <h2>Directions</h2>
                    <!-- <div class="w-1/3 h-0.5 bg-gray-200 dark:bg-tint-dark"></div> -->
                    <ol class="w-11/12 list-decimal">
                        <li *ngFor="let step of recipe.steps">
                            {{ step.body }}
                        </li>
                    </ol>

                    <button (click)="toggleEditMode()">Edit</button>
                </ng-container>

                <ng-template #loading>
                    <p>Loading...</p>
                </ng-template>
            </div>
        </ng-container>

        <ng-template #edit>
            <form class="my-10 mx-24 flex flex-col items-center gap-5">
                <h1>
                    <input
                        [(ngModel)]="recipe().name"
                        name="name"
                        type="text"
                        placeholder="Name"
                    />
                </h1>
                <input
                    [(ngModel)]="recipe().image"
                    name="image"
                    type="text"
                    placeholder="Image URL"
                />
                <textarea
                    [(ngModel)]="recipe().description"
                    name="description"
                    type="text"
                    placeholder="Description"
                    class="w-11/12"
                ></textarea>

                <h2>Ingredients</h2>
                <ul class="w-11/12 list-disc">
                    <li *ngFor="let ingredient of recipe().ingredients">
                        <input
                            [(ngModel)]="ingredient.text"
                            name="ingredient{{ ingredient.id }}"
                            type="text"
                            placeholder="Ingredient"
                            class="w-11/12"
                        />
                    </li>
                </ul>

                <h2>Directions</h2>
                <ol class="w-11/12 list-decimal">
                    <li *ngFor="let step of recipe().steps">
                        <input
                            [(ngModel)]="step.body"
                            name="step{{ step.id }}"
                            type="text"
                            placeholder="Step"
                            class="w-11/12"
                        />
                    </li>
                </ol>

                <button (click)="cancelEdit()">Cancel</button>
                <button type="submit" (click)="saveRecipe()">Save</button>
            </form>
        </ng-template>
    `,
    styles: [``],
})
export default class RecipeDetailPage implements OnInit {
    @Input({ required: true, transform: (value: string) => +value })
    recipeId!: number;

    recipe = signal(<Recipe>{});
    inEditMode = signal(false);

    constructor(private recipeService: RecipeService) {}

    ngOnInit(): void {
        this.recipeService.getRecipe(+this.recipeId).subscribe((recipe) => {
            this.recipe.set(recipe);
        });
    }

    toggleEditMode() {
        this.inEditMode.update((inEditMode) => !inEditMode);
    }

    saveRecipe() {
        this.inEditMode.set(false);
        this.recipeService.updateRecipe(this.recipe()).subscribe((recipe) => {
            this.recipe.set(recipe);
        });
    }

    cancelEdit() {
        this.inEditMode.set(false);
        console.log('cancel edit');

        this.recipeService.getRecipe(+this.recipeId).subscribe((recipe) => {
            this.recipe.set(recipe);
        });
    }
}
