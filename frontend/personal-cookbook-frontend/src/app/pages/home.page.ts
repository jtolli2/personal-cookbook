import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    template: ` <router-outlet></router-outlet> `,
})
export default class HomeLayout {}
