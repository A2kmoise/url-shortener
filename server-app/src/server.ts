import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger/swagger.json';
import connectDb from './config/dbConfig';
import shortUrl from './routes/shortUrl'

dotenv.config();
connectDb();

      
const port = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
})
);

app.use ( "/api/", shortUrl);
app.use ('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.listen(port, () => {
    console.log(`Server started successfully at port ${port}`);
});