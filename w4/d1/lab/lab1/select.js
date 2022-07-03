const knex = require('./client');

 

knex.select("*").from("countries").where('name', 'ILIKE', 'b%').then(data => {
    console.log(data)
    knex.destroy();
})

knex.select("*").from("countries").where('name', 'ILIKE', '%central%').then(data => {
    console.log(data.length)
    knex.destroy();
})

knex.select("*").from("countries").where('name', 'ILIKE', 'central%').then(data => {
    console.log(data.length)
    knex.destroy();
})