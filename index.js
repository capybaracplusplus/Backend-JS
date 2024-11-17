const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const appRouter = require('./router');

app.use(express.json());
app.use('/', appRouter);

const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})


