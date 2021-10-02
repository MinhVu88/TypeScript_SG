import express from 'express';
import { router } from './routes/authRoutes';
import cookieSession from 'cookie-session';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({keys: ['fsociety']}));
app.use(router);

app.listen(port, () => console.log(`server's running on port ${port}`));