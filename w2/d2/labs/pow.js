let power = (n,y) =>
{
    if(y == 1) return n;
    else return n * power(n, y-1);
}
console.log(power(3,5))