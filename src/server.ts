import expres from 'express'

import routes from './routes'

const port =  process.env.PORT || 3333
const app = expres()

app.use(expres.json())
app.use(routes)

app.listen(port, () => console.log(`Server is runing on port ${ port }`))