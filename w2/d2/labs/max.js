const maxNum = (numbers, max) => {
    numbers.map((ele, index) => { if(max < ele) max = ele }) 
    console.log(max)
}
const maximum = (numbers) => maxNum(numbers, numbers[0]);
maximum([213,12,66,999])