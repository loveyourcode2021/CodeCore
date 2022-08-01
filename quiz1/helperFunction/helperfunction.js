module.exports = function getHashTags(inputText) {  
    result = ""
    data.forEach((element) => {
        result+= element.content.toString()
    })
    console.log(result)
    var freqMap = {};
    result.match(/#[\p{L}]+/ugi).forEach(function(w) {
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });
    return freqMap
}

