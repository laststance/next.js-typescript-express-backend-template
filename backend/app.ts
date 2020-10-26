import Express, { Request, Response } from 'express'
import cors from 'cors'

const ts = Express()
ts.use(cors())

ts.get('/', (req: Request, res: Response) => {
  const msg = 'This is CORS-enabled for an allowed domain. ' + (new Date()).toLocaleTimeString()
  console.log(msg)
  res.json({ msg: msg })
})

export default ts
