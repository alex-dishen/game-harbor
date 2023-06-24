import express, { json } from 'express'
import cors from 'cors'
import gameRouter from './routes'

const app = express()
const port = 8000

app.use(cors())
app.use(json())

app.use(gameRouter)

app.listen(port, () =>
  console.log(
    `⚡️[server]: Game Harbor listening on port http://localhost:${port}!`
  )
)
