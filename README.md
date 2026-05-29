# 🃏 Sansar TCG: Software Architecture Game

Un juego de cartas coleccionables (TCG) donde los elementos tradicionales son reemplazados por **Dominios de Ingeniería** y los rangos de poder se definen por el Seniority. Este proyecto funciona como un portafolio técnico avanzado que implementa arquitectura limpia y tipos estrictos.

---

## Stack

![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-Local_DB-003B57?logo=sqlite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![Execution Mode](<https://img.shields.io/badge/Rendering-Dynamic_SSR_(%C6%92)-FF4F00>)
![Quality](https://img.shields.io/badge/Code_Quality-ESLint-4B32C3?logo=eslint&logoColor=white)

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

| Dominio      | Identidad Visual | Especialidad                             |
| :----------- | :--------------- | :--------------------------------------- |
| **Quality**  | 🟣 `Púrpura`     | Testing, QA y estabilidad del entorno.   |
| **Systems**  | 🔵 `Azul Oscuro` | Diseño de Sistemas y Escalabilidad.      |
| **Frontend** | 🔷 `Azul Claro`  | UI/UX y Client-side Logic.               |
| **Backend**  | 🟢 `Verde`       | Lógica de servidor, API y Datos.         |
| **Core**     | 🟡 `Amarillo`    | Arquitectura base y Estándares.          |
| **Product**  | 🟠 `Naranja`     | Estrategia, Visión y Reglas de Negocio.  |
| **DevOps**   | 🔴 `Red-600`     | Automatización, CI/CD e Infraestructura. |

---

## Mecánicas Principales

### Niveles de Seniority

Las cartas escalan su poder y complejidad según su rango:

- **Junior**: Unidades base de despliegue rápido.
- **Mid**: Balance entre costo de energía y output.
- **Senior**: Unidades con habilidades especiales disruptivas.
- **Principal**: Cartas legendarias que definen la arquitectura del tablero.

### Atributos de Carta (`CardStats`)

1.  **Output:** El valor de entrega o daño generado por la unidad.
2.  **Uptime (Resilience):** La salud o capacidad de mantenerse activo.
3.  **Energy:** El costo de recursos necesarios para invocar la carta.

---

## Organización del Código

El proyecto sigue una estructura limpia para separar la lógica de negocio de la interfaz:

- **`src/app/`**: Sistema de rutas y layouts optimizado para Next.js 16.
- **`src/app/api/`**: Endpoints backend para el manejo del juego, las cartas y el script de inicialización (`seed/route.ts`).
- **`src/core/`**: Contiene la lógica de negocio pura, interfaces (`types.ts`), contratos de repositorio (`repository.ts`) y mappers.
- **`src/core/types.ts`**: La "fuente de verdad". Contiene los Enums de Dominios, Seniority e Interfaces de juego.
- **`src/components/ui-game/`**: Componentes visuales de alto impacto como `CardDisplay.tsx`.
- **`src/features/landing/`**: Lógica de presentación y datos mock para testing de interfaz.
- **`src/infrastructure/`**: Implementación de tecnologías externas. Aquí se gestiona la conexión a SQLite con `@libsql/client` (`sqlite-repository.ts`).

---

## Guía de Desarrollo

Para iniciar el entorno de desarrollo local:

1.  **Instalar dependencias:** `npm install`
2.  **Correr servidor:** `npm run dev`
3.  **Inicializar y Poblar la Base de Datos** (Seed):

- Al usar SQLite local (local.db), la base de datos se crea automáticamente, pero estará vacía. Debes ejecutar el script de inicialización visitando la siguiente ruta en tu navegador o cliente HTTP (Postman/Thunder Client):

```bash
http://localhost:3000/api/seed
```

Esto creará las tablas necesarias e insertará el set inicial de cartas de los Dominios de Ingeniería.

4.  **Acceder a la aplicación:** `http://localhost:3000`

- Abre http://localhost:3000 en tu navegador para ver la grilla del juego interactuando con los datos reales de la DB.
