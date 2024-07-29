import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
    standalone: true,
    imports: [RouterLink, CommonModule],
    providers: [RecipeService],
    template: `
        <section class="flex flex-col items-center gap-5 mt-10">
            <!-- search bar -->
            <!-- <form class="flex flex-col gap-5">
                <input type="search" class="input" placeholder="Search" />
            </form>

            <div class="h-[1px] bg-white"></div> -->

            <h1>Recipes</h1>
            <button routerLink="/recipes/import">Add Recipe</button>

            <!-- Recipes -->
            <div class="grid grid-cols-3 m-5 shadow-md">
                <!-- Recipe -->
                <div
                    *ngFor="let recipe of recipes()"
                    class="bg-white bg-opacity-15 dark:bg-opacity-15"
                >
                    <a
                        [routerLink]="['/recipes', recipe.id]"
                        class="*:hover:opacity-100 *:hover:translate-y-0 [&_img]:hover:scale-125 hover:text-white relative overflow-hidden flex gap-4 after:contents-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-pink-500 after:to-violet-500 after:opacity-0 after:scale-[2] after:-translate-x-3/4 after:-translate-y-3/4 after:rotate-[-28deg] after:transition after:duration-700 after:ease-in-out hover:after:opacity-90 hover:after:translate-x-0 hover:after:translate-y-0"
                    >
                        <div class="w-full h-64">
                            <img
                                class="w-full h-full transition-transform duration-500 ease-in-out"
                                [src]="recipe.image"
                                alt=""
                            />
                        </div>
                        <div
                            class="absolute inset-0 opacity-0 flex justify-center items-center z-[1] translate-y-[-20%] transition-all duration-500 ease-in-out delay-200 hover:opacity-100"
                        >
                            <div>
                                <!-- <p class="item-text-category">Design</p> -->
                                <h2 class="text-center text-3xl">
                                    {{ recipe.name }}
                                </h2>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    `,
    styles: [``],
})
export default class RecipesPage {
    recipes = signal(<Recipe[]>[]);

    constructor(private recipeService: RecipeService) {
        this.recipeService.getRecipeList().subscribe((recipes) => {
            this.recipes.set(recipes);
        });
    }
}
