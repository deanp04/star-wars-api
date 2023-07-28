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
        'image': 'https://www.looper.com/img/gallery/the-untold-truth-of-ahsoka-tano/intro-1584131265.jpg',
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
        'image': 'https://img.memegenerator.net/instances/81963699.jpg'
    },
    'chewbacca': {
        'name': 'Chewbacca',
        'homeworld': 'Kashyyyk',
        'species': 'wookie',
        'height': '7ft, 6in',
        'allegiance': 'rebel alliance',
        'image': 'https://i.chzbgr.com/full/9789323520/h905699C4/part-aggg-rooo-ragg-roooogghh-did-not-understand-imgflipcom'
    },
    'han solo': {
        'name': 'Han Solo',
        'homeworld': 'Corellia',
        'species': 'human',
        'height': '6ft',
        'allegiance': 'rebel alliance',
        'image': 'https://i.chzbgr.com/full/5311211776/h0D2FF4BE/han-solo'
    },
    'kylo ren': {
        'name': 'Kylo Ren',
        'homeworld': 'Chandrila',
        'species': 'human',
        'height': '6ft, 3in',
        'allegiance': 'first order, knights of ren, new jedi order',
        'image': 'https://www.washingtonpost.com/news/comic-riffs/wp-content/uploads/sites/15/2015/12/STARWARS-kylo-ren-awakens.jpg'
    },
    'leia organa': {
        'name': 'Leia Organa',
        'homeworld': 'Alderaan',
        'species': 'human',
        'height': '5ft',
        'allegiance': 'rebel alliance, the resistance',
        'image': 'https://www.themarysue.com/wp-content/uploads/2017/01/C0tEq_RXcAAmHsn.jpg?fit=540%2C311'
    },
    'r2-d2': {
        'name': 'R2-D2',
        'homeworld': 'Naboo',
        'species': 'droid',
        'height': '3ft, 7in',
        'allegiance': 'rebel alliance, the resistance',
        'image': 'https://images.squarespace-cdn.com/content/v1/5816496ef5e2319b546c5d19/1496337570456-RJGQM9UF7G1BUFO3XX8M/image-asset.jpeg'
    },
    'c-3po': {
        'name': 'C-3PO',
        'homeworld': 'Tatooine',
        'species': 'droid',
        'height': '5ft, 9in',
        'allegiance': 'rebel alliance, the resistance',
        'image': 'https://imgix.ranker.com/list_img_v2/3106/2563106/original/times-c-3po-was-awesome?w=817&h=427&fm=jpg&q=50&fit=crop'
    },
    'mace windu': {
        'name': 'Mace Windu',
        'homeworld': 'Haruun Kal',
        'species': 'human',
        'height': '6ft, 3in',
        'allegiance': 'jedi, galactic republic',
        'image': 'https://www.nme.com/wp-content/uploads/2016/09/2015StarWarsGallery_MaceWindu_Press_131115-696x462.jpg'
    },
    'obi-wan kenobi': {
        'name': 'Obi-Wan Kenobi',
        'homeworld': 'Stewjon',
        'species': 'human',
        'height': '6ft',
        'allegiance': 'jedi',
        'image': 'https://www.digitalmomblog.com/wp-content/uploads/2022/05/hello-there-meme-obi-wan.jpg'
    },
    'din djarin': {
        'name': 'Din Djarin',
        'homeworld': 'Aq Vetina',
        'species': 'human',
        'height': '6ft, 1in',
        'allegiance': 'mandolorians, bounty hunter',
        'image': 'https://www.digitalmomblog.com/wp-content/uploads/2023/01/mandalorian-baby-yoda-meme.jpeg'
    },
    'grogu': {
        'name': 'Grogu',
        'homeworld': 'Coruscant',
        'species': 'unknown',
        'height': '1ft, 1in',
        'allegiance': 'unknown',
        'image': 'https://insidethemagic.net/wp-content/uploads/2020/12/Screen-Shot-2020-12-26-at-7.49.52-PM-800x400.png'
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
