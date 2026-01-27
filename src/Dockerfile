# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Stage 2: Run
FROM node:18-alpine

WORKDIR /app

# Copy node_modules and source from build
COPY --from=build /app ./

# Use non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
