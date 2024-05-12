import { html } from "swtl";
import { globalStyles, appStyles } from "../utils.js";

export const template = () => html` <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      ${globalStyles()}
    </head>
    <body>
      <div>
        <template shadowrootmode="open">
          ${appStyles()}
          <header>
            <h1>Out of order streaming without JavaScript</h1>
          </header>
          <main>
            <slot name="list">Loading content...</slot>
          </main>
          <footer>Footer</footer>
        </template>

        ${fetch("https://swapi.dev/api/people/1")
          .then((res) => res.json())
          .then((data) => html`<div slot="list">Content: ${data.name}</div>`)}
      </div>
    </body>
  </html>`;
