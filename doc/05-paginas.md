# 05 — Módulo: Páginas

Carpeta: [`src/pages/`](../src/pages/)

## `start/start.jsx` — Home (`/`)

**Estado: ✅ Completa.** Es la página principal y la única con contenido real. Se compone de 3 secciones:

### 1. Hero
Título animado (`title-animation`) con el texto `Hi, it's Juan's website 🐋`, superpuesto sobre un párrafo de introducción (`content-animation`) que describe el perfil de Juan (estudiante de Ingeniería de Sistemas, especializado en React/Next.js y React Native/Expo, explorando IA). Debajo, el componente [`FrameworksCube`](#frameworkscubejsx).

### 2. Proyectos recientes
Renderiza [`RecentProjectsContainer`](#recentprojectscontainerjsx) dentro de una sección con animación de entrada (`animationBlurIn`).

### 3. Trayectoria de aprendizaje
Título `Learning Trajectory` + componente [`Trajectory`](#trajectoryjsx).

---

### `FrameworksCube.jsx`

Cubo 3D construido **100% en CSS** (transforms, `styles/FrameworksCube.css`) que rota mostrando 4 caras con iconos de tecnologías (React, Next.js, TypeScript vía `SvgExpo`/`react-icons`, Expo) y una quinta cara (`top`) con JavaScript. Cada cara tiene un tooltip con el nombre de la tecnología al hover. La cara `bottom` está vacía (sin ícono ni tooltip) — es intencional porque esa cara no queda visible en la rotación por defecto, pero queda como posible espacio para una 6ta tecnología.

### `RecentProjectsContainer.jsx`

Lee [`Projects.json`](06-datos.md#projectsjson) y renderiza un [`ContainerProject_Recent`](04-componentes.md#container_project_recentcontainerproject_recentjsx) por cada proyecto listado. Contiene un `console.log(projectsRecents)` de debug que no se ha limpiado (ver [08-pendientes-roadmap.md](08-pendientes-roadmap.md)).

### `Trajectory.jsx`

Línea de tiempo vertical (`styles/Trayectory.css`) que lee [`Trajectory.json`](06-datos.md#trajectoryjson) y por cada evento (año) muestra una tarjeta alternando izquierda/derecha, con año, descripción, título de la herramienta, e íconos de tecnologías vía [`IconsContainer`](04-componentes.md#iconscontainerjsx).

## `about/about.jsx` — About (`/about`)

**Estado: 🚧 Placeholder.** Solo renderiza el texto `About Coming Soon....`. Sin biografía, skills, CV ni ningún contenido real.

## `contact/contact.jsx` — Contact (`/contact`)

**Estado: 🚧 Placeholder.** Solo renderiza el texto `Contact Coming Soon...`. Sin formulario, ni enlaces a redes/email (esa info hoy solo vive en el `README.md` del repo, no en la UI).

## Qué falta

- Contenido real de `About` y `Contact` — son las dos páginas más incompletas del proyecto.
- `Contact` podría reutilizar el email/LinkedIn que ya están en el `README.md` de la raíz, pero eso no está conectado a la UI.
- Quitar el `console.log` de `RecentProjectsContainer.jsx`.
- Ver más detalle priorizado en [08-pendientes-roadmap.md](08-pendientes-roadmap.md).
