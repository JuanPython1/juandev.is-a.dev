# 04 — Módulo: Componentes reutilizables

Carpeta: [`src/components/`](../src/components/)

## `Nav.jsx`

Barra de navegación **fija en la parte inferior** de la pantalla (`fixed bottom-[5%]`), centrada horizontalmente. Contiene:
- 3 links (Home / About / Contact) definidos en un array `links` con icono de `lucide-react`.
- Un indicador visual (`div` con fondo) que se desplaza con `translateX` según el índice de la ruta activa (`activeIndex`), calculado comparando `useLocation().pathname` contra el array `links`.
- El nombre de la sección activa (`links[activeIndex]?.label`), con fallback `'???'` si no hay match (por ejemplo, en la ruta 404).
- Integra [`ButtonLanguage`](#buttonlanguagejsx) y [`ButtonThemeMode`](#buttonthememodejsx).

El desplazamiento del indicador está **hardcodeado en píxeles** (`activeIndex * 63`), acoplado al ancho fijo de cada link — si se agrega/quita un link o cambia el padding, hay que ajustar ese número a mano.

## `Footer.jsx`

Componente estático sin lógica: muestra el copyright (`©2025 SrJuan.dev - Developer Web & Mobile. All rights reserved.`). El año está hardcodeado como texto, no calculado dinámicamente.

## `IconsContainer.jsx`

Contenedor circular reutilizable para un ícono (`<img>`), con una animación de "salto" (`animate-jump`, definida en `cssComponents/iconsContainerCss.css`) que se dispara por 1.1s al hacer `onMouseEnter`. Recibe `url` y `alt` por props. Usado dentro de [`Trajectory`](05-paginas.md#trajectoryjsx) para los íconos de tecnologías en cada evento de la línea de tiempo.

## `buttonLanguage/ButtonLanguage.jsx`

Botón de cambio de idioma. **No tiene funcionalidad real**: al hacer hover muestra un tooltip `"Coming Soon..."`. No cambia ningún estado ni contenido de la app. Ver [08-pendientes-roadmap.md](08-pendientes-roadmap.md).

## `buttonThemeMode/ButtonThemeMode.jsx`

Toggle de tema claro/oscuro. Documentado en detalle en [03-layout-y-tema.md](03-layout-y-tema.md). Usa el ícono `MdOutlineLightMode` de `react-icons` con una animación de giro (`animate-spin`) de 1s al hacer click.

## `buttonProject/ButtonProject.jsx`

Botón genérico de tipo link (`<a target="_blank">`), recibe `url` y `children` (normalmente un ícono). Usado dentro de [`ContainerProject_Recent`](#container_project_recentcontainerproject_recentjsx) para los botones de "ver repo" y "ver deploy" de cada proyecto.

## `Container_Project_Recent/ContainerProject_Recent.jsx`

Card de proyecto para la sección "Recent Projects" del Home. Recibe por props: `Tittle`, `Description`, `Image`, `ImageLight`, `Github`, `Deploy` (nombres en props con mezcla de idioma/casing heredada del código original — ver nota en roadmap).

Comportamiento notable: usa un `MutationObserver` sobre `document.documentElement` para detectar cambios de tema en tiempo real y así:
1. Activar un fade-out (`opacity-0`) de 70ms.
2. Cambiar la imagen mostrada entre `Image` (claro) e `ImageLight` (oscuro) — **los nombres de las props están invertidos**: pese a llamarse `ImageLight`, se usa cuando el tema es oscuro, y `Image` cuando es claro. Confirmar intención en [08-pendientes-roadmap.md](08-pendientes-roadmap.md).
3. Fade-in de vuelta.

Contiene dos [`ButtonProject`](#buttonprojectbuttonprojectjsx): uno a GitHub (ícono `IoGitBranchOutline`) y otro al deploy (ícono `MdOutlineArrowOutward`).

## `icons/Expo.jsx`

Ícono SVG de Expo dibujado a mano (componente `SvgExpo`), porque `react-icons` no incluye un logo de Expo. Recibe `fill` y demás props SVG estándar vía spread. Usado en [`FrameworksCube`](05-paginas.md#frameworkscubejsx).

## Componentes CSS-only

- `cssComponents/iconsContainerCss.css`: animación `animate-jump` para `IconsContainer`.
- `buttonLanguage/buttonlanguage.css` y `buttonThemeMode/iconThemeMode.css`: estilos/tooltips puntuales de esos botones.

## Qué falta

- No hay componentes reutilizables de UI genérica (botón primario, input, modal, etc.) — cada botón (`ButtonLanguage`, `ButtonThemeMode`, `ButtonProject`) es un componente ad-hoc sin abstracción común.
- `components.json` (shadcn/ui) está configurado pero no existe la carpeta `src/components/ui/` ni `src/hooks/` — el kit de componentes de shadcn nunca se instaló realmente. Decidir si se usa o se limpia la config.
- Naming inconsistente en props (`Tittle` en vez de `Title`, mezcla de mayúscula inicial en props de React que normalmente van en camelCase).
