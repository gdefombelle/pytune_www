# PyTune Web

Frontend SSR de la plateforme PyTune, basé sur **SvelteKit** et **Vite**.

## 🚀 Structure

- SSR via `@sveltejs/adapter-node`
- Build avec Docker multi-stage
- Variables d'environnement dynamiques via `import.meta.env`

## 🌐 Variables d'environnement

Dans `.env.production` (copié pendant le build Docker) :

