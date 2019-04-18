
import * as express from 'express'

const app = express()

app.use(express.json({
    limit: '5mb',
}))

export { app }
