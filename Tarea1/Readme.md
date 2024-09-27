# Instrucciones para Configuración
 
1. **Ejecutar el comando** `<npm install>` para instalar las dependencias.
 
2. **Ejecutar el comando** `npm start` para iniciar el servidor.
 
3. **Abrir un navegador web** y navegar a `http://localhost:3000/usuarios?id=0` para ver el mensaje "lista de usuarios" o un error 403.
 
4. **Para cambiar los permisos de un usuario**, ve a `src/middlewares/auth.ts`:
    1. Copia algunos de los roles desde la línea 22.
    2. Cambia el rol en el encabezado de la solicitud a un nuevo rol (línea 8).
 
5. **Guardar los cambios** y actualizar el navegador.
