import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink, CommonModule, NavbarComponent],
    template: `
        <app-navbar [showMenu]="showMenu"></app-navbar>
        <router-outlet (activate)="showMenu.set(false)"></router-outlet>
    `,
    styles: [
        `
            :host {
                max-width: 1280px;
                margin: 0 auto;
            }
        `,
    ],
})
export class AppComponent {
    showMenu = signal(false);
}
