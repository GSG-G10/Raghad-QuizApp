let score = 0  
let questionNum = 1

function createQuestsionSection(q){
    document.querySelector(".question-section").innerHTML = "";
    let questionBox = document.createElement("p")
    questionBox.setAttribute('class',"question")
    let questionText = document.createTextNode(q);
    questionBox.appendChild(questionText);
    document.querySelector(".question-section").appendChild(questionBox);
}

function createChoicesSection(c){
    document.querySelector(".choices-section").innerHTML = "";
    qChoices.forEach(ele=>{
        let choiceBox = document.createElement("button")
        choiceBox.setAttribute('class','choice')
           
        let choiceText = document.createTextNode(ele);
        choiceBox.appendChild(choiceText);
        document.querySelector(".choices-section").appendChild(choiceBox);
    })
}

function addQuestion(){
    fetch(`https://opentdb.com/api.php?amount=50&type=multiple`)
    .then(response => {return response.json()})
    .then(data => {
        let r = parseInt(Math.random()*50)
        randomQ = data.results[r].question
        correctChoice = data.results[r]["correct_answer"]
        qChoices = (data.results[r]["incorrect_answers"])
        qChoices.push(correctChoice)
        createQuestsionSection(randomQ)
        createChoicesSection(qChoices)      
    })
}
addQuestion()
document.querySelector("#next-button").addEventListener('click', addQuestion)

        