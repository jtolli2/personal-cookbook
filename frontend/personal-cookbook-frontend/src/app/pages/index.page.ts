import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterOutlet],
    template: `
        <div>
            <a href="https://analogjs.org/" target="_blank">
                <img alt="Analog Logo" class="logo analog" src="/analog.svg" />
            </a>
        </div>

        <h2>Analog</h2>

        <h3>The fullstack meta-framework for Angular!</h3>

        <div class="card">
            <button type="button" (click)="increment()">
                Count {{ count() }}
            </button>
        </div>

        <p class="read-the-docs">
            For guides on how to customize this project, visit the
            <a href="https://analogjs.org" target="_blank"
                >Analog documentation</a
            >
        </p>

        <router-outlet></router-outlet>
    `,
    styles: [
        `
            .logo {
                will-change: filter;
            }
            .logo:hover {
                filter: drop-shadow(0 0 2em #646cffaa);
            }
            .read-the-docs {
                color: #888;
            }
        `,
    ],
})
export default class HomeComponent {
    count = signal(0);

    increment() {
        this.count.update((count) => count + 1);
    }
}
