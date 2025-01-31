# 📂 core/

La carpeta `core/` contiene servicios, interceptores y guards que son utilizados en toda la aplicación. **No debe ser un módulo**, ya que los servicios en `core/` deben ser singleton y manejarse con `providedIn: 'root'`.

## 📁 Contenido de `core/`
- **`services/`** → Servicios globales como autenticación y manejo de API.
- **`interceptors/`** → Interceptores HTTP para modificar solicitudes y respuestas.
- **`guards/`** → Guards de rutas para proteger acceso basado en autenticación o permisos.

## 📌 Recomendaciones
- No importar `core/` en otros módulos.
- Usar `providedIn: 'root'` en servicios para mantener la inyección global.
