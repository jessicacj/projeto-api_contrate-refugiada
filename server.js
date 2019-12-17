const app = require('./src/app.js')
const port = 3000

app.listen(port, () => {
  console.log(`A aplicação está rodando na porta ${port}`)
})