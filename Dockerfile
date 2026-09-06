# ===============================
# 🛠 Étape 1 : Build SvelteKit
# ===============================
FROM node:20-slim AS builder

WORKDIR /app

# Install deps
COPY package.json package-lock.json ./
RUN npm ci

# Copy code
COPY . .

# Build SvelteKit (Node adapter)
RUN npm run build

# ===============================
# 🚀 Étape 2 : Runner
# ===============================
FROM node:20-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# adapter-node bundles the runtime: no node_modules are needed in this image.
COPY --from=builder /app/build ./build

EXPOSE 3000

USER node

CMD ["node", "build/index.js"]
