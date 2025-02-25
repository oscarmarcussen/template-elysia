FROM oven/bun:1.1.29 AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source code and build
COPY src ./src
COPY tsconfig.json ./
RUN bun build ./src/index.ts --outfile server

# Create minimal production image
FROM oven/bun:1.1.29-slim
WORKDIR /app

# Copy only what's needed to run the app
COPY --from=builder /app/server ./server
COPY --from=builder /app/node_modules ./node_modules

# Set environment and expose port
ENV NODE_ENV=production
EXPOSE 3000

# Run the app
CMD ["./server"]