const pg = require("pg")
const express = require("express")
const app = express();
const port = process.env.port || 8080;

app.get('/', async (req, res) => {
    try {
        const response = await client.query(`SELECT * FROM family;`)
        const family = response.rows;
        
        const html = `<html>
                        <body> 
                            <h1> My family </h1>
                            <ul> ${family.map(member => `
                              <li>
                                    <a href= '/family/${member.id}'>
                                    ${member.firstname}
                                    </a>
                                </li>
                            `).join(' ')}
                            </ul>
                        <body
                    <html>`
        
      
          res.send(html)
    } catch(error) {
        console.log(error)
    }
})




app.get('/family/:id', async (req, res) => {
    try {
        const response = await client.query('SELECT * FROM family WHERE id = $1;', [req.params.id])
        const member = response.rows[0]
        
        const html = `<html>
                        <head></head>
                        <body> 
                            <h1> <a href= '/'> My family </a> </h1>
                            <h2> ${member.firstname} ${member.lastname} </h2>
                            <p> ${member.bio} </p>
                           
                        <body>
                    <html>`
        
      
          res.send(html)
    } catch(error) {
        console.log(error)
    }
})
















const client = new pg.Client('postgres://localhost/dealers_choice_db');


// when we get back we need to create SQL table and get it set up the same way as before.
const sqlTable = async() => {
    const SQL = `
    DROP TABLE IF EXISTS family;
    CREATE TABLE family(
    id INTEGER PRIMARY KEY,
    firstName VARCHAR (20),
    lastName VARCHAR(20),
    bio TEXT DEFAULT NULL
    );
    
    INSERT INTO family(id, firstName, lastName, bio) VALUES(1, 'Jackie', 'Smith', 'She is the love of my life.');
    INSERT INTO family(id, firstName, lastName, bio) VALUES(2, 'Gary', 'Smith Sr', 'He was an amazing Dad.');
    INSERT INTO family(id, firstName, lastName, bio) VALUES(3, 'Melissa', 'Smith', 'The best mother I can ask for.');
    `;
    
    await client.query(SQL);
}

const setup = async() => {
    try {
        await client.connect();
        await sqlTable();
        console.log('connected to database')
        
    } catch(error) {
        console.log(error)
    }
}

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

setup();