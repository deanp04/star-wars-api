const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const character = {
    'darth vader': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'ahsoka tano': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'luke skywalker': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'darth maul': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'yoda': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'palpatine': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'chewbacca': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'han solo': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'kylo ren': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'leia organa': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'r2-d2': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'c-3po': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'mace windu': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'obi-wan kenobi': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'din djarin': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
    'grogu': {
        'homeworld': ,
        'species': ,
        'height': ,
        'allegiance': ,
    },
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html') 
})

app.get('/api/:name', (req, res)=>{
    const rapperName = req.params.name.toLowerCase()
    if( rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! You betta go catch it!`)
})
