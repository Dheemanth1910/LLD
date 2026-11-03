# TS Backend: Design Patterns Playground

A TypeScript + Express backend for learning and testing Low-Level Design (LLD) patterns. Each pattern is implemented in its own folder and exposed through an HTTP route, so you can run the server and hit an endpoint to see the pattern in action.

## Patterns Implemented

| Pattern | Folder | Type |
| --- | --- | --- |
| Factory | `src/factory-pattern` | Creational |
| Abstract Factory | `src/abstract-factory-pattern` | Creational |
| Observer | `src/observer-pattern` | Behavioral |

## Project Structure

```
ts-backend/
├── src/
│   ├── abstract-factory-pattern/   # Abstract Factory implementation
│   ├── factory-pattern/            # Factory implementation
│   ├── observer-pattern/           # Observer implementation
│   ├── middlewares/                # Express middlewares (e.g. error handler)
│   ├── routes/
│   │   ├── design.route.ts         # /design/<pattern> routes that trigger each pattern
│   │   ├── health.routes.ts        # /health check
│   │   └── index.route.ts          # Combines and mounts all routes
│   ├── app.ts                      # Express app setup
│   └── server.ts                   # Entry point (starts the server)
├── script.sh                       # Project scaffolding script
├── .env.example                    # Sample environment variables
├── package.json
└── tsconfig.json
```

## Prerequisites

- Node.js 20+
- npm

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create your environment file:

   ```bash
   cp .env.example .env
   ```

   On Windows (Command Prompt): `copy .env.example .env`

3. Start the development server:

   ```bash
   npm run dev
   ```

The server starts on `http://localhost:3000` by default (configurable via `PORT` in `.env`).

## Testing a Pattern

Every pattern is exposed under the `/design` route:

```
GET http://localhost:3000/design/<pattern>
```

Replace `<pattern>` with the pattern you want to run. For example:

| Pattern | Endpoint |
| --- | --- |
| Factory | `/design/factory` |
| Abstract Factory | `/design/abstract-factory` |
| Observer | `/design/observer` |

Hit the endpoint in your browser, Postman, or curl:

```bash
curl http://localhost:3000/design/factory
```

The response (and the server console logs) show the pattern running end to end, for example which concrete class the factory created, or which observers reacted to an event.

You can also confirm the server is up with:

```bash
curl http://localhost:3000/health
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Run the server in watch mode for development |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run the compiled build from `dist/` |

## Adding a New Pattern

1. Create a new folder under `src/` (e.g. `src/strategy-pattern/`) with the interfaces and implementations.
2. Add a handler for it in `src/routes/design.route.ts` so it is reachable at `/design/<pattern>`.
3. Add a row to the table above.

## Tech Stack

- Node.js
- TypeScript
- Express
