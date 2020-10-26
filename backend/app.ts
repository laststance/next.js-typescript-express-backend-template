import Express, { Request, Response } from 'express'
import cors from 'cors'

const ts = Express()
ts.use(cors())

ts.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'This is CORS-enabled for an allowed domain.' })
})

export default ts
