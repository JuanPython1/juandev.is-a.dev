# 07 — Configuración de build, estilos y deploy

## Vite — [`vite.config.js`](../vite.config.js)

- Plugin `@vitejs/plugin-react-swc` (JSX vía SWC).
- `base: 'https://juandev.is-a.dev'` ⚠️ — normalmente la opción `base` de Vite espera una **ruta** (`'/'`, `'/subpath/'`), no una URL absoluta completa. Ver riesgo en [08-pendientes-roadmap.md](08-pendientes-roadmap.md).
- Alias de resolución de módulos (`@`, `@components`, `@lib`, `@hooks`, `@pages`, `@assets`, `@data`) — espejados en `jsconfig.json` para el editor.

## Tailwind — [`tailwind.config.js`](../tailwind.config.js)

- `darkMode: "class"` → confirma que el tema oscuro se activa agregando la clase `dark` al elemento raíz (`<html>`), tal como se documenta en [03-layout-y-tema.md](03-layout-y-tema.md).
- `content` apunta a `index.html` y todo `src/**/*.{js,ts,jsx,tsx}`.
- `fontFamily.iosevka` registra la fuente custom `Iosevka Nerd Font` (cargada en `src/assets/fonts/`).
- Plugin `tailwindcss-animate` para utilidades de animación adicionales.

## shadcn/ui — [`components.json`](../components.json)

Configuración lista para instalar componentes de [shadcn/ui](https://ui.shadcn.com) (alias `@/components/ui`, `@/hooks`, `@/lib/utils`), pero **no se ha instalado ningún componente todavía** — no existen `src/components/ui/` ni `src/hooks/`. La dependencia `@radix-ui/react-navigation-menu` sugiere que en algún momento se planeó usar el componente de navegación de shadcn, pero `Nav.jsx` está hecho a mano sin Radix.

## ESLint — [`.eslintrc.cjs`](../.eslintrc.cjs)

Reglas estándar de Create-React-App/Vite: `eslint:recommended` + `plugin:react/recommended` + hooks + `react-refresh`. `react/prop-types` está desactivado (coherente con no usar TypeScript ni PropTypes en el proyecto).

## Fuentes e imágenes

- `src/assets/fonts/`: `IosevkaNerdFont-Italic.woff2` + `stylesheet.css` (declaración `@font-face`).
- `public/iconSvg/`: SVGs de tecnologías usados en `Trajectory.json` y `FrameworksCube`.
- `public/imgProjects/`: capturas de proyectos usadas en `Projects.json`.

## SEO / `index.html`

- Tiene `<meta name="description">` con una descripción del portafolio en inglés.
- **No tiene** Open Graph (`og:title`, `og:image`, etc.) ni Twitter Card — importante para que el link se vea bien al compartirlo en redes.
- El favicon sigue siendo el genérico de Vite (`/vite.svg`), no un ícono propio.

## Deploy

Scripts en `package.json`:

```bash
bun run dev        # servidor de desarrollo (Vite)
bun run build       # build de producción
bun run lint          # ESLint sobre todo el repo
bun run preview        # sirve el build localmente
bun run deploy           # build + gh-pages -d dist  → publica a GitHub Pages
```

El repo remoto (`origin` → `github.com/JuanPython1/juandev.is-a.dev`) tiene **dos ramas con propósitos distintos**:

| Rama | Contenido | Cómo se actualiza |
|---|---|---|
| `main` | Código fuente (`src/`, `doc/`, configs, etc.) | `git push origin main` — commits normales |
| `gh-pages` | Build compilado (`dist/`), es lo que GitHub Pages sirve en producción | `bun run deploy` — **nunca se edita a mano** |

Flujo completo:

1. **Comitear código** (no despliega nada, solo respalda el código fuente):
   ```bash
   git add <archivos>
   git commit -m "mensaje"
   git push origin main
   ```
2. **Desplegar a producción** (sí actualiza `juandev.is-a.dev`):
   ```bash
   bun run deploy
   ```
   Esto ejecuta `predeploy` (`vite build` → genera `dist/`) y luego `deploy` (`gh-pages -d dist` → hace push forzado de `dist/` a la rama `gh-pages`). GitHub Pages publica el cambio automáticamente (1-2 min de propagación).

Ambos pasos son **independientes**: se puede comitear sin desplegar, y desplegar publica lo que esté compilado localmente en ese momento, sin importar si ya se comiteó o no. Por buena práctica, comitear primero y desplegar después evita que `main` y lo publicado queden desincronizados.

El dominio custom `juandev.is-a.dev` sugiere que hay un archivo `CNAME` gestionado por GitHub Pages (no versionado en `public/`, a confirmar en la config del repo de GitHub).

## Qué falta

- Revisar si `base: 'https://juandev.is-a.dev'` en `vite.config.js` realmente debería ser `'/'` — una URL absoluta como `base` puede generar rutas de assets incorrectas en ciertos escenarios (confirmar que el build actual funciona correctamente en producción antes de tocarlo).
- No hay pipeline de CI (GitHub Actions) visible — el deploy es manual vía `bun run deploy`.
- Falta favicon propio y metadatos Open Graph/Twitter Card en `index.html`.
- Decidir si se instala shadcn/ui de verdad o se elimina `components.json` y la dependencia de Radix si no se van a usar.
