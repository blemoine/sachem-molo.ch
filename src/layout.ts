import * as Vue from 'vue';

export const layout = Vue.component('layout', {
    template: `
        <div class="page">
        <header>
            <h3>{{ message }}</h3>
            <div>
                    NAVIGATION BAR
            </div>
        </header>
        <section>
            <div>LEFT BAR</div>
            <div>RIGHT CONTENT</div>
        </section>
        <footer>
                LINK TO MENTION LEGAL
        </footer>
        </div>
    `,
    data: () => ({
        message: 'You loaded this page on ' + new Date()
    })
});
