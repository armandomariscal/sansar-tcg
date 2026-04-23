# 🃏 Sansar TCG: Software Architecture Game

Un juego de cartas coleccionables (TCG) donde los elementos tradicionales son reemplazados por **Dominios de Ingeniería** y los rangos de poder se definen por el Seniority. Este proyecto funciona como un portafolio técnico avanzado que implementa arquitectura limpia y tipos estrictos.

---

## Arquitectura

Flujo principal de datos:

UI (App Router)
- `domain/[domain]/page.tsx`
- `core/domain-mapper.ts` (slug → Domain enum)
- `core/repository.ts` (contrato)
- `infrastructure/get-repository.ts` (factory)
- `infrastructure/sqlite-repository.ts` (implementación)
- SQLite (`local.db`) o mocks

Principios:
- Separación dominio / infraestructura
- Tipado estricto (no strings libres en runtime)
- Repositorio intercambiable (mock ↔ SQLite)

---

## Tech Stack

* **Framework:** Next.js 16.1.6 (con React 19)
* **Motor de Render:** Turbopack
* **Estilos:** Tailwind CSS v4
* **Lenguaje:** TypeScript 5 (Strict Typing)
* **Arquitectura:** Domain-Driven Design (DDD) modular

```bash
.
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   └── ui-game
│   │       └── CardDisplay.tsx
│   ├── core
│   │   └── types.ts
│   └── features
│       └── landing
│           └── mock-cards.ts
└── tsconfig.json
```
---

## Dominios del Juego (Roles)

El juego se divide en **7 Dominios principales**, cada uno con una identidad visual y rol mecánico específico:

| Dominio | Identidad Visual | Especialidad |
| :--- | :--- | :--- |
| **Quality** | `Púrpura` | Testing, QA y estabilidad del entorno. |
| **Systems** | `Azul Oscuro` | Diseño de Sistemas y Escalabilidad. |
| **Frontend** | `Azul Claro` | UI/UX y Client-side Logic. |
| **Backend** | `Verde` | Lógica de servidor, API y Datos. |
| **Core** | `Amarillo` | Arquitectura base y Estándares. |
| **Product** | `Naranja` | Estrategia, Visión y Reglas de Negocio. |
| **DevOps** | `Red-600` | Automatización, CI/CD e Infraestructura. |

---

## Mecánicas Principales

### Niveles de Seniority
Las cartas escalan su poder y complejidad según su rango:
* **Junior**: Unidades base de despliegue rápido.
* **Mid**: Balance entre costo de energía y output.
* **Senior**: Unidades con habilidades especiales disruptivas.
* **Principal**: Cartas legendarias que definen la arquitectura del tablero.

### Atributos de Carta (`CardStats`)
1.  **Output:** El valor de entrega o daño generado por la unidad.
2.  **Uptime (Resilience):** La salud o capacidad de mantenerse activo.
3.  **Energy:** El costo de recursos necesarios para invocar la carta.

---

## Organización del Código

El proyecto sigue una estructura limpia para separar la lógica de negocio de la interfaz:

* **`src/core/types.ts`**: La "fuente de verdad". Contiene los Enums de Dominios, Seniority e Interfaces de juego.
* **`src/components/ui-game/`**: Componentes visuales de alto impacto como `CardDisplay.tsx`.
* **`src/features/landing/`**: Lógica de presentación y datos mock para testing de interfaz.
* **`src/app/`**: Sistema de rutas y layouts optimizado para Next.js 16.

---

## Guía de Desarrollo

Para iniciar el entorno de desarrollo local:

1.  **Instalar dependencias:** `npm install`
2.  **Correr servidor:** `npm run dev`
3.  **Acceder a:** `http://localhost:3000`
