# Out of order streaming with Declarative Shadow Dom

This example uses Declarative Shadow Dom to [stream](https://developer.chrome.com/docs/css-ui/declarative-shadow-dom#streaming_is_cool) in content fetched from an external API without any javascript sent to the browser. Streaming is enabled on a [Hono](https://hono.dev/) server.

## Steps

The template sets the loading indicator and marks where content is supposed to be streamed in.

```html
<template shadowrootmode="open">
  <slot name="content">Loading ...</slot>
</template>
```

While this fetch swaps in data to the slot defined above.

```ts
${fetch("https://swapi.dev/api/people/1")
  .then((res) => res.json())
  .then((data) => html`<div slot="content">Content: ${data.name}</div>`)}
```

## Resources

See the original [blog post](https://lamplightdev.com/blog/2024/01/10/streaming-html-out-of-order-without-javascript/) written by Chris Haynes for more information .
