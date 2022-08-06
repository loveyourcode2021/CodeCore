

window.onload = function () {
    const log = console
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    var words = [];      // before storing geusses
    var quizWord = "";       //after selecting words
    let mistakes = 0
    let correctWord = "";
    let guessWord = "";
;
    let answer = document.querySelector("#keyboard")

    let generateButtons = () => {
        let selectButtons = document.querySelector(".buttons")
        let ul  = document.createElement("div")
        ul.classList.add("alphabet")
        for(let i = 0 ; i <  alphabet.length; i++){
            let letters = alphabet[i]
            let button  = document.createElement('button')
            button.classList.add("alphabet-list")
            button.setAttribute("class","btn btn-lg btn-primary m-2" )
            button.innerHTML = letters
            ul.appendChild(button)
        }
        selectButtons.append(ul)
    }
    /**
     * generate hangman when you make mistakes
     */
    let generateHangman = () => {
        document.getElementById('hangmanPic').setAttribute("src", './images/' + mistakes + '.jpg');
    }
    /**
     * generates word if it contains and make a image of hangman
     * @param {*} word 
     */
    let generateAnswer = (wordAt = -1, isFirst) => {
        const quizLength = quizWord.length
        if( mistakes < 6)
        {
            console.log(mistakes)
            if(wordAt < 0){
                //not init
                if(isFirst === false){
                    mistakes++
                    generateHangman()
                    document.querySelector("#mistakes").innerText = mistakes
                }else{// init
                    correctWord = ("_ ").repeat(quizLength)
                    answer.innerText = correctWord
                }
                
            }else{// update the correct info
                correctWord = correctWord.split(" ")
                correctWord[wordAt] = quizWord.charAt(wordAt)
                correctWord = correctWord.join(" ")
                answer.innerHTML = correctWord
            
            }
        }else{
            console.log("i am here")
            const gameOver = "Game Over"
            answer.innerText = gameOver
            answer.style.color = "red"
            answer.style.fontSize = "20px";
            answer.style.fontStyle = "bold"
        }

        
    }

    //gen random num
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //init words based on the words
    let generateWords = () =>{
        words = ["java", "python", "rails", "ruby", "node", "javascript"]
        console.log("generateWords",getRandomArbitrary(0, words.length))
        quizWord = words[getRandomArbitrary(0, words.length)]
        generateAnswer(-1, true)
    }
  
 
    let handleGuess = (word) => {
        let result = quizWord.indexOf(word.toLowerCase())
        if(result > -1 ){
            generateAnswer(result, false)
        }else{
            generateAnswer(result, false)
        }
    }
    let clickButtons = () => {
        let selectLetters = document.querySelectorAll(".buttons button")
        selectLetters.forEach(childNode => {
            childNode.addEventListener("click", (event) => {         
                handleGuess(event.currentTarget.innerText)
            });
        });
    };
    
    let resetBtn = () => {
        const reset = document.querySelector(".reset-btn")
        reset.addEventListener("click", (e)=>{
            document.getElementById('hangmanPic').setAttribute("src", '../images/' + 0 + '.jpg');
            correctWord = "";
            mistakes = 0;
            answer.style.color = "black"
            generateWords()
        })
    }

    let startUp = () => {
        generateWords()
        generateButtons()
        clickButtons()
        resetBtn()
    }
  
    startUp()
    


  }
  
  
  