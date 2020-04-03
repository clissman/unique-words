


function organizeText() {
    let paragraphs = document.getElementById('paragraphInput').value
    let arr = (Array.from(new Set(paragraphs.toLowerCase().replace(/[^\w\s]/g, "").replace(/\n/g, " ").split(' '))).sort().sort((a, b) => a.length - b.length))
    
    for (let i = 0, p = 0; i < arr.length; i++) {
        if (arr[i].length > p) {
            p = arr[i].length;
            arr.splice(i, 0,`</ol></li><li><span>${p}</span><ol>`);
        }
    }

    let words = arr.map(w => {
        return `<li>${w}</li>`
    })
    
    document.getElementById('wordList').innerHTML = words.join('')
}


