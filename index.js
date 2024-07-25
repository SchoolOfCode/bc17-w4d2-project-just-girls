import express from 'express'
import helmet from 'helmet'
import { exerciseActivities } from ‘./activities.js’;


//we have imported helmet after installing it, similar to express
const app = express()

app.use(helmet()); //we have also added this line to use helmet in our app

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(` app is running on port ${port}`)
})

//send a GET request with a user_id to the API to get a users activities, GET request to “http://localhost:3000/activities 
app.get('/activities/:id', (req, res) => { 
  res.status(200).json({ 
    error: null, 
    data: exerciseActivities,
  })
 }
)

/*simple dashboard that shows a user all of their activities. refer to the activities.js file



/*response object always containing a key called data or error, or the status code being an accurate indication 
of the success/failure (and reason) of the request.*/


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


