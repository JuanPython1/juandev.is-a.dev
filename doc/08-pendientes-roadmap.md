# 08 — Pendientes y roadmap

Lista consolidada de todo lo que falta o está incompleto, ordenada por prioridad. Cada ítem enlaza al módulo donde se explica el contexto completo.

## 🔴 Alta prioridad — contenido faltante

1. **Página `About` sin contenido.** Solo muestra "Coming Soon...." ([05-paginas.md](05-paginas.md#aboutaboutjsx)). Es una de las 3 rutas principales del sitio.
2. **Página `Contact` sin contenido.** Solo muestra "Coming Soon..." ([05-paginas.md](05-paginas.md#contactcontactjsx)). El email y LinkedIn ya existen en `README.md` pero no están conectados a la UI.
3. **`Projects.json` con un solo proyecto.** La sección "Recent Projects" del Home necesita más proyectos reales para cumplir su propósito ([06-datos.md](06-datos.md#projectsjson)).
4. **`Trajectory.json` desactualizado.** Los eventos terminan en 2024; falta agregar 2025/2026 ([06-datos.md](06-datos.md#trajectoryjson)).

## 🟠 Media prioridad — features incompletas / UX

5. **`Loading.jsx` sin contenido visual.** El fallback de `Suspense` es un `div` vacío; durante la carga de un chunk lazy no hay feedback visual (spinner, skeleton, etc.) ([03-layout-y-tema.md](03-layout-y-tema.md#loadingjsx)).
6. **Ruta 404 sin componente ni diseño.** Devuelve texto plano `Page not found` sin estilos ni layout consistente con el resto del sitio ([02-routing.md](02-routing.md#qué-falta)).
7. **Sin Open Graph / Twitter Card ni favicon propio** en `index.html` — afecta cómo se ve el link al compartirlo ([07-configuracion-build.md](07-configuracion-build.md#seo--indexhtml)).

## 🟡 Deuda técnica / limpieza

8. **Alias `@hooks` apunta a una carpeta que no existe** (`src/hooks/`) en `vite.config.js` y `jsconfig.json` ([01-arquitectura.md](01-arquitectura.md#alias-de-imports)).
9. **`components.json` (shadcn/ui) configurado pero nunca usado** — no hay `src/components/ui/` ni componentes instalados. Decidir si se adopta shadcn/ui o se limpia la configuración y la dependencia `@radix-ui/react-navigation-menu` ([07-configuracion-build.md](07-configuracion-build.md#shadcnui--componentsjson)).
10. **Naming inconsistente en props** de `ContainerProject_Recent` (`Tittle` en vez de `Title`, props en PascalCase en vez de camelCase) ([04-componentes.md](04-componentes.md#qué-falta)).
11. **Nombres de imagen claro/oscuro potencialmente invertidos** entre `Projects.json` (`img`/`imgLight`) y las props del componente (`Image`/`ImageLight`) — confirmar cuál imagen corresponde a cada tema y corregir si hay error ([04-componentes.md](04-componentes.md#container_project_recentcontainerproject_recentjsx)).
12. **`README.md` de la raíz desactualizado** respecto a la estructura real: menciona `src/App.js` y una carpeta `styles/` que ya no existen (el entry point real es `main.jsx` + `Layout.jsx`, y los estilos están distribuidos por componente/página, no centralizados).
13. **`vite.config.js` con `base` como URL absoluta** (`'https://juandev.is-a.dev'`) en vez de una ruta relativa — confirmar que no genera problemas de resolución de assets antes de tocarlo, ya que el sitio está en producción ([07-configuracion-build.md](07-configuracion-build.md#vite--viteconfigjs)).
14. **Estructura anidada innecesaria en `Projects.json`** (`Projects[0].ProjectsRecent[]` en vez de un array plano) ([06-datos.md](06-datos.md#qué-falta)).
15. **`activeIndex * 63` hardcodeado en `Nav.jsx`** para posicionar el indicador de ruta activa — frágil si se agrega/quita un link ([04-componentes.md](04-componentes.md#navjsx)).

## 🟢 Sin definir / arquitectura futura

16. **No hay tests** (unitarios ni e2e) en el proyecto.
17. **No hay CI/CD** — el deploy es manual (`bun run deploy`).
18. **No hay Context de tema** — la lógica de leer `localStorage`/`classList` está duplicada entre `ButtonThemeMode` y `ContainerProject_Recent`; si se agregan más componentes theme-aware, conviene centralizar en un `ThemeContext` o hook (`useTheme`) — coherente con crear por fin la carpeta `src/hooks/` referenciada en los alias.

---

Al completar o descartar un ítem de esta lista, actualiza este archivo (marca como hecho o elimínalo) para que la documentación no quede desincronizada del código.
