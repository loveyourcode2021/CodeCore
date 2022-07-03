const knex = require('./client');
knex.select("*").from('posts').then(data => {
    console.log(data)
    knex.destroy();
}) 