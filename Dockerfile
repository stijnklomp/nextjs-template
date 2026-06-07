FROM oven/bun:alpine AS deps
WORKDIR /app
COPY bun.lock package.json ./
RUN bun install --frozen-lockfile --ignore-scripts

FROM oven/bun:alpine AS builder
WORKDIR /app
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM oven/bun:alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN adduser --system --uid 1001 --ingroup bun nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:bun /app/.next/standalone ./
COPY --from=builder --chown=nextjs:bun /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["bun", "server.js"]
