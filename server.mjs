import http from 'http';
import { app } from './app.mjs';


const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, '0.0.0.0', () => {
    console.log('Server running at port :'+ port);
});
