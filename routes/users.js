import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router(); 

let users = [];

/* ALL routes in here are starting with /users */

router.get('/', (req, res) => {
   console.log(users);
   res.send(users);
});

/*Browsers can only make GET requests.  Time to use Postman . . . */
router.post('/', (req, res) => {
   const user = req.body; // the JSON object
   const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
   // creates new version that includes id. 
   const userWithId = { ...user, id: userId};

   users.push(userWithId); // push is JS  function for Arrays
   res.send(`User with the name ${userWithId.firstName} added to the database`);  
});

/* Here the : means that you can expect anything after 
  the users/ path  
  for example users/23 
   we can get the value entered after users with req.params, 
   which in this case would yield { id: 23 }
*/
router.get('/:id', (req, res) => {
   const { id } = req.params;
   // find user with matching id within users
   const foundUser = users.find((user) => user.id === id); 
   res.send(foundUser);
});

router.delete('/:id', (req, res) => {
   // keep those that do not have target id. 
   users = users.filter((user) => user.id !== id);
   res.send(`User with the id ${id} deleted from the database`);
})

router.patch('/:id', (req, res) => {
   const { id } = req.params;
   const {firstName, lastName, age} = req.body;
   console.log (req.body);
   
   const user = users.find((user) => user.id === id);

   /* We can change one or many attributes */

   if (firstName){
      user.firstName = firstName;
   }

   if (lastName) { 
      user.lastName = lastName;
   }

   if (age) {
      user.age = age;
   }

   res.send(`User with the id ${ id } has been updated`);
});





export default router;