import * as express from 'express';
import * as bodyParser from 'body-parser';

import {router as usersRoutes} from './routes/users';

const app = express();

app.use(bodyParser.json());
app.disable('x-powered-by');

app.use('/api', usersRoutes);

const port = process.env.port || 3333;

const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/api');
});

server.on('error', console.error);
