import express from 'express';
import bodyParser from 'body-parser'; 
// allows us to take in incoming post request bodies

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); // setting up middleware

// 2nd paramter is a method w req and res as parameters
app.get('/', (req, res) => res.send('Hellooo from homepage'));

 /* You don't want to put a bunch of routers here. 

   So we put them in routes folder --> users.js
*/

// here's where we connect with that file. 
app.use('/users', usersRoutes);



app.listen(PORT, () => console.log (`Server running on port: http://localhost${PORT}`));