const express = require("express"); 
const app = express(); 

app.use(express.json()); 

let data = [
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

app.get('/api/persons', (request, response) => { 
    return response.json(data)
})

app.get('/api/persons/:id', (request, response) => { 
    const id  = Number(request.params.id); 
    const name = data.find(entry => entry.id === id) 

    if (name) {
        return response.json(name); 
    } else { 
        return response.status(404).end(); 
    }
})

app.get('/info', (request, response) => { 
    return response.send(`Phonebook has information for ${data.length} people.<br>${Date()}`)
})

app.delete('/api/persons/:id', (request, response) => { 
  // Instead of some function call, delete the element from the data array. No return statement
  const id = Number(request.params.id)
  data = data.filter(d => d.id !== id)
  response.status(204).end()
})

const generateNum = (max) => { 
  return Math.floor(Math.random() * max); 
}

app.post('/api/persons', (request, response) => {
    const body = request.body; 
    const dataNames = data.map(datum => datum.name)

    if (!body.name || !body.number) { 
      return response.status(400).json({
        error: "Name or Number is Missing"
      })
    } else if (dataNames.includes(body.name)) { 
      return response.status(400).json({
        error: "Name must be unique"
      })
    }

    const person = { 
      id: generateNum(100000000), 
      name: body.name, 
      number: body.number
    }

    data = data.concat(person)
    response.json(person); 
})

const PORT = 3001; 
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
}); 