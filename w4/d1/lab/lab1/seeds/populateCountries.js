const countries = require("../allCountries")
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */


exports.seed = async function(knex) {
  // Deletes ALL existing entries
  let country_name = countries[0].countryName;
  let country_code = countries[0].countryCode;
  let max = countries.length
  return knex('countries').del()
  .then(function () {
    // insert into posts
    const all_noDuplicate = []
    countries.map((country, index) => {
      let next = index+1;
      const cur = index;
      if(next < max){
        if(countries[next].countryName !==country.countryName && 
          countries[next].countryCode !== country.countryCode 
          ) {
          all_noDuplicate.push({
            name: country_name,
            code: country_code
          })
        }else{
          country_name = country.countryName;
          country_code = country.countryCode;
        }
      }
      return all_noDuplicate
    })
    console.log(all_noDuplicate)
    return knex('posts').insert(posts)
  })
    

};
