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

* **Next.js (Dynamic SSR):** Renderizado híbrido optimizado. Se utiliza SSR dinámico para garantizar que el estado del tablero, las cartas del usuario y la persistencia en la base de datos se sincronicen en tiempo real sin desajustes de hidratación.
* **React y Tailwind CSS:** UI declarativa y componentes de alto impacto visual con transiciones fluidas para emular la experiencia física de un juego de cartas de mesa.
* **TypeScript (Strict Mode):** Tipado ultra-estricto para las mecánicas del juego, asegurando que los flujos de daño, coste de energía y estados de las cartas sean validados en tiempo de compilación.
* **SQLite (@libsql/client):** Base de datos embebida y ligera para gestionar el inventario, perfiles de jugador y sets de cartas de forma local, simulando un entorno productivo sin sobrecarga de infraestructura.

### Dominios del Juego (Roles)

El set de cartas se segmenta en **7 Dominios principales**, cada uno con una identidad visual única y una especialidad mecánica orientada al producto:

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

El balance del juego escala orgánicamente a través de rangos de seniority, afectando directamente la curva de coste y beneficio:

- **Junior**: Unidades base de despliegue rápido, bajo coste de energía y output moderado.
- **Mid**: Balance óptimo entre coste de recursos y rendimiento en el tablero.
- **Senior**: Unidades con habilidades especiales disruptivas que alteran las reglas del entorno (por ejemplo, mitigar downtime).
- **Principal**: Cartas legendarias de alto coste orientadas a definir y sostener la arquitectura del tablero completo.

### Atributos de Carta (`CardStats`)

Cada carta cuenta con tres métricas clave que dictan su valor en el tablero:

1. **Output:** El valor de entrega o daño generado por la unidad al interactuar.
2. **Uptime (Resilience):** La salud o tolerancia a fallos de la carta antes de ser destruida o removida del entorno.
3. **Energy:** El costo de infraestructura o recursos requeridos para invocar la carta.

---

## Arquitectura y Organización del Código

El proyecto implementa los principios de **Clean Architecture**, aislando por completo las reglas de negocio de los detalles de la infraestructura o el framework.

- `src/core/` **(Reglas de Negocio):** Es la "fuente de verdad" agnóstica al framework. Contiene las interfaces base (`types.ts`), mappers y los contratos de repositorios (`repository.ts`). Si Next.js fuera reemplazado en el futuro, esta capa permanecería intacta.

- `src/infrastructure/` **(Detalles de Implementación):** Implementa los contratos del core. Aquí reside la conexión y consultas a la base de datos SQLite mediante el cliente de LibSQL (`sqlite-repository.ts`).

- `src/features/` & `src/components/` **(Capa de Presentación):** Componentes visuales desacoplados y modulares (como `CardDisplay.tsx`) que consumen el estado del juego de forma predictiva.

- **`src/app/`**: Sistema de rutas y layouts optimizado para Next.js 16.
- **`src/app/api/`**: Endpoints backend para el manejo del juego, las cartas y el script de inicialización (`seed/route.ts`).
- **`src/components/ui-game/`**: Componentes visuales de alto impacto como `CardDisplay.tsx`.

---

## Inicialización del Entorno Local

### Requisitos Previos

Configurar las variables de entorno creando un archivo `.env` en la raíz del proyecto basándose en las necesidades de su infraestructura:

```env
PORT=3000
DATABASE_URL=file:local.db
```

1.  **Instalar dependencias:** `npm install`
2.  **Ejecución del entorno de desarrollo:** `npm run dev`
3.  **Aprovisionamiento de Datos (Seeding):**

- Para poblar la base de datos local SQLite con el set inicial de cartas balanceadas y dominios, el proyecto expone un endpoint seguro de inicialización. Ejecute un trigger HTTP (GET) mediante su cliente de preferencia o navegador utilizando el puerto parametrizado:

```bash
GET http://localhost:${PORT}/api/seed
```

Esto creará las tablas necesarias e insertará el set inicial de cartas de los Dominios de Ingeniería.

4.  **Acceder a la aplicación:** `http://localhost:${PORT}`

Una vez inicializada la base de datos, la aplicación interactuará en tiempo real con el almacenamiento local desde:
