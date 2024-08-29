const server = Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/") {
      return new Response("Welcome to Bun!");
    }

    return new Response("Not found", { status: 404 });
  },
});

console.info(`Listen on ${server.url}`);
