import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Step } from '../models/step.model';
import { Ingredient } from '../models/ingredient.model';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeService {
    private readonly recipeUrl = `${import.meta.env.VITE_API_URL}/recipes`;
    private readonly stepUrl = `${import.meta.env.VITE_API_URL}/steps`;
    private readonly ingredientUrl = `${import.meta.env.VITE_API_URL}/ingredients`;

    constructor(private readonly http: HttpClient) {}

    // Recipe methods
    getRecipe(id: number): Observable<Recipe> {
        return this.http.get<Recipe>(`${this.recipeUrl}/${id}`);
    }

    getRecipeList(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(this.recipeUrl);
    }

    createRecipe(recipe: Recipe): Observable<any> {
        return this.http.post<Recipe>(this.recipeUrl, recipe);
    }

    updateRecipe(recipe: Recipe): Observable<Recipe> {
        return this.http.patch<Recipe>(
            `${this.recipeUrl}/${recipe.id}`,
            recipe,
        );
    }

    deleteRecipe(id: number): Observable<any> {
        return this.http.delete<Recipe>(`${this.recipeUrl}/${id}`);
    }

    importRecipe(url: string): Observable<Recipe> {
        return this.http.post<Recipe>(`${this.recipeUrl}/import`, url);
    }

    // Step methods
    createStep(step: Step): Observable<any> {
        return this.http.post<Step>(this.stepUrl, step);
    }

    updateStep(step: Step): Observable<Step> {
        return this.http.patch<Step>(`${this.stepUrl}/${step.id}`, step);
    }

    deleteStep(id: number): Observable<any> {
        return this.http.delete<Step>(`${this.stepUrl}/${id}`);
    }

    // Ingredient methods
    createIngredient(ingredient: Ingredient): Observable<any> {
        return this.http.post<Ingredient>(this.ingredientUrl, ingredient);
    }

    updateIngredient(ingredient: Ingredient): Observable<Ingredient> {
        return this.http.patch<Ingredient>(
            `${this.ingredientUrl}/${ingredient.id}`,
            ingredient,
        );
    }

    deleteIngredient(id: number): Observable<any> {
        return this.http.delete<Ingredient>(`${this.ingredientUrl}/${id}`);
    }
}

// Will be used for pagination
interface GetResponseRecipes {
    _embedded: {
        recipes: Recipe[];
    };
    page: {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    };
}
