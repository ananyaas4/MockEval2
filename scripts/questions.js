import {baseUrl} from "./baseurl.js";

function fetchReviewedQuestions(){
    fetch(`${baseUrl}/questions`)
    .then(res => res.json())
    .then((data) => {
        renderQuestions = data.filter(q => q.reviewStatus);
        renderQuestions(reviewedQuestions);
    });
}

function renderQuestions(questions){
    const cont = document.getElementById("questionContainer");
    cont.innerHTML = '';
    questions.forEach(questions =>{
        const card = document.getElementById("div");
        card.className = "card";
        card.innerHTML = `<p>${question.statement}</p>`;
        cont.appendChild(card);
    });
}

fetchReviewedQuestions();
