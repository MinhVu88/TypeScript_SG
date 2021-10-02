import express from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/RootController';
import './controllers/AuthControllers';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieSession({keys: ['fsociety']}));
app.use(AppRouter.getInstance());

app.listen(port, () => console.log(`server's running on port ${port}`));