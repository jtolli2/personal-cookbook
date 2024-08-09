import { Component, HostListener, OnDestroy, signal } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, CommonModule],
    inputs: ['scrolled', 'showMenu'],
    template: `
        <nav
            class="fixed top-0 left-0 w-full z-10 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md transition-colors ease-in duration-300"
            [ngClass]="{
                'bg-opacity-0 dark:bg-opacity-0 shadow-none':
                    !scrolled() && !showMenu(),
                'bg-opacity-95 dark:bg-opacity-95': scrolled(),
            }"
        >
            <!-- Navbar -->
            <div
                class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-inherit"
            >
                <!-- Logo -->
                <a [routerLink]="['/']" class="flex items-center">
                    <!-- <img src="/analog.svg" class="h-8 mr-3" alt="Analog Logo" /> -->
                    <i class="fas fa-book fa-2x pr-2 text-tint-dark"></i>
                    <span
                        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                        >Cookbook</span
                    >
                </a>

                <!-- Hamburger -->
                <button
                    (click)="toggleNavbar()"
                    class="bg-inherit"
                    type="button"
                >
                    <span class="sr-only">Open main menu</span>
                    <i
                        class="fas size-4 {{
                            showMenu()
                                ? 'fa-times transition-transform duration-300 rotate-90'
                                : 'fa-bars transition-transform duration-200 rotate-180'
                        }}"
                    ></i>
                </button>

                <!-- Menu -->
                <div
                    class="fixed left-0 top-0 h-full w-64 bg-inherit shadow-md transition-transform transform ease-in-out duration-300 {{
                        showMenu() ? 'translate-x-0' : '-translate-x-full'
                    }}"
                >
                    <!-- Links -->
                    <div class="flex flex-col">
                        <!-- Link -->
                        <a
                            *ngFor="let route of routesMap | keyvalue"
                            class="flex w-full pl-4 py-7 dark:border-b-tint-dark border-b-[1px] last:dark:border-b-0 hover:bg-white hover:bg-opacity-5 {{
                                isActive(route.key)
                                    ? 'bg-white bg-opacity-5'
                                    : ''
                            }}"
                            routerLink="{{ route.key }}"
                            (click)="toggleNavbar()"
                            >{{ route.value }}</a
                        >
                    </div>

                    <!-- CTA -->
                    <!-- <a
                        class="h-12 w-full p-2 hover:bg-white hover:bg-opacity-5"
                        href="https://analogjs.org"
                        target="_blank"
                        >Analog</a
                    > -->

                    <!-- Theme Toggle -->
                </div>
            </div>
        </nav>
    `,
})
export class NavbarComponent {
    showMenu = signal(false);
    scrolled = signal(false);

    routesMap = {
        '/home': 'Home',
        '/recipes': 'Recipes',
    };

    constructor(private router: Router) {}

    toggleNavbar() {
        this.showMenu.update((show) => !show);
    }

    @HostListener('window:scroll', ['$event'])
    onScroll($event: Event) {
        if (window.scrollY > 10) {
            this.scrolled.set(true);
        } else {
            this.scrolled.set(false);
        }
    }

    isActive(route: string) {
        return this.router.isActive(route, {
            paths: 'exact',
            queryParams: 'exact',
            fragment: 'ignored',
            matrixParams: 'ignored',
        });
    }
}
