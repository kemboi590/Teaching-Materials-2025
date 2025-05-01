import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// http://localhost:8081/
app.listen(8081, () => {
    console.log('Server is running on port 8081');
})
