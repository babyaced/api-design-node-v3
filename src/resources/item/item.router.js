import { Router } from 'express'
const controller = (req, res) => {
  res.send({ message: 'hello' })
}

const router = Router()

// /api/item
router
  .route('/')
  .post((req, res) => {
    res.send(req.body)
  })
  .get((req, res) => {
    res.send({ data: 'data' })
  })
  .put((req, res) => {
    res.send({ data: 'updatedData' })
  })
  .delete((req, res) => {
    res.send({ deleted: true })
  })

// /api/item/:id
router
  .route('/:id')
  .post((req, res) => {
    res.send(req.body)
  })
  .get((req, res) => {
    res.send({ data: 'data' })
  })
  .put((req, res) => {
    res.send({ data: 'updatedData' })
  })
  .delete((req, res) => {
    res.send({ deleted: true })
  })

export default router
