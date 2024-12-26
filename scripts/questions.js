import {baseUrl} from "./baseurl.js";

function fetchReviewedQuestions(){
    fetch(`${baseUrl}/questions`)
    .then(res => res.json())
    .then(data => {
        const renderQuestions = data.filter(q => q.reviewStatus);
        renderQuestions(reviewedQuestions);
    });
}

function renderQuestions(questions){
    const cont = document.getElementById("questionContainer");
    cont.innerHTML = '';
    questions.forEach(question =>{
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<p>${question.statement}</p>`;
        cont.appendChild(card);
    });
}

fetchReviewedQuestions();
