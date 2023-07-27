const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const character = {
    'darth vader': {
        'name': 'Darth Vader',
        'homeworld': 'Tatooine',
        'species': 'human',
        'height': '6ft, 2in',
        'allegiance': 'sith, galactic empire',
        'image': 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0ff52ac183f14909e8780b174b99fc39a0fa8431a2c4fc4410f747a7bfd84304_1.jpg',
    },
    'ahsoka tano': {
        'name': 'Ahsoka Tano',
        'homeworld': 'Shili',
        'species': 'togruta',
        'height': '5ft, 5in',
        'allegiance': 'rebel alliance',
        'image': 'https://-a.akamaihd.net/v1/images/5cb3c849d5de240001a05880-image_c6729179.jpeg?region=0%2C125%2C1536%2C614',
    },
    'luke skywalker': {
        'name': 'Luke Skywalker',
        'homeworld': 'Tatooine',
        'species': 'human',
        'height': '5ft, 6in',
        'allegiance': 'jedi, rebel alliance',
        'image': 'https://pbs.twimg.com/media/Ev-fbCmVkAM4d0x?format=jpg&name=small',
    },
    'darth maul': {
        'name': 'Darth Maul',
        'homeworld': 'Dathomir',
        'species': 'dathomirian',
        'height': '5ft, 9in',
        'allegiance': 'sith',
        'image': 'https://i.imgflip.com/74auxj.jpg',
    },
    'yoda': {
        'name': 'Yoda',
        'homeworld': 'Dagobah',
        'species': 'unknown',
        'height': '2ft, 2in',
        'allegiance': 'jedi',
        'image': 'https://www.yourtango.com/sites/default/files/image_blog/yoda-quotes.png',
    },
    'palpatine': {
        'name': 'Palpatine',
        'homeworld': 'Naboo',
        'species': 'human',
        'height': '5ft, 8in',
        'allegiance': 'galactic republic',
    },
    'chewbacca': {
        'name': 'Chewbacca',
        'homeworld': 'Kashyyyk',
        'species': 'wookie',
        'height': '7ft, 6in',
        'allegiance': 'rebel alliance',
    },
    'han solo': {
        'name': 'Han Solo',
        'homeworld': 'Corellia',
        'species': 'human',
        'height': '6ft',
        'allegiance': 'rebel alliance',
    },
    'kylo ren': {
        'name': 'Kylo Ren',
        'homeworld': 'Chandrila',
        'species': 'human',
        'height': '6ft, 3in',
        'allegiance': 'first order, knights of ren, new jedi order',
    },
    'leia organa': {
        'name': 'Leia Organa',
        'homeworld': 'Alderaan',
        'species': 'human',
        'height': '5ft',
        'allegiance': 'rebel alliance, the resistance',
    },
    'r2-d2': {
        'name': 'R2-D2',
        'homeworld': 'Naboo',
        'species': 'droid',
        'height': '3ft, 7in',
        'allegiance': 'rebel alliance, the resistance',
    },
    'c-3po': {
        'name': 'C-3PO',
        'homeworld': 'Tatooine',
        'species': 'droid',
        'height': '5ft, 9in',
        'allegiance': 'rebel alliance, the resistance',
    },
    'mace windu': {
        'name': 'Mace Windu',
        'homeworld': 'Haruun Kal',
        'species': 'human',
        'height': '6ft, 3in',
        'allegiance': 'jedi, galactic republic',
    },
    'obi-wan kenobi': {
        'name': 'Obi-Wan Kenobi',
        'homeworld': 'Stewjon',
        'species': 'human',
        'height': '6ft',
        'allegiance': 'jedi',
    },
    'din djarin': {
        'name': 'Din Djarin',
        'homeworld': 'Aq Vetina',
        'species': 'human',
        'height': '6ft, 1in',
        'allegiance': 'mandolorians, bounty hunter',
    },
    'grogu': {
        'name': 'Grogu',
        'homeworld': 'Coruscant',
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
