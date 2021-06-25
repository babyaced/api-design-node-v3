import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()
app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
  console.log('logging')
  req.mydata = 'hello'
  next()
}

router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

//cats
const routes = [
  'get /cat',
  'get /cat/:id',
  'post /cat',
  'put /cat/:id',
  'delete /cat/:id'
]

app.use('/api', router)

app.get('/', (req, res) => {
  res.send({ message: 'hello' })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'ok' })
})

app.get('^(me)', (req, res) => {
  res.send({ message: 'me' })
})

app.get('/app/*', (req, res) => {
  res.send({ app: 'app' })
})

app.get('/data', [log, log, log], (req, res) => {
  res.send({ data: req.mydata })
})

app.post('/data', log, (req, res) => {
  console.log(req.body)
  res.send({ ok: true })
})

app.put('/data', (req, res) => {})

app.delete('/data', (req, res) => {})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
