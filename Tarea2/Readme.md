1.- Run <npm install> to install dependencies
2.- Run 'npm start' to start the server
3.- Open a web browser and navigate to 'http://localhost:3000/usuarios?id:0' to view the message "lista de usuarios" or 403 error
4.- To change persmission user go to src/middlewares/auth.ts
    4.1.- Copy some of the roles from line 22
    4.2.- Change the role in the request header to the new role (line 8)
5.- Save the changes and refresh web browser
