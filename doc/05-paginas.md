# 05 — Módulo: Páginas

Carpeta: [`src/pages/`](../src/pages/)

## `start/start.jsx` — Home (`/`)

**Estado: ✅ Completa.** Es la página principal y la única con contenido real. Se compone de 3 secciones:

### 1. Hero
Título animado (`title-animation`) con el texto `Hi, it's Juan's website 🐋`, superpuesto sobre un párrafo de introducción (`content-animation`) que describe el perfil de Juan (estudiante de Ingeniería de Sistemas, especializado en React/Next.js y React Native/Expo, explorando IA). Debajo, el cubo 3D de frameworks [`FrameworksCube`](#frameworkscubejsx).

### 2. Proyectos recientes
Renderiza [`RecentProjectsContainer`](#recentprojectscontainerjsx) dentro de una sección con animación de entrada (`animationBlurIn`).

### 3. Trayectoria de aprendizaje
Título `Learning Trajectory` + componente [`Trajectory`](#trajectoryjsx).

---

### `FrameworksCube.jsx`

Cubo 3D construido 100% en CSS (`styles/FrameworksCube.css`) que rota mostrando caras con iconos de tecnologías (React, Next.js, Nuxt.js, Expo, JavaScript). Cada cara tiene un tooltip con el nombre al pasar el cursor (`Tooltip3D.jsx`). La cara `bottom` queda vacía. Se envuelve en `.cube-wrap`, que tiene un resplandor que respira detrás y se levanta suavemente al pasar el cursor; las caras tienen brillo diagonal y los iconos saltan al pasar el cursor. El tamaño y el giro original no cambian. Con `prefers-reduced-motion` se desactiva el resplandor animado.


### `RecentProjectsContainer.jsx`

Lee [`Projects.json`](06-datos.md#projectsjson) y renderiza un [`ContainerProject_Recent`](04-componentes.md#container_project_recentcontainerproject_recentjsx) por cada proyecto listado. Contiene un `console.log(projectsRecents)` de debug que no se ha limpiado (ver [08-pendientes-roadmap.md](08-pendientes-roadmap.md)).

### `Trajectory.jsx`

Línea de tiempo vertical (`styles/Trayectory.css`) que lee [`Trajectory.json`](06-datos.md#trajectoryjson) y por cada evento (año) muestra una tarjeta alternando izquierda/derecha, con año, descripción, título de la herramienta, e íconos de tecnologías vía [`IconsContainer`](04-componentes.md#iconscontainerjsx).

## `about/about.jsx` — About (`/about`)

**Estado: 🚧 Placeholder.** Solo renderiza el texto `About Coming Soon....`. Sin biografía, skills, CV ni ningún contenido real.

## `contact/contact.jsx` — Contact (`/contact`)

**Estado: ✅ Completa.** Sigue el lenguaje visual de `about` (panel `surface-panel` con `frame-red`, texto `font_juan_intro`/`font_juan_tittle`, iconos sobre `bg-brick` y animación `animationBlurIn`). Es una **única sección**: título grande (`about-name` style) con `Let's Talk` / `Hablemos`, párrafo de introducción (`font_juan_intro`) y una grilla de tarjetas de contacto.

### Grilla de medios de contacto

- **WhatsApp** (destacado): tarjeta full-width (`sm:col-span-2`, disposición horizontal) con enlace `https://wa.me/573185731148` y punto pulsante de disponibilidad.
- **Correo**: `mailto:rodriguezjuanwork1@gmail.com`.
- **LinkedIn** y **GitHub**: enlaces externos que abren en pestaña nueva con `rel="noopener noreferrer"`.
- **Ubicación**: tarjeta estática (Cali, Colombia).

El `id` de cada tarjeta es clave i18n: `contact.email`, `contact.linkedin`, `contact.whatsapp`, etc. (datos tomados del `README.md` de la raíz, salvo WhatsApp/ubicación que estaban ausentes).

## Qué falta

- Contenido real de `About` ahora sí completo.
- Quitar el `console.log` de `RecentProjectsContainer.jsx`.
- Ver más detalle priorizado en [08-pendientes-roadmap.md](08-pendientes-roadmap.md).
