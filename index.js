// https://evening-waters-50143.herokuapp.com/ | https://git.heroku.com/evening-waters-50143.git
const express = require('express')
const app = express()
var morgan = require('morgan')
// initialize middleware
app.use(express.json())
// app.use(morgan('tiny'))

const cors = require('cors')
app.use(cors())

// sort-of DATABASE
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
// morgan customized MIDDLEWARE
morgan.token('response-body', function getRB (request) {
    return request.body
  })
app.use(morgan(':response-time :response-body'))

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    
    if (person){
        response.json(person)
    } else{
        response.status(404).end()
    }
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)
    response.status(204).end()
  })

const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(p => p.id))
        : 0
    return maxId + 1
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    console.log(body)
    if (!body.name || !body.number) {
        return response.status(400).json({ 
          error: 'Name and,or Number missing' 
        })
      }
    if (persons.map(p => p.name).includes(body.name)){
        return response.status(400).json({ 
            error: 'Name exists in list already' 
          })
    }  

    const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
    }

    persons = persons.concat(person)
    response.json(person)
})

app.get('/info', (request, response) => {
    const personsCount = persons.length
    response.send(`Phonebook has info for ${personsCount} people <br/> ${Date()}`)
    response.send(`Phonebook hath tomato`)
  })

// MIDDLEWARE to catch errors (after routes, where example of routes = '/info')
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})