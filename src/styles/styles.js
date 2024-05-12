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
