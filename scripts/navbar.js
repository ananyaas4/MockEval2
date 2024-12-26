const navbar = () => {
    let card = `
    <div id="navbar-container">
        <a href="index.html">Mini Quiz App</a>
        <div id="navbar-links">
            <a href="index.html">Home</a>
            <a href="quiz.html">Quiz</a>
            <a href="questions.html">Questions</a>
        </div>
    </div>`
    document.getElementById("navbar").innerHTML = card;
}
navbar()