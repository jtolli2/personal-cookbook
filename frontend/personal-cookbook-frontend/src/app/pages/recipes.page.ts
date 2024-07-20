import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
    standalone: true,
    imports: [RouterOutlet],
    providers: [RecipeService],
    template: `
        <header
            class="relative p-10 before:bg-hero before:bg-cover before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:opacity-80"
        >
            <!-- <div class="relative top-[40%] flex flex-col items-center gap-5">
                <h1 class="text-white">Recipes</h1>
            </div> -->
        </header>
        <div class="h-[3px] bg-tint-dark"></div>
        <router-outlet></router-outlet>
    `,
})
export default class RecipesLayout {}
