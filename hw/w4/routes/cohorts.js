const express = require("express");
const router = express.Router();
const knex = require("../db/clients");
const faker = require('faker');
const knexfile = require("../knexfile");
const { application } = require("express");

let num = 400;


router.get("/new", (req, res) => {
    res.render("cohorts/new");
});

//'id'
//'member'
//'name'
//'logoUr;
router.get("/", (req, res, next) => {
  const imageUrl = "http://placeimg.com/640/"
  num++
  const logoUrl = req.query.logoUrl || imageUrl+num.toString()
  const cohort_name = req.query.name || undefined
  names = []
  if(cohort_name !== undefined) {
    for(let i = 0 ; i < 14 ; i++){ 
      names.push(" "+faker.name.firstName())
    if(i === 14) break;
    };
    const cohort_members = req.query.members || names.join();
  
    knex('cohorts').insert({
      logoUrl : logoUrl,
      name : cohort_name,
      members: cohort_members
    },
    "*"
    ).then( (cohorts) => {
      console.log(`insert ----`, cohorts)
    })
  }
  next()
})


router.get("/", (req, res, next) => {
  knex
  .select("*")
  .from("cohorts")
  .orderBy("id", "DESC")
  .then((cohorts) => {
    console.log(cohorts.imageUrl)
    res.render("cohorts/cohorts", { cohorts: cohorts});
  });
});


router.get("/:id", (req, res, next) => {
  let id = req.params.id
  const isNumberPerTeam = "number-per-team" in req.query
  const isTeamCount = "team-count" in req.query
  console.log("I was called")
  if(id && isNumberPerTeam === false && isTeamCount === false){
    console.log("I am here")
    knex.select("*").from("cohorts").where("id", id).then((cohort) =>{
        res.render("cohorts/singleCohort", {cohort:cohort});
    })
  }

  
  if(id && isNumberPerTeam === false && isTeamCount === true){
    const query = [req.query]
    console.log("isTeamCount -> ", isTeamCount)
    res.render("cohorts/singleCohort", {cohort:[req.query]});
  }  



  if(id && isNumberPerTeam === true && isTeamCount === false){
    const query = [req.query]
    console.log("isNumberPerTeam -> ", query[0].members)
    res.render("cohorts/singleCohort", {cohort:[req.query]});
  }  

})

router.get("/:id/delete", (req, res, next) => {
  console.log("hello from edit route");
  knex("cohorts")
    .where("id", req.params.id)
    .first()
    .then((cohort) => {
      console.log(cohort)
      res.render("cohorts/edit", { cohort: [cohort] });
    });
});

// NAME: notes#edit, METHOD: GET, PATH: /notes/:id/edit
router.get("/:id/edit", (req, res, next) => {
  console.log("hello from edit route");
  knex("cohorts")
    .where("id", req.params.id)
    .first()
    .then((cohort) => {
      console.log(cohort)
      res.render("cohorts/edit", { cohort: [cohort] });
    });
});

router.patch("/:id", (req, res) => {
  console.log("hello how are you 2222");
  const updatedCohort = {
    name: req.body.name,
    members: req.body.members,
  };

  console.log("sexy!!!!")
  knex("cohorts")
    .where("id", req.params.id)
    .update(updatedCohort)
    .then(() => {
      res.redirect(`/cohorts/${req.params.id}`);
  });
});

router.delete("/:id/delete", (req, res) => {
  console.log("we lost you")
  knex('cohorts')
  .where('id', req.params.id)
  .del()
  .then(() => {
    res.redirect('/cohorts')
  })
})



module.exports = router;