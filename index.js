// https://evening-waters-50143.herokuapp.com/ | https://git.heroku.com/evening-waters-50143.git
const express = require('express')
const app = express()
var morgan = require('morgan')
// initialize middleware
app.use(express.json())
// app.use(morgan('tiny'))
const cors = require('cors')
app.use(cors())
app.use(express.static('build'))

require('dotenv').config()
const Person = require('./models/person')

// morgan customized MIDDLEWARE
morgan.token('response-body', function getRB (request) {
    return request.body
  })
app.use(morgan(':response-time :response-body'))

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    //console.log("how many times this loaded..") // Seems this just run once
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person){
        response.json(person)
    } else{
        response.status(404).end()
    }
    })
    .catch(error => next(error))
  })

app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    const person = new Person({
      name: body.name,
      number: body.number,
    })
    console.log("it can make object")
    person.save().then(savedPerson => {
      response.json(savedPerson)
    })
    .catch(error => {
      console.log(`it passes the ${error}`)
      next(error)
})
})
//TODO: Update for MongoDB integration
app.get('/info', (request, response) => {
    Person.find({}).then(persons => {
      response.send(`
        Phonebook has info for ${persons.length} people<br/> ${Date()}`)
      })
  })

// MIDDLEWARE to catch errors (after routes, where example of routes = '/info')
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' }) // good practice!
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})