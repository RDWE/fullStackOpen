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

const PORT = 3001; 
app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
}); 