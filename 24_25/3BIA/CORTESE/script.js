let questionBox = document.getElementById('questionBox');
let resultBox = document.getElementById('result');
let currentQuestion = 0;
let answers = [];  // Qui memorizziamo le risposte dell'utente

// Lista dei 20 personaggi STEAM con le relative risposte alle domande
const characters = [
    {
        name: "Marie Curie",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha lavorato nel campo della fisica?", 
            "Il personaggio è noto per il suo lavoro sulle radiazioni?"
        ],
        answers: ["yes", "yes", "yes", "yes"]
    },
    {
        name: "Albert Einstein",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha lavorato nel campo della fisica?", 
            "Il personaggio è noto per la teoria della relatività?"
        ],
        answers: ["no", "yes", "yes", "yes"]
    },
    {
        name: "Isaac Newton",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha lavorato nel campo della fisica?", 
            "Il personaggio ha formulato le leggi del moto?"
        ],
        answers: ["no", "no", "yes", "yes"]
    },
    {
        name: "Ada Lovelace",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio è un matematico?", 
            "Il personaggio è conosciuto per il suo lavoro nel campo della programmazione?"
        ],
        answers: ["yes", "no", "yes", "yes"]
    },
    {
        name: "Alan Turing",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio è un matematico?", 
            "Il personaggio ha contribuito al campo della crittografia?"
        ],
        answers: ["no", "no", "yes", "yes"]
    },
    {
        name: "Stephen Hawking",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha lavorato nel campo della fisica?", 
            "Il personaggio è noto per il suo lavoro sui buchi neri?"
        ],
        answers: ["no", "no", "yes", "yes"]
    },
    {
        name: "Nikola Tesla",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha lavorato nel campo dell'elettricità?", 
            "Il personaggio è noto per l'invenzione della corrente alternata?"
        ],
        answers: ["no", "no", "yes", "yes"]
    },
    {
        name: "Charles Babbage",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha contribuito all'informatica?", 
            "Il personaggio è noto per l'invenzione della macchina analitica?"
        ],
        answers: ["no", "no", "yes", "yes"]
    },
    {
        name: "Leonhard Euler",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio è un matematico?", 
            "Il personaggio ha contribuito alla teoria dei grafi?"
        ],
        answers: ["no", "no", "yes", "yes"]
    },
    {
        name: "Rosalind Franklin",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha lavorato nel campo della biologia?", 
            "Il personaggio è nota per il suo contributo alla scoperta della struttura del DNA?"
        ],
        answers: ["yes", "no", "yes", "yes"]
    },
    {
        name: "Grace Hopper",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha contribuito all'informatica?", 
            "Il personaggio è nota per aver sviluppato il primo compilatore?"
        ],
        answers: ["yes", "no", "yes", "yes"]
    },
    {
        name: "Thomas Edison",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio è un inventore?", 
            "Il personaggio è noto per l'invenzione della lampadina?"
        ],
        answers: ["no", "no", "yes", "yes"]
    },
    {
        name: "Marie Tharp",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha lavorato nel campo della geografia?", 
            "Il personaggio è nota per aver creato la prima mappa dettagliata dei fondali oceanici?"
        ],
        answers: ["yes", "no", "yes", "yes"]
    },
    {
        name: "Carl Sagan",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio è noto per il suo lavoro sull'astronomia?", 
            "Il personaggio ha scritto il libro 'Cosmos'?"
        ],
        answers: ["no", "no", "yes", "yes"]
    },
    {
        name: "Sally Ride",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio è un astronauta?", 
            "Il personaggio è stata la prima donna americana nello spazio?"
        ],
        answers: ["yes", "no", "yes", "yes"]
    },
    {
        name: "Richard Feynman",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha lavorato nel campo della fisica?", 
            "Il personaggio è noto per la sua teoria delle particelle?"
        ],
        answers: ["no", "yes", "yes", "yes"]
    },
    {
        name: "Katherine Johnson",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha lavorato come matematica?", 
            "Il personaggio ha contribuito alla NASA?"
        ],
        answers: ["yes", "no", "yes", "yes"]
    },
    {
        name: "Vera Rubin",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha lavorato nel campo dell'astronomia?", 
            "Il personaggio è nota per il suo lavoro sulla materia oscura?"
        ],
        answers: ["yes", "no", "yes", "yes"]
    },
    {
        name: "Tim Berners-Lee",
        questions: [
            "Il personaggio è una donna?", 
            "Il personaggio ha vinto un premio Nobel?", 
            "Il personaggio ha creato il World Wide Web?", 
            "Il personaggio è un informatico?"
        ],
        answers: ["no", "no", "yes", "yes"]
    }
];

const questions = characters[0].questions;  // Imposta le domande dal primo personaggio come esempio

// Funzione per iniziare il gioco
function startGame() {
    questionBox.innerText = questions[currentQuestion];
}

// Risposta "Sì" o "No"
function answer(answer) {
    answers.push(answer);  // Memorizza la risposta

    currentQuestion++;

    // Se ci sono ancora domande, mostra la prossima
    if (currentQuestion < questions.length) {
        questionBox.innerText = questions[currentQuestion];
    } else {
        // Al termine delle domande, verifica quale personaggio è stato scelto
        let guessedCharacter = guessCharacter(answers);
        resultBox.innerText = `Abbiamo indovinato! Il personaggio è: ${guessedCharacter}`;
    }
}

// Funzione che verifica quale personaggio è stato scelto
function guessCharacter(answers) {
    for (let character of characters) {
        if (arraysAreEqual(answers, character.answers)) {
            return character.name;
        }
    }
    return "Non siamo riusciti a indovinare il personaggio."; // Se non c'è corrispondenza
}

// Funzione per confrontare due array (le risposte dell'utente e quelle del personaggio)
function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Avvia il gioco quando la pagina viene caricata
window.onload = startGame;