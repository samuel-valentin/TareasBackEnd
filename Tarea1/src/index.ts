import express,{Request, Response} from 'express';
import routes from './routes';

const app = express ();

const port = process.env.PORT || 3000;

// app.use('/usuarios', routes);
app.use(routes);

app.get('/', (req: Request, res:Response) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


