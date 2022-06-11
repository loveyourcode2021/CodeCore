var size = parseInt(process.argv[2])
for(var i = 1 ; i <= size ; i++)
{
    let space = ' '.repeat(size-i);

    let star = '*'.repeat(i*2 - 1)
    console.log(space+star+space)
}