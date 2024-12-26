import {baseUrl} from "./baseurl.js";

function fetchQuestions(){
    fetch(`${baseUrl}/questions`)
    .then(res => res.json())
    .then((data) => renderQuestions(data));
}

function renderQuestions(questions){
    const cont = document.getElementById("questionContainer");
    cont.innerHTML = '';
    questions.forEach(questions =>{
        const card = document.getElementById("div");
        card.className = `card ${question.reviewStatus? 'violet' : 'blue'}`;
        card.innerHTML = `
        <p>${question.statement}</p>
        <button onClick="reviewQuestion(${question.id})>Review Question</button>
        <button onClick="deleteQuestion(${question.id})>Delete Question</button>`;
        cont.appendChild(card);
    });
}

function reviewQuestion(id){
    if(confirm("Are you sure to review the question?"))
    {
        fetch(`${baseUrl}/${id}`,{
            method: 'PATCH',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({reviewStatus: true})
        })
        .then(fetchQuestions)
    }
}

function deleteQuestion(id){
    if(confirm("Are you sure to delete?"))
    {
        fetch(`${baseUrl}/${id}`,{
            method: 'DELETE',
        })
        .then(fetchQuestions)
    }
}

document.getElementById("quizForm").addEventListener("submit",function(){
    event.preventDefault();
    const question = {
        statement: document.getElementById('question').value,
        optionA: document.getElementById('optionA').value,
        optionB: document.getElementById('optionB').value,
        optionC: document.getElementById('optionC').value,
        optionD: document.getElementById('optionD').value,
        correctOption: document.getElementById('correctOption').value,
        reviewStatus: false
    };
    fetch(`${baseUrl}/questions`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(question)
    })
    .then(()=>{
        alert("Question Created");
        fetchQuestions();
    });
});

fetchQuestions();