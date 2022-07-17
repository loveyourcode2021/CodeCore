/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 const faker = require('faker');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return await knex('clucks').del().then(() => {

    const hashes = ["#kayle", "#chips", "#roosterjokes", "#greneggs","$tatooed","#letterpressed"]
    

    faker.name.firstName()
    let num = 300;
    const imageUrl = "http://placeimg.com/640/"
    const cohorts = Array.from({length:20}).map(() => {
      const loop = Math.random()*3    
      let num = Math.round((Math.random() * 80) + 400);;
      let result = [];
      for(let i = 0; i < loop; i++){
          let j  = Math.round(Math.random()*hashes.length)
          result.push(hashes[j] + " ")
      }
      return  {
        username : faker.name.firstName(),
        content : result.join("")+faker.lorem.words(10),
        image_url : `http://placeimg.com/640/${num}`
      }
    })
    return knex('clucks').insert(cohorts)
  })
};











