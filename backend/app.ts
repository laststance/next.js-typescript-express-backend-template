import Express, { Request, Response } from 'express'
import cors from 'cors'

const express = Express()
express.use(cors())

express.get('/', (req: Request, res: Response) => {
  const msg = 'This message came from Express server'
  console.log(msg)
  res.json({ msg: msg })
})

export default express
