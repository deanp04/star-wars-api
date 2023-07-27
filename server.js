const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const character = {
    'darth vader': {
        'homeworld': 'tatooine',
        'species': 'human',
        'height': '6ft, 2in',
        'allegiance': 'sith, galactic empire',
        'image': 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0ff52ac183f14909e8780b174b99fc39a0fa8431a2c4fc4410f747a7bfd84304_1.jpg'
    },
    'ahsoka tano': {
        'homeworld': 'shili',
        'species': 'togruta',
        'height': '5ft, 5in',
        'allegiance': 'rebel alliance',
    },
    'luke skywalker': {
        'homeworld': 'tatooine',
        'species': 'human',
        'height': '5ft, 6in',
        'allegiance': 'jedi, rebel alliance',
    },
    'darth maul': {
        'homeworld': 'dathomir',
        'species': 'dathomirian',
        'height': '5ft, 9in',
        'allegiance': 'sith',
    },
    'yoda': {
        'homeworld': 'dagobah',
        'species': 'unknown',
        'height': '2ft, 2in',
        'allegiance': 'jedi',
    },
    'palpatine': {
        'homeworld': 'naboo',
        'species': 'human',
        'height': '5ft, 8in',
        'allegiance': 'galactic republic',
    },
    'chewbacca': {
        'homeworld': 'kashyyyk',
        'species': 'wookie',
        'height': '7ft, 6in',
        'allegiance': 'rebel alliance',
    },
    'han solo': {
        'homeworld': 'corellia',
        'species': 'human',
        'height': '6ft',
        'allegiance': 'rebel alliance',
    },
    'kylo ren': {
        'homeworld': 'chandrila',
        'species': 'human',
        'height': '6ft, 3in',
        'allegiance': 'first order, knights of ren, new jedi order',
    },
    'leia organa': {
        'homeworld': 'alderaan',
        'species': 'human',
        'height': '5ft',
        'allegiance': 'rebel alliance, the resistance',
    },
    'r2-d2': {
        'homeworld': 'naboo',
        'species': 'droid',
        'height': '3ft, 7in',
        'allegiance': 'rebel alliance, the resistance',
    },
    'c-3po': {
        'homeworld': 'tatooine',
        'species': 'droid',
        'height': '5ft, 9in',
        'allegiance': 'rebel alliance, the resistance',
    },
    'mace windu': {
        'homeworld': 'haruun kal',
        'species': 'human',
        'height': '6ft, 3in',
        'allegiance': 'jedi, galactic republic',
    },
    'obi-wan kenobi': {
        'homeworld': 'stewjon',
        'species': 'human',
        'height': '6ft',
        'allegiance': 'jedi',
    },
    'din djarin': {
        'homeworld': 'aq vetina',
        'species': 'human',
        'height': '6ft, 1in',
        'allegiance': 'mandolorians, bounty hunter',
    },
    'grogu': {
        'homeworld': 'coruscant',
        'species': 'unknown',
        'height': '1ft, 1in',
        'allegiance': 'unknown',
    },
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html') 
})

app.get('/api/:name', (req, res)=>{
    const charName = req.params.name.toLowerCase()
    if( character[charName]){
        res.json(character[charName])
    }else{
        res.json(character['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! You betta go catch it!`)
})
