# Deploying Spawnism Archive to GitHub Pages

This project is configured for `https://saturniantruth.github.io/spawnism/`.

1. Commit and push the contents of this folder to the `main` branch of `saturniantruth/spawnism`.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Open the repository's **Actions** tab and wait for **Deploy Spawnism Archive to GitHub Pages** to finish.
5. Visit `https://saturniantruth.github.io/spawnism/`.

The workflow installs dependencies, builds the Vite app, and publishes `dist/`. It also publishes an SPA fallback so client-side routes can load on refresh.

The Vite base path and React Router basename are both set for `/spawnism/`.

Note: this is a static GitHub Pages deployment. The archive's local article content and browser-stored bookmarks can work statically, but Base44-hosted authentication, database entities, and server functions do not become available on GitHub Pages just by building the frontend. Those features need a separately hosted backend or must remain disabled/removed.
