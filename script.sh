#!/usr/bin/env bash
set -euo pipefail

# ── Usage ────────────────────────────────────────────────────────
# ./scaffold-ts-backend.sh <project-name>
# Example: ./scaffold-ts-backend.sh my-api

PROJECT_NAME="${1:-ts-backend}"

echo "Scaffolding TypeScript backend: $PROJECT_NAME"

mkdir -p "$PROJECT_NAME"
cd "$PROJECT_NAME"

# ── Folder structure ────────────────────────────────────────────
mkdir -p src/{config,controllers,routes,services,models,middlewares,utils,types}

# ── package.json ─────────────────────────────────────────────────
cat > package.json <<EOF
{
  "name": "$PROJECT_NAME",
  "version": "1.0.0",
  "description": "",
  "main": "dist/server.js",
  "scripts": {
    "dev": "nodemon --watch src --exec tsx src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "lint": "eslint src --ext .ts"
  },
  "keywords": [],
  "license": "ISC"
}
EOF

# ── tsconfig.json ────────────────────────────────────────────────
cat > tsconfig.json <<EOF
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}
EOF

# ── .env.example ─────────────────────────────────────────────────
cat > .env.example <<EOF
PORT=3000
MONGODB_URI=mongodb://localhost:27017/$PROJECT_NAME
NODE_ENV=development
EOF

# ── .gitignore ───────────────────────────────────────────────────
cat > .gitignore <<EOF
node_modules/
dist/
.env
*.log
EOF



# ── src/middlewares/errorHandler.ts ─────────────────────────────
cat > src/middlewares/errorHandler.ts <<EOF
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
};
EOF

# ── src/routes/health.routes.ts ─────────────────────────────────
cat > src/routes/health.routes.ts <<EOF
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

export default router;
EOF

# ── src/app.ts ───────────────────────────────────────────────────
cat > src/app.ts <<EOF
import express, { Application } from "express";
import healthRoutes from "./routes/health.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app: Application = express();

app.use(express.json());

app.use("/health", healthRoutes);

app.use(errorHandler);

export default app;
EOF

# ── src/server.ts ────────────────────────────────────────────────
cat > src/server.ts <<EOF
import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectDB } from "./config/db";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
  });
};

startServer();
EOF

# ── Install dependencies ─────────────────────────────────────────
echo "Installing dependencies..."
npm init -y > /dev/null 2>&1 || true
npm install -D typescript tsx nodemon @types/node @types/express eslint

echo ""
echo "Done. Project created at ./$PROJECT_NAME"
echo "Next steps:"
echo "  cd $PROJECT_NAME"
echo "  cp .env.example .env"
echo "  npm run dev"