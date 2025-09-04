let score = 0
let btnA = document.getElementById("A")
let btnB = document.getElementById("B")
let btnC = document.getElementById("C")
let btnD = document.getElementById("D")
let curent = 0
let questions = 5
let question1 = "What is Dom Cobb's main profession in the movie?"
let question2 = "What item does Cobb use as his totem to determine if he's in a dream or reality?"
let question3 = "Who plays Mal, Cobb's deceased wife who appears in his dreams?"
let question4 = "What is the name of the job that Saito hires Cobb's team to perform?"
let question5 = "What French musical piece, when slowed down, creates the kick signal throughout the nested dream levels, and approximately how long do Cobb and Mal experience in limbo?"
let answer1 = "A"
let answer2 = "C"
let answer3 = "C"
let answer4 = "D"
let answer5 = "C"
let next = document.getElementById("next")

next.onclick = () => {
    curent++
    loadQuestion()
}

function loadQuestion() {
    if(curent > questions++) {
        document.getElementById("question").innerHTML = "<h1>congrats! you finished the quiz. Her is your score: " + score + "</h1>"
    }
    else {
        curent++
    }
    if(curent == 1){
        document.getElementById("question").innerHTML = "<h2> Question 1 <br> " + question1 + "</h2>"
        document.getElementById("A").innerHTML = "<button class='button' id='A'>Architect</button>"
        document.getElementById("B").innerHTML = "<button class='button' id='B'>Extractor (dream thief)</button>"
        document.getElementById("C").innerHTML = "<button class='button' id='C'>Psychiatrist</button>"
        document.getElementById("D").innerHTML = "<button class='button' id='D'>Security expert</button>"
    }
    if(curent == 2){
        document.getElementById("question").innerHTML = "<h2> Question 2 <br> " + question2 + "</h2>"   
        document.getElementById("A").innerHTML = "<button class='button' id='A'>A chess piece</button>"
        document.getElementById("B").innerHTML = "<button class='button' id='B'>Extractor (dream thief)</button>"
        document.getElementById("C").innerHTML = "<button class='button' id='C'>Psychiatrist</button>"
        document.getElementById("D").innerHTML = "<button class='button' id='D'>Security expert</button>"
    }
    if(curent == 3){
        document.getElementById("question").innerHTML = "<h2> Question 3 <br> " + question3 + "</h2>"
        document.getElementById("A").innerHTML = "<button class='button' id='A'>Architect</button>"
        document.getElementById("B").innerHTML = "<button class='button' id='B'>Extractor (dream thief)</button>"
        document.getElementById("C").innerHTML = "<button class='button' id='C'>Psychiatrist</button>"
        document.getElementById("D").innerHTML = "<button class='button' id='D'>Security expert</button>"
    }
    if(curent == 4){
        document.getElementById("question").innerHTML = "<h2> Question 4 <br> " + question4 + "</h2>"   
        document.getElementById("A").innerHTML = "<button class='button' id='A'>Architect</button>"
        document.getElementById("B").innerHTML = "<button class='button' id='B'>Extractor (dream thief)</button>"
        document.getElementById("C").innerHTML = "<button class='button' id='C'>Psychiatrist</button>"
        document.getElementById("D").innerHTML = "<button class='button' id='D'>Security expert</button>"
    }
    if(curent == 5){
        document.getElementById("question").innerHTML = "<h2> Question 5 <br> " + question5 + "</h2>"
        document.getElementById("A").innerHTML = "<button class='button' id='A'>Architect</button>"
        document.getElementById("B").innerHTML = "<button class='button' id='B'>Extractor (dream thief)</button>"
        document.getElementById("C").innerHTML = "<button class='button' id='C'>Psychiatrist</button>"
        document.getElementById("D").innerHTML = "<button class='button' id='D'>Security expert</button>"
    }
}

