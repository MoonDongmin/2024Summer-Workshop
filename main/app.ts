const server = Bun.serve({
  port: 4000,
  async fetch(req) {
    const path = new URL(req.url).pathname;

    // if (path === "/") {
    //   return new Response("Welcome to Donmgin!");
    // }
    if (path === "/") {
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Donmgin!</title>
        </head>
        <body>
          <h2>한밭대학교 정보통신공학과 </h2>
          <h3>이름: 문동민</h3>
          <h4>소감: 유익합니다. 하지만 피곤합니다.</h4>
        </body>
        </html>
      `;

      return new Response(htmlContent, {
        headers: {
          "Content-Type": "text/html",
        },
      });
    }

    return new Response("Not found", { status: 404 });
  },
});

console.info(`Listen on ${server.url}`);
