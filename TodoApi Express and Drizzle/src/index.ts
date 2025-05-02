import express from 'express';
import user from './auth/auth.router';
import todo from './todos/todo.router';
const app = express();
app.use(express.json())

// routes
user(app)
todo(app)

// test endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
})

// http://localhost:8081/
app.listen(8081, () => {
    console.log('Server is running on port 8081');
})
