/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 

 */
const faker = require('faker');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return  await knex('cohorts').del().then(() => {
    let num = 300;
    const imageUrl = "http://placeimg.com/640/"
    const cohorts = Array.from({length:20}).map(() => {
      names = []
      for(let i = 0 ; i < 20; i++){
        names.push(" "+faker.name.firstName())
      }
      num = num + 1
      return  {
        logoUrl : imageUrl+num.toString(),
        name : faker.name.jobArea(),
        members : names.join()
      }
    })
    return knex('cohorts').insert(cohorts)
  })
  
};
