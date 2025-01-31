# 📂 shared/

La carpeta `shared/` contiene componentes, directivas, pipes y utilidades reutilizables en toda la aplicación. Se recomienda crear un `SharedModule` para importar/exportar estos elementos.

## 📁 Contenido de `shared/`
- **`components/`** → Componentes reutilizables en varias partes de la app (botones, modales, etc.).
- **`directives/`** → Directivas reutilizables.
- **`pipes/`** → Pipes para transformación de datos en plantillas.
- **`utils/`** → Funciones helper/utilitarias para cálculos, formateo, etc.
- **`shared.module.ts`** → Módulo que agrupa y exporta los elementos reutilizables.

## 📌 Recomendaciones
- No incluir servicios en `shared/` (estos deben ir en `core/`).
- No importar `SharedModule` en `AppModule`, solo en otros módulos de características (`features/`).
