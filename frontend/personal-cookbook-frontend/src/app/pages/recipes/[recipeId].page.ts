import { Component, Input, OnInit, signal } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    imports: [RouterLink, CommonModule],
    providers: [RecipeService],
    template: `
        <!-- Back Button -->
        <!-- <a routerLink="/recipes">Back</a> -->

        <!-- Header -->

        <!-- Recipe Details -->
        <div class="my-10 mx-24 flex flex-col items-center gap-5">
            <ng-container *ngIf="recipe() as recipe; else loading">
                <h1>{{ recipe.name }}</h1>
                <img src="{{ recipe.image }}" class="w-1/3" />
                <p class="w-3/4 text-center">{{ recipe.description }}</p>

                <!-- Divider -->
                <div class="w-full h-[1px] bg-gray-200 dark:bg-tint-dark"></div>

                <h2>Ingredients</h2>
                <!-- <div class="w-1/3 h-0.5 bg-gray-200 dark:bg-tint-dark"></div> -->
                <ul class="w-11/12 list-disc">
                    <li *ngFor="let ingredient of recipe.ingredients">
                        <!-- {{ ingredient.name }} - {{ ingredient.amount }} - {{ ingredient.measure }} -->
                        {{ ingredient.text }}
                    </li>
                </ul>

                <!-- Divider -->
                <div class="w-full h-[1px] bg-gray-200 dark:bg-tint-dark"></div>

                <h2>Directions</h2>
                <!-- <div class="w-1/3 h-0.5 bg-gray-200 dark:bg-tint-dark"></div> -->
                <ol class="w-11/12 list-decimal">
                    <li *ngFor="let step of recipe.steps">
                        {{ step.body }}
                    </li>
                </ol>
            </ng-container>

            <ng-template #loading>
                <p>Loading...</p>
            </ng-template>
        </div>
    `,
    styles: [``],
})
export default class RecipeDetailPage implements OnInit {
    @Input({ required: true, transform: (value: string) => +value })
    recipeId!: number;

    recipe = signal(<Recipe>{});

    constructor(private recipeService: RecipeService) {}

    ngOnInit(): void {
        console.log(this.recipeId);
        this.recipeService.getRecipe(+this.recipeId).subscribe((recipe) => {
            this.recipe.set(recipe);
        });
    }
}
