const express = require('express');

const app = express();

app.use(express.json());

const courses = [
    {name: 'Ciências da computação', id: 1},
    {name: 'Sistemas de informação', id: 2},
];

app.get('/courses', (req, res) => {
    const queryParams = req.query;
    return res.json({courses, queryParams});
});

app.post('/courses', (req, res) => {
    const body = req.body;
    return res.json({courses, body});
});

app.put('/courses/:id', (req, res) => {
    const params = req.params;
    return res.json({courses, params});
});

app.patch('/courses/:id', (req, res) => {
    return res.json(courses);
});

app.delete('/courses/:id', (req, res) => {
    return res.json(courses);
});

app.listen(4000, () => {
    console.log('Running on 4000');
});