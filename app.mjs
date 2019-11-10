import express from 'express';

export const app = express();

app.use('/', (req, res, next) => {
    console.log("test app")
});