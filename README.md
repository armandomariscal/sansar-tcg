# 🃏 Sansar TCG: Software Architecture Game

🌐 **Language / Idioma:** English | [Leer en Español](./README.es.md)

A Trading Card Game (TCG) where traditional mechanics are replaced by **Engineering Domains** and power rankings are defined by Seniority. This project serves as an advanced technical portfolio implementing clean architecture and strict typing.

---

## Stack

![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Local_DB-003B57?logo=sqlite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![Execution Mode](<https://img.shields.io/badge/Rendering-Dynamic_SSR_(%C6%92)-FF4F00>)
![Quality](https://img.shields.io/badge/Code_Quality-ESLint-4B32C3?logo=eslint&logoColor=white)

- **Next.js (Dynamic SSR):** Optimized hybrid rendering. Dynamic SSR is leveraged to ensure that board state, user cards, and database persistence remain synchronized in real-time without hydration mismatches.
- **React & Tailwind CSS:** Declarative UI paired with high-impact visual components featuring smooth transitions to emulate the physical experience of a tabletop card game.
- **TypeScript (Strict Mode):** Ultra-strict typing governing game mechanics, ensuring that damage calculations, energy costs, and card states are fully validated at compile time.
- **SQLite (@libsql/client):** A lightweight, embedded database utilized to manage inventory, player profiles, and card sets locally, simulating a production environment without infrastructural overhead.

### Game Domains (Roles)

The card set is segmented into **7 Core Domains**, each featuring a unique visual identity and a product-oriented mechanical specialty:

| Domain       | Visual Identity | Mechanical Specialty & Product Focus                                                       |
| :----------- | :-------------- | :----------------------------------------------------------------------------------------- |
| **Quality**  | 🟣 `Purple`     | Testing, QA, and environment stability. Mitigates damage and safeguards Uptime.            |
| **Systems**  | 🔵 `Dark Blue`  | Systems Design and high-scale scalability. Provides structural resilience.                 |
| **Frontend** | 🔷 `Light Blue` | UI/UX and client-side logic. Dictates board state manipulation and flow control.           |
| **Backend**  | 🟢 `Green`      | Server-side logic, APIs, and data lifecycle management. Drives resource generation.        |
| **Core**     | 🟡 `Yellow`     | Base architecture and engineering standards. Multiplies card synergies across the board.   |
| **Product**  | 🟠 `Orange`     | Strategy, vision, and core business rules. Alters objectives and victory conditions.       |
| **DevOps**   | 🔴 `Red-600`    | Automation, CI/CD, and infrastructure. Optimizes Energy costs and accelerates deployments. |

---

## Core Game Mechanics

### Seniority Metrics

Game balance scales organically through seniority tiers, directly shaping the resource-to-value performance curve:

- **Junior**: Fast-deployment base units with minimal energy overhead and optimized output footprint.
- **Mid**: Optimal equilibrium between resource footprint and on-board performance.
- **Senior**: Disruptive units featuring specialized domain hooks that alter environment conditions (e.g., downtime mitigation).
- **Principal**: High-cost legendary assets engineered to anchor and sustain entire board-state architectures.

### Card Attributes (`CardStats`)

Every card token exposes three runtime metrics that dictate its tactical value on the board:

1. **Output:** The absolute delivery throughput or performance damage generated during interactions.
2. **Uptime (Resilience):** Fault tolerance and system health threshold before a card drops or gets pruned from the cluster.
3. **Energy:** Infrastructure overhead and operational resources required to spin up and commit the asset.

---

## Architectural Patterns & Codebase Layout

The platform relies strictly on **Clean Architecture** patterns, achieving absolute decoupling between core business requirements, external infrastructure dependencies, and the UI framework layer.

- `src/core/` **(Enterprise Business Rules):** The framework-agnostic "source of truth." It encapsulates core domain interfaces (`types.ts`), data mappers, and repository abstractions (`repository.ts`). If the underlying web framework (Next.js) were to be swapped or deprecated, this boundary layer remains completely untouched.

- `src/infrastructure/` **(Implementation Details):** Implements the contracts defined by the core layer. This is where the local SQLite persistence engine lives, managed via the LibSQL client driver (`sqlite-repository.ts`).

- `src/features/` & `src/components/` **(Presentation Boundary):** Highly decoupled, modular UI units (such as `CardDisplay.tsx`) that handle visual state mechanics and ingest the game engine status predictably.

- **`src/app/`**: Unified routing and structural layout matrix optimized for Next.js 16.
- **`src/app/api/`**: Serverless backend endpoints managing runtime game sessions, card states, and the idempotency seeding routine (`seed/route.ts`).
- **`src/components/ui-game/`**: High-fidelity visual components engineered for complex board-state interactions (e.g., `CardDisplay.tsx`).

---

## Environment Setup & Local Provisioning

### Prerequisites & Configuration

Initialize your environment variables by instantiating a `.env` file at the project root. Configure your network topology and database path according to your infrastructure requirements:

```env
PORT=your_configured_port
NEXT_PUBLIC_APP_URL=http://localhost:${PORT}
DATABASE_URL=file:local.db
```

1.  **Package Installation: Initialize and pull locked workspace dependencies:** `npm install`
2.  **Spin Up Development Server: Boot up the local runtime compilation server:** `npm run dev`
3.  **Database Schema Hydration (Idempotent Seeding):**

- The application leverages a local SQLite instance (`local.db`) initialized on the fly. To scaffold the relational schema and populate it with the baseline balanced engineering domain dataset, execute a targeted HTTP `GET` request using your preferred API client or browser instance:

```bash
GET ${NEXT_PUBLIC_APP_URL}/api/seed
```

This operation automates data layout creation and executes bulk transactional inserts for the initial Engineering Domain card catalog.

4.  **Application Runtime Verification:**

Once the storage layer is fully hydrated, the reactive frontend grid interfaces natively with real-time server-side state. Access the deployed client at:

```bash
${NEXT_PUBLIC_APP_URL}
```
