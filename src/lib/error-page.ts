export function renderErrorPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Server Error</title>
  <style>
    body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #f5f5f5; color: #333; }
    .container { text-align: center; padding: 2rem; }
    h1 { font-size: 2rem; color: #e53e3e; margin-bottom: 0.5rem; }
    p { color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <h1>500 — Server Error</h1>
    <p>Something went wrong. Please try again later.</p>
  </div>
</body>
</html>`
}
