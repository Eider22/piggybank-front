# 📂 features/

La carpeta `features/` contiene los módulos y componentes específicos de cada funcionalidad de la aplicación. Cada funcionalidad debe estar organizada en su propio módulo.

## 📁 Contenido de `features/`
Cada subcarpeta dentro de `features/` representa una funcionalidad específica y debe incluir:
- **`<feature>.module.ts`** → Módulo de la funcionalidad.
- **`components/`** → Componentes específicos de la funcionalidad.
- **`services/`** → Servicios relacionados con esta funcionalidad.
- **`pages/`** → Páginas asociadas a esta funcionalidad.
- **`<feature>-routing.module.ts`** (si usa lazy loading) → Configuración de rutas.

## 📌 Ejemplo de estructura de `features/`
features/ ├── user/ │ ├── user.module.ts │ ├── user-routing.module.ts │ ├── pages/ │ │ ├── user-profile.component.ts │ │ ├── user-settings.component.ts │ ├── services/ │ │ ├── user.service.ts │ ├── components/ │ │ ├── user-avatar.component.ts


## 📌 Recomendaciones
- Cada funcionalidad debe ser un **módulo separado** (`FeatureModule`).
- Utilizar **lazy loading** para mejorar el rendimiento.
