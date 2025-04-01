document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const questionText = document.getElementById("question");

    let questions = [
        { text: "Il personaggio è un matematico?", yes: 1, no: 2 },
        { text: "Ha vinto un premio Nobel?", yes: 3, no: 4 },
        { text: "È un informatico?", yes: 5, no: 6 },
        { text: "È Alan Turing?", yes: "Alan Turing", no: "Ada Lovelace" },
        { text: "È Albert Einstein?", yes: "Albert Einstein", no: "Marie Curie" },
        { text: "È Grace Hopper?", yes: "Grace Hopper", no: "Tim Berners-Lee" }
    ];

    let currentIndex = 0;

    startBtn.addEventListener("click", () => {
        startBtn.style.display = "none";
        yesBtn.disabled = false;
        noBtn.disabled = false;
        currentIndex = 0;
        questionText.textContent = questions[currentIndex].text;
    });

    function handleAnswer(answer) {
        let next = questions[currentIndex][answer];
        if (typeof next === "string") {
            questionText.textContent = "Il personaggio è " + next + "!";
            yesBtn.disabled = true;
            noBtn.disabled = true;
            startBtn.style.display = "block";
            startBtn.textContent = "Ricomincia";
        } else {
            currentIndex = next;
            if (currentIndex < questions.length) {
                questionText.textContent = questions[currentIndex].text;
            } else {
                questionText.textContent = "Gioco terminato!";
                yesBtn.disabled = true;
                noBtn.disabled = true;
                startBtn.style.display = "block";
                startBtn.textContent = "Ricomincia";
            }
        }
    }

    yesBtn.addEventListener("click", () => handleAnswer("yes"));
    noBtn.addEventListener("click", () => handleAnswer("no"));
});
