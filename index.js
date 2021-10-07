
const words = document.getElementById("txtid")
const wordCount = document.getElementById("count")
const characterCount = document.getElementById("character")
const longWord = document.getElementById("longest-word")


words.addEventListener('keyup', countWord)

function countWord(){
    let longestWord = " "
    let res = []
    let str = words.value.replace(/[\t\n\r\.\?\!\,]/gm, " ").split(" ")
    
    str.map((s) => {
            let trimStr = s.trim();
            if (trimStr.length > 0) {
              res.push(trimStr);
            }
          });
          
    for(let i = 0; i < res.length; i++){
        if(longestWord.length < res[i].length){
            longestWord = res[i]
        }
    }
    wordCount.innerText = res.length
    characterCount.innerText = words.value.length
    longWord.innerText = longestWord
}
