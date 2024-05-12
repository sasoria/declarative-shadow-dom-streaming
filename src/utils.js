import { render, html } from "swtl";

export const globalStyles = () => html`
  <style>
    :root {
      --color-primary: #2d3748;
      --color-secondary: #ffc60d;
    }
  </style>
`;

export const appStyles = () => html`
  <style>
    header,
    main,
    footer {
      padding: 1rem;
    }

    header,
    footer {
      background-color: var(--color-primary);
      color: white;
    }

    header {
      h1 {
        margin: 0;
        font-size: 1.5rem;
      }
    }
  </style>
`;

const encoder = new TextEncoder();

export function createReadableStreamFromAsyncGenerator(output) {
  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await output.next();

        if (done) {
          controller.close();
          break;
        }

        controller.enqueue(encoder.encode(value));
      }
    },
  });
}
