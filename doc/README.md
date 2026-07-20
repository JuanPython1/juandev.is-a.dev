# Documentación — juandev.is-a.dev

Portafolio personal de Juan, construido con **React 18 + Vite**. Esta carpeta documenta el proyecto por módulos: qué hace cada uno, cómo se conecta con el resto, y qué falta por completar.

> Esta documentación está pensada tanto para humanos como para que **Claude Code** (u otras IAs) tengan contexto completo del proyecto sin tener que releer todo el código fuente. Ver también [`.claude/CLAUDE.md`](../.claude/CLAUDE.md) en la raíz del repo.

## Índice

| Documento | Contenido |
|---|---|
| [01-arquitectura.md](01-arquitectura.md) | Stack tecnológico, estructura de carpetas, alias de imports, flujo de arranque |
| [02-routing.md](02-routing.md) | Sistema de rutas (`AppRouter`), lazy loading, ruta 404 |
| [03-layout-y-tema.md](03-layout-y-tema.md) | `Layout`, `Loading`, sistema de tema claro/oscuro |
| [04-componentes.md](04-componentes.md) | Componentes reutilizables (`Nav`, `Footer`, botones, iconos, cards) |
| [05-paginas.md](05-paginas.md) | Páginas de la app: Start (Home), About, Contact |
| [06-datos.md](06-datos.md) | Fuentes de datos estáticas (`Projects.json`, `Trajectory.json`) |
| [07-configuracion-build.md](07-configuracion-build.md) | Vite, Tailwind, ESLint, alias de rutas, deploy a GitHub Pages |
| [08-pendientes-roadmap.md](08-pendientes-roadmap.md) | **Qué falta**: features incompletas, deuda técnica, bugs conocidos |

## Resumen rápido del proyecto

- **Qué es:** portafolio personal (home / about / contact) desplegado en `https://juandev.is-a.dev`.
- **Stack:** React 18.3 + Vite 5 (SWC) + React Router DOM 6 (hash router) + Tailwind CSS 3.4.
- **Gestor de paquetes:** Bun (`bun.lockb`).
- **Estado general:** la página **Start (Home)** está completa (hero, cubo 3D de stacks, proyectos recientes, línea de tiempo). Las páginas **About** y **Contact** son placeholders ("Coming Soon"). El botón de idioma también es un placeholder.

Para el detalle de cada pieza, entra al documento correspondiente en la tabla de arriba. Para la lista priorizada de trabajo pendiente, ve directo a [08-pendientes-roadmap.md](08-pendientes-roadmap.md).
