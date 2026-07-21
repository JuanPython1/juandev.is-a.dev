# 01 — Arquitectura general

## Stack tecnológico

| Categoría | Tecnología | Versión | Uso |
|---|---|---|---|
| UI | React | 18.3.1 | Librería principal de interfaz |
| Build tool | Vite | 5.3.1 | Dev server + bundler |
| Compilador React | `@vitejs/plugin-react-swc` | 3.5 | Transformación JSX vía SWC (más rápido que Babel) |
| Routing | React Router DOM | 6.26 | Rutas SPA con `createHashRouter` |
| Estilos | Tailwind CSS | 3.4 | Utilidades CSS + `tailwindcss-animate` |
| Iconos | `lucide-react`, `react-icons` | — | Iconografía de UI y stacks tecnológicos |
| Utilidades de clases | `clsx` + `tailwind-merge` | — | Helper `cn()` estilo shadcn/ui |
| i18n | `i18next` + `react-i18next` + `i18next-browser-languagedetector` | — | Traducción EN/ES, ver sección [i18n](#i18n) |
| UI Kit (preparado, no usado) | `components.json` (shadcn/ui) + `@radix-ui/react-navigation-menu` | — | Ver nota en [08-pendientes-roadmap.md](08-pendientes-roadmap.md) |
| Gestor de paquetes | Bun | — | `bun.lockb` presente |
| Deploy | `gh-pages` | 6.3 | Publica `dist/` a GitHub Pages |
| Linter | ESLint 8 + plugins de React | — | `.eslintrc.cjs` |

No hay TypeScript real: el proyecto es JSX puro. `jsconfig.json` existe solo para dar autocompletado/IntelliSense de los alias de import en el editor (y hay `@types/react` como dev dependency para el tipado de IntelliSense).

## Estructura de carpetas

```
├── public/                    # Estáticos servidos tal cual
│   ├── iconSvg/                # SVGs de tecnologías (html5, css, js, ts, react, mysql, nextjs, firebase, expo, supabase, claude)
│   └── imgProjects/             # Capturas de proyectos (para las cards de "Recent Projects")
├── src/
│   ├── main.jsx                 # Punto de entrada de la app (ReactDOM.createRoot)
│   ├── Layout.jsx                # Shell visual: Nav + Outlet + Footer
│   ├── Loading.jsx               # Fallback de Suspense (placeholder vacío)
│   ├── index.css                  # Estilos globales, fuentes, clases de animación
│   ├── i18n/
│   │   ├── index.js                 # Config de i18next (detección de idioma + init)
│   │   └── locales/{en,es}/translation.json  # Diccionarios de textos
│   ├── router/
│   │   └── AppRouter.jsx           # Definición de rutas (hash router) + lazy loading
│   ├── pages/
│   │   ├── start/                   # Página Home ("/")
│   │   ├── about/                    # Página About ("/about") — placeholder
│   │   └── contact/                  # Página Contact ("/contact") — placeholder
│   ├── components/                 # Componentes reutilizables entre páginas
│   ├── data/                        # JSON estáticos que alimentan la UI
│   ├── lib/
│   │   └── utils.js                  # Helper `cn()` (clsx + tailwind-merge)
│   └── assets/                      # Fuentes e imágenes propias del código fuente
└── vite.config.js / tailwind.config.js / jsconfig.json / components.json
```

Detalle completo de cada módulo en los documentos [02](02-routing.md) a [06](06-datos.md).

## Alias de imports

Definidos tanto en `vite.config.js` (para que el bundler los resuelva) como en `jsconfig.json` (para autocompletado del editor):

| Alias | Apunta a |
|---|---|
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@lib/*` | `src/lib/*` |
| `@pages/*` | `src/pages/*` |
| `@assets/*` | `src/assets/*` |
| `@data/*` | `src/data/*` |
| `@hooks/*` | `src/hooks/*` ⚠️ **carpeta inexistente** — ver [08-pendientes-roadmap.md](08-pendientes-roadmap.md) |

## Flujo de arranque

```
index.html
  └─ src/main.jsx
       └─ <AppRouter />                     (src/router/AppRouter.jsx)
            └─ createHashRouter + RouterProvider
                 └─ <Layout />                (src/Layout.jsx)
                      ├─ <Nav />                (header fijo, siempre visible)
                      ├─ <Suspense fallback={<Loading />}>
                      │     └─ <Outlet />         → Start | About | Contact, según ruta
                      └─ <Footer />
```

Todas las páginas y el propio `Layout` se cargan con `React.lazy()` — cada ruta es un chunk separado que Vite parte automáticamente en el build.

## i18n

Soporta inglés (`en`, idioma por defecto) y español (`es`). Configuración en [`src/i18n/index.js`](../src/i18n/index.js), importada una sola vez en `main.jsx` antes de montar la app.

- **Detección**: `i18next-browser-languagedetector` primero busca el idioma guardado en `localStorage` (clave `language`) y, si no hay ninguno, usa `navigator.language` del navegador del usuario. `load: 'languageOnly'` normaliza variantes regionales (`es-CO`, `en-GB`, etc.) a `es`/`en`.
- **Persistencia**: al cambiar de idioma con el botón [`ButtonLanguage`](04-componentes.md#buttonlanguagebuttonlanguagejsx), `i18next-browser-languagedetector` guarda la elección en `localStorage` automáticamente.
- **Textos**: todo el contenido traducible vive en `src/i18n/locales/{en,es}/translation.json`, consumido por componentes vía el hook `useTranslation()` de `react-i18next` (`t('clave.anidada')`).
- **Datos + i18n**: `Projects.json` y `Trajectory.json` (en `src/data/`) ya **no** contienen textos traducibles (título, descripción) — solo datos estructurales (ids, años, imágenes, íconos, links). Los textos correspondientes se buscan en las traducciones usando el `id` del proyecto o el `year` del evento como clave (p. ej. `projects.items.juandev-website.title`, `trajectory.2018.description`).
