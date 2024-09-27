1.- Install dependencies for node, express, typescript y mongo.
2.- Create a .env in source and paste 
        DB_URL = mongodb+srv://SamuelValentin:LopezValenzuela@sample0.bbj6k.mongodb.net/Tarea2?retryWrites=true&w=majority&appName=sample0
        JWT_SECRET=<cadenasecreta> where cadenasecrte is the string for the secret key
2.- Run 'npm start' to start the server
3.- Open a web browser and navigate to 'http://localhost:3000' to view the message "API Works" or 403 error
4.- Open pruebas.http file to run POSTMAN
    4.1.- Change the value for #User registration as you want and click 'Send Request'
    VP. You will recive a response in a new window of "Usuario registrado correctame" or "Usuario ya existe"
    4.2- Change the value for #login as you want and click 'Send Request'
    VP. You will recive a response in a new window of "Usuario registrado correctamente" or "Usuario ya existe"
5.- Change the values of step 4th to test the different messages

Note: You can see the useres added in the database 'Tarea2' cluster 'users'
