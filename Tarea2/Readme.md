# Instrucciones para Configuración
 
1. **Instalar dependencias** para Node, Express, TypeScript y MongoDB.
2. **Crear un archivo `.env`** en la carpeta `source` y pegar el siguiente contenido:
    ```
    DB_URL=mongodb+srv://SamuelValentin:LopezValenzuela@sample0.bbj6k.mongodb.net/Tarea2?retryWrites=true&w=majority&appName=sample0
    JWT_SECRET=<cadenasecreta> # donde cadenasecreta es la cadena para la clave secreta
    ```
 
3. **Ejecutar el comando** `npm start` para iniciar el servidor.
 
4. **Abrir un navegador web** y navegar a `http://localhost:3000` para ver el mensaje "API Works" o un error 403.
 
5. **Abrir el archivo `pruebas.http`** para ejecutar en POSTMAN:
    1. Cambiar el valor para **#User registration** como desees y hacer clic en **'Send Request'**.
        - **Respuesta Esperada:** Recibirás una respuesta en una nueva ventana: "Usuario registrado correctamente" o "Usuario ya existe".
    2. Cambiar el valor para **#login** como desees y hacer clic en **'Send Request'**.
        - **Respuesta Esperada:** Recibirás una respuesta en una nueva ventana: "Usuario registrado correctamente" o "Usuario ya existe".
 
6. **Modificar los valores del paso 5** para probar los diferentes mensajes.
 
> **Nota:** Puedes ver los usuarios añadidos en la base de datos `Tarea2` en el clúster `users`.
