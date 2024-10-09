import express from "express";
import routes from "./routes";
import path from "path";

const app = express ();

const port = process.env.PORT || 3000;

app.use(routes);

app.use(express.json());

app.use('/documents', express.static(path.join(__dirname, '..', 'documents')));


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});