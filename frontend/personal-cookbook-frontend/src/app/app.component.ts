import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/navbar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent],
    template: `
        <!-- navbar -->
        <app-navbar [showMenu]="showMenu"></app-navbar>

        <!-- div container used to listen for click events outside of the navbar -->
        <div #outside (click)="showMenu.set(false)">
            <router-outlet></router-outlet>
        </div>
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
