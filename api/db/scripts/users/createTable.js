import query from '../index.js';

const sqlString = 
`CREATE TABLE IF NOT EXISTS help 
(id SERIAL PRIMARY KEY, fname TEXT, lname TEXT, room INT, problem TEXT, tried TEXT);`; 


async function createHelpTable() {
    const res = await query(sqlString);
    console.log("Created books table", res)
}

createHelpTable();
