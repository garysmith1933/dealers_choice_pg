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
        
            <h1 <a href='/'> My Family </h1>
                <div class = 'container'>
           
                <ul id ='list'>
                   ${fam.map(person => 
                  `<div class = 'relatives'>
                  <li>
                  <a href ="/family/${person.name}"> ${person.name}</a>
                  </li></div>`).join(' ')}
                
                </ul>
                </div>
            
            
           
        </body>
    </html>`
    res.send(html)
})

app.get("/family/:name", (req, res) => {
    console.log(req.params.name)
    const html = 
    `<html>
    <head>
        <title> New Page </title>
        <link rel ='stylesheet' href = /"styles.css">
    </head>
    
        <body>
        
            <h1 <a href='/'> My Family </a> </h1>
         
           
                <ul id ='list'>
                   ${fam.map(person =>`<li><a href ="/family/"${person.name}> ${person.name}</a></li>`).join(' ')}
                </ul>
                </div>
            
            
           
        </body>
    </html>`
    res.send(html)
})





app.listen(port, () => {
    console.log(`listening on port ${port}`)
})



