# 06 — Módulo: Datos estáticos

Carpeta: [`src/data/`](../src/data/)

No hay backend ni CMS: todo el contenido dinámico de la UI viene de dos archivos JSON versionados en el repo. Cualquier actualización de contenido (nuevo proyecto, nuevo hito de trayectoria) requiere editar estos archivos y redesplegar.

## `Projects.json`

Consumido por [`RecentProjectsContainer`](05-paginas.md#recentprojectscontainerjsx).

Estructura (anidada innecesariamente en un array de un solo elemento — `Projects[0].ProjectsRecent`):

```json
{
  "Projects": [
    {
      "ProjectsRecent": [
        {
          "title": "string",
          "description": "string",
          "img": "ruta a imagen (tema claro)",
          "imgLight": "ruta a imagen (tema oscuro)",
          "github": "url",
          "deploy": "url"
        }
      ]
    }
  ]
}
```

**Estado actual:** un único proyecto listado (el propio sitio `juandev website`). Ver nota sobre naming invertido de `img`/`imgLight` vs las props `Image`/`ImageLight` en [04-componentes.md](04-componentes.md#container_project_recentcontainerproject_recentjsx).

## `Trajectory.json`

Consumido por [`Trajectory`](05-paginas.md#trajectoryjsx).

Estructura:

```json
{
  "events": [
    {
      "year": "string",
      "description": "string",
      "toolTitle": "string",
      "framework": {
        "<key>": { "icon": "ruta SVG en /public/iconSvg", "alt": "string" }
      }
    }
  ]
}
```

**Estado actual:** 5 eventos, de **2018 a 2024** (semántica, básicos web → React/MySQL → React Native/Firebase → Expo/Firebase → IA + Next.js/Supabase). No incluye 2025/2026.

## Qué falta

- **`Projects.json` solo tiene 1 proyecto.** Para que la sección "Recent Projects" cumpla su propósito, hace falta agregar más proyectos reales con sus capturas en `public/imgProjects/`.
- **`Trajectory.json` no está actualizado a 2025/2026** — falta agregar el hito más reciente (coherente con la fecha actual).
- La estructura anidada de `Projects.json` (`Projects[0].ProjectsRecent[]`) no aporta valor frente a un array plano `ProjectsRecent[]` — es deuda técnica menor, no un bug.
- No hay validación de esquema (ej. con Zod/JSON Schema) sobre estos JSON — un typo en una key rompe silenciosamente el render de esa sección.
