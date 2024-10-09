1. Instalar dependencias para Node, Express, TypeScript y Multer
2. Desde linea de comando corre 'npm start'
3. Se puede probar con Postman o cualquier otro cliente HTTP, enviando una solicitud POST
    3.1 Para subir uno o varios archivos puedes usar con POSTMAN: 'http://localhost:3000/uploads' donde el request se llame docs y esten seleccionados todos los archivos a subir
    3.2 Para hacer una descarga de archivos en POSTMAN: 'http://localhost:3000/download?file=<FileName.pdf>'