import { Router } from 'express'

const router = Router()

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
