import { Hono } from "hono";
import { stream } from "hono/streaming";
import { serve } from "@hono/node-server";
import { render } from "swtl";

import { createReadableStreamFromAsyncGenerator } from "./utils.js";
import { template } from "./templates/template.js";

const app = new Hono();

app.get("/", (ctx) => {
  return stream(ctx, async (stream) => {
    ctx.res.headers.set("Content-Type", "text/html");
    await stream.pipe(createReadableStreamFromAsyncGenerator(render(template())));
  });
});

serve(app);
