


function organizeText() {
    let paragraphs = document.getElementById('paragraphInput').value

    let uniqueWords = 0;
    
   
    let arr = paragraphs.toLowerCase()
        .replace(/\n/g, " ")
        .replace(/[^\w\s\'-]/g, "")
        .split(' ')
        .sort()
        .sort((a, b) => a.length - b.length)
        .filter((x, i, s) => s.indexOf(x) == i && x.length > 0)

        uniqueWords = arr.length


    for (let i = 0, p = 0; i < arr.length; i++) {


        let length = arr[i].length
        if (length > p) {
            p = length;
            arr.splice(i, 0,`</ol></li><li><span>${p}</span><ol>`);
        }
    }

    
    
    let words = arr.map(w => {
        return `<li>${w}</li>`
    })
    
    document.getElementById('info').innerHTML = `Unique Words: ${uniqueWords}`


   
    
    document.getElementById('wordList').innerHTML = words.join('')
}


