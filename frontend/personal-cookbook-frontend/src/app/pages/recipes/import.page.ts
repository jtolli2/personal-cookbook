import { Component, signal } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { FormsModule } from '@angular/forms';
import { take } from 'rxjs';

@Component({
    standalone: true,
    imports: [FormsModule],
    template: `
        <h1>Import</h1>

        <div>
            <label for="url">URL</label>
            <input type="text" id="url" name="url" [(ngModel)]="url" />
            <button type="button" (click)="importRecipe(url)">Import</button>
        </div>
    `,
})
export default class ImportRecipePage {
    url = '';
    constructor(
        private recipeService: RecipeService,
        private router: Router,
    ) {}

    async importRecipe(url: string) {
        console.log(url);

        const recipe = await this.recipeService.importSaveRecipe(url);
        // console.log(recipe);

        this.router.navigate(['/recipes', recipe.id]);
    }
}
