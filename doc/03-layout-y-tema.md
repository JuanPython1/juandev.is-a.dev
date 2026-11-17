# 03 — Módulo: Layout y sistema de tema

## `Layout.jsx`

**Archivo:** [`src/Layout.jsx`](../src/Layout.jsx)

Shell visual que envuelve todas las páginas. Estructura:

```
<div>                          fondo con patrón de puntos + color según tema
  <header><Nav /></header>     navegación fija (ver 04-componentes.md)
  <Suspense fallback={<Loading />}>
    <Outlet />                 aquí se renderiza la página activa (Start/About/Contact)
  </Suspense>
  <footer><Footer /></footer>
</div>
```

- El fondo usa un patrón de puntos radiales vía `bg-[radial-gradient(...)]` de Tailwind arbitrary values, y cambia de color con `dark:` (`#242424` claro → `#c04b4b` oscuro — los nombres de las clases usan las convenciones de Tailwind pero los colores están invertidos respecto a lo que sugiere "modo claro/oscuro"; es una decisión de diseño, no un bug).
- Sobre el fondo va `SideRays` (copiado de React Bits en `src/components/reactbits/SideRays/`, licencia MIT + Commons Clause), una capa fija de rayos de luz WebGL en tonos rojo claro/crema (`z-index: -1`, sin eventos de puntero). Se pausa solo fuera de pantalla y respeta `prefers-reduced-motion`.
- El `Suspense` interno es lo que permite que cada página cargada con `lazy()` muestre `Loading` mientras se descarga su chunk.

## `Loading.jsx`

**Archivo:** [`src/Loading.jsx`](../src/Loading.jsx)

Fallback de `Suspense`. Muestra un spinner rojo centrado (`motion-safe:animate-spin`) con `role="status"` y un texto oculto traducido (`loading.label`). Usa `zoom-scale-root` para escalar igual que el resto del sitio.

## Sistema de tema claro/oscuro

El tema no usa Context de React ni ninguna librería: es manejado directamente vía **clase `dark` en `<html>`** (convención de Tailwind con `darkMode: 'class'` — confirmar en `tailwind.config.js`) y persistido en `localStorage`.

**Responsable del toggle:** [`ButtonThemeMode.jsx`](../src/components/buttonThemeMode/ButtonThemeMode.jsx) (documentado en detalle en [04-componentes.md](04-componentes.md)).

Flujo:
1. Al montar, lee `localStorage.getItem('theme')` (default `'light''`) y también `prefers-color-scheme` del sistema si el valor guardado es `'auto'`.
2. Aplica/quita la clase `dark` en `document.documentElement`.
3. Al hacer click, invierte el tema, lo persiste en `localStorage` y vuelve a togglear la clase.

**Consumidores del tema fuera de Tailwind `dark:`:**
- [`ContainerProject_Recent.jsx`](../src/components/Container_Project_Recent/ContainerProject_Recent.jsx) usa un `MutationObserver` sobre `document.documentElement` (atributo `class`) para saber cuándo cambia el tema y así swapear la imagen del proyecto (`Image` vs `ImageLight`) con un fade. Es el único componente que reacciona al tema de forma imperativa en JS en lugar de solo CSS.

## Qué falta

- No existe un Context/Provider de tema — cada componente que necesita saber el tema actual repite la misma lógica de lectura de `localStorage`/`classList` (hoy solo pasa en `ButtonThemeMode` y `ContainerProject_Recent`, pero no escala si se agregan más componentes theme-aware).

