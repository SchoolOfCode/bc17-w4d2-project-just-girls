import express from 'express'
import helmet from 'helmet'
import { exerciseActivities } from './activities.js';


//we have imported helmet after installing it, similar to express
const app = express()

app.use(helmet()); //we have also added this line to use helmet in our app

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(` app is running on port ${port}`)
});


app.get('/activities', (req, res) => { //simple dashboard that shows a user all of their activities. refer to the activities.js file
  res.status(200).json({ 
    error: null, /*response object always containing a key called data or error, or the status code being an accurate indication 
    of the success/failure (and reason) of the request.*/
    data: exerciseActivities,
  })
 });
/*request should succeed, responding with the correct status code and an array of 
User Activity objects in the response body (response.data).
// response object

{
	data: [
		{ }, // activity object
		{ }, // activity object
		{ } // activity object
	]
}*/

// //When I make a POST request to “http://localhost:3000/activities” with a request body containing a JSON object (new activity),
// Then the API should save the new activity to the activities.json file giving it a unique “id” (UUID) and activity_submitted (time stamp - Date.now()),
// Then the the request should succeed, responding with the correct status code and the activity object that I posted as the response body (response.data).
// // request object - new user activity
// {
// "activity_type": "run",
// "activity_duration": "30",
// }



app.post('/activities', (req, res) => {
  const newActivity = req.body.newActivity
 //Check that the user has inputted a new activity
  if (!newActivity) { 
    res.status(400).json({
      error: true, 
      data: null,
    }
  )
}
  try {
    const exerciseActivities = await createActivity(newActivity) { 
      res.status(201).json({
        error: false, 
        data: exerciseActivities,
      }
    );
  } catch 
} 

}





  
  
  
  
  






