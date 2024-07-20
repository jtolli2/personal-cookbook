import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterLink],
    template: `
        <header
            class="relative h-[100vh] before:bg-hero before:bg-cover before:bg-center before:bg-no-repeat before:absolute before:inset-0 before:opacity-80"
        >
            <div class="relative top-[40%] flex flex-col items-center gap-5">
                <h1 class="text-white">Personal Cookbook</h1>
                <p class="text-lg">A home for all of your recipes!</p>
                <button routerLink="/recipes">Get Started</button>
            </div>
        </header>
    `,
})
export default class HomePage {}
