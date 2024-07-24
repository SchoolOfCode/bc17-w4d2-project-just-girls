import express from 'express'
import helmet from 'helmet'
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

