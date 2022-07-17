const express = require('express');
const logger = require('morgan');
const app = express();
const path = require('path')
app.use(logger('dev'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', 'views')

const {getResult, getWinner,getCurrentList, performCalculation } = require('./functions/general_functions')

app.get('/calculator', (req, res) => {
    let result_array = req.query
 
    let result = 0
    var index_result = 0
    console.log("result--------",Object.keys(result_array).length !== 0)

    if(Object.keys(result_array).length !== 0) {
        console.log("result--------",req.query)
        result_array.input1.map( (ele, ind) => {
            if(ele !== "" ) 
            {
                console.log(ele, ind)
                index_result = ind;
                return  ele
            }
        })
       
        result = performCalculation(result_array.input1[index_result], result_array.input2[index_result], result_array.symbol[index_result])
      
        res.render('calculator', {
            result:result || undefined, 
            operator:  result_array.symbol[index_result]
        })
    }else{
        res.render('calculator', {
            result:undefined, 
            operator: undefined
        })
    }

})

app.get('/random_person', (req, res) => {
    let person_name = getWinner(req.query.person_name)
    console.log(person_name)
    res.render('random_person',{person_name:person_name})
})

app.get('/car_status', (req, res) => {
    let year = req.query.years
    if( year !== undefined ){
        year = getResult(year)
    }
    res.render('car_status', {
        year: year,
    })
})
app.get("/list_dir", async (req, res) => {
    const result = await getCurrentList((path.join(__dirname)))
    res.render('list_dir',{result:result})
})
app.get('/', (req, res) => {
    
    res.render('welcome')
})
const PORT  = 2000;
const DOMAIN = 'localhost';

app.listen(PORT, DOMAIN, () => {
    console.log(`Server is listening on http://${DOMAIN}:${PORT}`)
})