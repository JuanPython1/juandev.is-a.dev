# 02 — Módulo: Routing

**Archivo:** [`src/router/AppRouter.jsx`](../src/router/AppRouter.jsx)

## Qué hace

Define el árbol de rutas de la SPA usando `createHashRouter` de React Router DOM v6 (rutas tipo `/#/about` en vez de `/about`). Se eligió **hash router** en lugar de `BrowserRouter` porque el sitio se despliega en GitHub Pages, donde no hay control del servidor para reescribir rutas al recargar una URL profunda (con hash router no hace falta configuración de servidor).

Todas las rutas y el `Layout` se importan con `React.lazy()`, por lo que cada uno se convierte en un chunk JS separado cargado a demanda.

```jsx
const router = createHashRouter([
  {
    path: '/', element: <Layout />,
    children: [
      { path: '/', element: <Start /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <> Page not found </> },
    ]
  }
])
```

## Rutas actuales

| Ruta | Componente | Estado |
|---|---|---|
| `/` | `Start` ([05-paginas.md](05-paginas.md)) | ✅ Completa |
| `/about` | `About` | 🚧 Placeholder |
| `/contact` | `Contact` | 🚧 Placeholder |
| `*` (cualquier otra) | Texto plano `Page not found` | 🚧 Sin componente ni estilos |

## Cómo se consume

`AppRouter` se monta una sola vez en [`src/main.jsx`](../src/main.jsx), dentro de `React.StrictMode`. No recibe props ni depende de contexto externo.

## Qué falta (ver detalle en [08-pendientes-roadmap.md](08-pendientes-roadmap.md))

- La ruta `*` no usa un componente dedicado (`NotFound`) ni tiene estilos — actualmente renderiza texto plano sin la Nav/Footer aplicando su diseño.
- No hay manejo de scroll-restoration al navegar entre rutas (React Router v6 no lo hace automático con `Outlet`).
