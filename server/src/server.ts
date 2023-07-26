import express, { json } from 'express'
import cors from 'cors'
import gameRouter from './routes'
import { errorHandler } from './middleware/errorHandler'

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(json())

app.use(gameRouter)
app.use(errorHandler)

app.listen(port, () =>
  console.log(
    `⚡️[server]: Game Harbor listening on port http://localhost:${port}!`
  )
)
