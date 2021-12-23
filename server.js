const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

const port = 3000; 

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
})) 

// parse requests of content-type - application/json
app.use(bodyParser.json()) // define a root route

app.get('/', (req, res) => {
    res.send("Hello World");
}); 

// listen for requests
const employeeRoutes = require('./src/routes/employee.router.js');
app.use('/api/v1/employees', employeeRoutes);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});