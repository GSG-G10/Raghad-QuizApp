let score = 0  
function addQuestion(){
    fetch(`https://opentdb.com/api.php?amount=50&type=multiple`)
    .then(response => {return response.json()})
    .then(data => {
        let r = parseInt(Math.random()*50)
        randomQ = data.results[r].question
        correctChoice = data.results[r]["correct_answer"]
        qChoices = (data.results[r]["incorrect_answers"])
        qChoices.push(correctChoice)
        let questionBox = document.createElement("p")
        questionBox.setAttribute('class',"question")
        let questionText = document.createTextNode(randomQ);
        questionBox.appendChild(questionText);
        document.querySelector(".question-section").appendChild(questionBox);
        qChoices.forEach(ele=>{
            let choiceBox = document.createElement("p")
            choiceBox.setAttribute('class','choice')
            let choiceText = document.createTextNode(ele);
        choiceBox.appendChild(choiceText);
        document.querySelector(".choices-section").appendChild(choiceBox);
        })
    })
}
addQuestion()
document.querySelector("#next-button").addEventListener('click', addQuestion)

        