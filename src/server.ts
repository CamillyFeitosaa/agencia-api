import app from './config/app'

// type Pessoa = {
//   nome: string
//   email: string
// }
// const listPessoas: Pessoa [] = []

// // GET, POSH, PUT, DELETE, PATH
// router.get('/', (request, response) =>
//   response.json({ ola: 'Ola mundo', nome: 'Glêsio' }))

// router.post('/formulario', (request, response) =>
//   // const { nome, email } = request.body
//   listPessoas.push({ nome: request.body.nome, email: request.body.email })
//   return response.json().status(201)ujj
// })

// router.get('/carregar', (request, response) => {
//   listPessoas.push({ nome: 'Lucas Souza', email: 'lucasSouza@gmail.com' })
//   listPessoas.push({ nome: 'Aysha Cristina', email: 'Ayshacristina@gmail.com' })
//   listPessoas.push({ nome: 'Camilly Vitória', email: 'Camillyvitoria@gmail.com' })

//   return response.json({ list: listPessoas })
// })

app.listen(3000, () => { console.log('Running port 3000') })
