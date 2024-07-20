import { Component } from '@angular/core';

@Component({
    selector: 'test',
    standalone: true,
    template: `
        <h1>Test Page</h1>

        <p>This is a test page.</p>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            illo doloribus vel vitae dicta praesentium voluptate impedit nostrum
            aut eveniet obcaecati, beatae culpa perspiciatis debitis commodi
            placeat vero veritatis ipsa laudantium minima, sunt facere aliquid
            suscipit dolorem? Quibusdam, quisquam quia animi iusto reprehenderit
            dolorem ex dolorum fugiat cum libero laudantium fugit explicabo
            repudiandae obcaecati nesciunt praesentium et aliquid velit
            voluptatum possimus quas sed deserunt necessitatibus rem! Corrupti
            molestias impedit earum et veritatis consequuntur, animi magnam
            ducimus similique nam architecto soluta optio fugiat quos officiis
            voluptates doloremque commodi nulla! Doloribus nihil accusamus hic
            officiis qui quos laborum repellat blanditiis est! Aut!
        </p>

        <p>From Vite: {{ test }}</p>

        <p>Also from Vite: {{ url }}</p>
    `,
})
export default class TestPage {
    test = import.meta.env.VITE_TEST;
    url = process.env['API_URL'];
}
