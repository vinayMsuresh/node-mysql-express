const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./src/Routes/employee.route');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/employees', employeeRoutes);

app.get('/', (req, res) => {
    res.send('Hello there!!')
});

app.listen(port, (err)=> {
    if(err) throw err;
    console.log(`Running on port ${port}`);
})