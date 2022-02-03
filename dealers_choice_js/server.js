const express = require('express')
const morgan = require('morgan')
const family = require('./family.js')
const app = express();
const path = require('path')

const fam = family.familyList()



const port = 8080;
// allows me to use images from a different folder.
app.use(express.static(path.join(__dirname, 'misc')))

app.use(morgan('dev'));

app.get("/", (req, res) => {
    const html = 
    `<html>
    <head>
        <title> My family </title>
        <link rel ='stylesheet' href = "styles.css">
    </head>
    
        <body>
        
            <h1 <a href='/'> My Family </a> </h1>
                <div class = 'container'>
           
                <ul id ='list'>
                   ${fam.map(person => 
                  `<div class = 'relatives'>
                  <li>
                  <a href ="/family/${person.name}"> ${person.name}</a>
                  </li></div>`).join(' ')}
                  
                </div>
                </ul>
              
            
            
           
        </body>
    </html>`
    res.send(html)
})








app.get("/family/:name", (req, res) => {
    console.log(req.params)
  
    const currentName = req.params.name
      const person = fam.find(person => person.name === currentName)
    const html = 
    `<html>
    <head>
        <title> Family </title>
        <link rel ='stylesheet' href = /"styles.css">
    </head>
    
        <body>
        
         <h1> <a href='/'> My Family </a> </h1>
        
           <h1>${currentName}</h1>
           
           <p> ${currentName} is my ${person.relation}, who is a ${person.age} year old ${person.gender} who I met in ${person.yearMet}.
           <b>I love ${currentName}!</b>
           <p>
            
           
        </body>
    </html>`
    res.send(html)
})





app.listen(port, () => {
    console.log(`listening on port ${port}`)
})



