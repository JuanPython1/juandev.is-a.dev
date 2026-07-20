# Contexto del proyecto — juandev.is-a.dev

Portafolio personal de Juan. React 18 + Vite 5 + React Router (hash router) + Tailwind CSS. Sin backend, sin TypeScript, sin tests. Gestor de paquetes: **Bun** (usar `bun`, no `npm`/`yarn`).

**Documentación completa por módulo:** [`doc/README.md`](../doc/README.md) — léela antes de tocar código si necesitas contexto de un módulo específico (routing, componentes, páginas, datos, build). El documento [`doc/08-pendientes-roadmap.md`](../doc/08-pendientes-roadmap.md) tiene la lista priorizada de lo que falta o tiene deuda técnica conocida.

## Comandos

```bash
bun install        # instalar dependencias
bun run dev          # dev server (Vite)
bun run build          # build de producción
bun run lint             # ESLint
bun run preview            # sirve el build local
bun run deploy               # build + publica a GitHub Pages (gh-pages -d dist)
```

## Cómo está organizado

- `src/router/AppRouter.jsx` — rutas: `/` (Start/Home), `/about`, `/contact`. Todo lazy-loaded.
- `src/Layout.jsx` — shell con `Nav` (header) + `Outlet` + `Footer`.
- `src/pages/` — una carpeta por página. Solo `start/` tiene contenido real; `about/` y `contact/` son placeholders "Coming Soon".
- `src/components/` — componentes reutilizables, cada uno en su propia subcarpeta con su CSS si aplica.
- `src/data/*.json` — contenido estático (proyectos, línea de tiempo). No hay CMS ni API: editar estos JSON es la forma de actualizar contenido.
- `src/lib/utils.js` — solo tiene `cn()` (clsx + tailwind-merge, patrón shadcn/ui).

## Alias de imports (Vite + jsconfig)

`@/*` → `src/*` · `@components/*` → `src/components/*` · `@lib/*` → `src/lib/*` · `@pages/*` → `src/pages/*` · `@assets/*` → `src/assets/*` · `@data/*` → `src/data/*`.

⚠️ `@hooks/*` está declarado pero `src/hooks/` **no existe todavía** — no asumas que hay hooks custom ahí.

## Convenciones observadas en el código existente

- Tema claro/oscuro: clase `dark` en `<html>` (Tailwind `darkMode: "class"`) + persistencia en `localStorage` (`ButtonThemeMode.jsx`). No hay Context de tema — si necesitas leer el tema en un componente nuevo, sigue el mismo patrón que `ContainerProject_Recent.jsx` (leer `document.documentElement.classList` o un `MutationObserver`) hasta que exista un hook centralizado.
- No hay PropTypes ni TypeScript — `react/prop-types` está desactivado en ESLint a propósito.
- Los componentes de icono/botón son ad-hoc (no hay librería de UI genérica en uso, aunque `components.json` de shadcn/ui está configurado — no instalado realmente, no asumas que existen componentes en `src/components/ui/`).
- Todas las páginas/rutas se cargan con `React.lazy()` — si agregas una página nueva, sigue el mismo patrón en `AppRouter.jsx`.

## Al trabajar en este repo

- Si completas o cambias algo que está listado en `doc/08-pendientes-roadmap.md`, actualiza ese archivo (no dejes la documentación desincronizada del código).
- Si agregas o cambias un módulo de forma significativa, actualiza el documento correspondiente en `doc/`.
- El deploy es manual (`bun run deploy`) — no hay CI/CD. No ejecutes `bun run deploy` salvo que el usuario lo pida explícitamente (publica directamente a producción).
