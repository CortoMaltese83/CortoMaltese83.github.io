// Database di personaggi STEAM ampliato con riferimenti alle immagini
// Database di personaggi STEAM con immagini aggiornate
const characters = [
    { 
        name: "Albert Einstein", 
        questions: [
            "Il personaggio ha vinto un Premio Nobel?",
            "Il personaggio è famoso per la teoria della relatività?",
            "Il personaggio è nato in Germania?",
            "Il personaggio ha lavorato negli Stati Uniti?",
            "Il personaggio è noto per la formula E=mc²?",
            "Il personaggio aveva i capelli arruffati?"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg"
    },
    { 
        name: "Marie Curie", 
        questions: [
            "Il personaggio ha vinto un Premio Nobel?",
            "Il personaggio è una donna?",
            "Il personaggio ha lavorato con la radioattività?",
            "Il personaggio è di origine polacca?",
            "Il personaggio ha vinto due Premi Nobel?",
            "Il personaggio è morto a causa delle radiazioni?"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg"
    },
    { 
        name: "Leonardo da Vinci", 
        questions: [
            "Il personaggio è vissuto nel Rinascimento?",
            "Il personaggio era un artista oltre che uno scienziato?",
            "Il personaggio è italiano?",
            "Il personaggio è famoso per aver dipinto la Gioconda?",
            "Il personaggio ha creato progetti di macchine volanti?",
            "Il personaggio era anche un inventore?"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Leonardo_self.jpg/640px-Leonardo_self.jpg"
    },
    { 
        name: "Steve Jobs", 
        questions: [
            "Il personaggio è associato alla creazione di un'azienda tecnologica famosa?",
            "Il personaggio è americano?",
            "Il personaggio è coinvolto nell'invenzione dello smartphone?",
            "Il personaggio è morto nel 21° secolo?",
            "Il personaggio è legato alla mela morsicata?",
            "Il personaggio ha introdotto l'iPhone?"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg"
    },
    { 
        name: "Alan Turing", 
        questions: [
            "Il personaggio è considerato il padre dell'informatica?",
            "Il personaggio ha lavorato durante la Seconda Guerra Mondiale?",
            "Il personaggio è britannico?",
            "Il personaggio è noto per il test che porta il suo nome?",
            "Il personaggio ha contribuito a decifrare Enigma?",
            "Il personaggio è stato ritratto in un film con Benedict Cumberbatch?"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
    },
    { 
        name: "Ada Lovelace", 
        questions: [
            "Il personaggio è considerato il primo programmatore della storia?",
            "Il personaggio è una donna?",
            "Il personaggio ha lavorato con Charles Babbage?",
            "Il personaggio è vissuto nel 19° secolo?",
            "Il personaggio era figlia di un poeta famoso?",
            "Il personaggio è legato alla macchina analitica?"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg"
    },
    { 
        name: "Galileo Galilei", 
        questions: [
            "Il personaggio è considerato il padre della scienza moderna?",
            "Il personaggio è italiano?",
            "Il personaggio ha usato un telescopio per studiare i cieli?",
            "Il personaggio ha avuto problemi con la Chiesa cattolica?",
            "Il personaggio ha formulato la legge del pendolo?",
            "Il personaggio ha detto 'Eppur si muove'?"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg"
    },
    { 
        name: "Nikola Tesla", 
        questions: [
            "Il personaggio ha lavorato con l'elettricità?",
            "Il personaggio è nato in Serbia?",
            "Il personaggio ha lavorato per Thomas Edison?",
            "Il personaggio è noto per il suo lavoro sulla corrente alternata?",
            "Il personaggio ha dato il nome a un'azienda di auto elettriche?",
            "Il personaggio aveva un laboratorio a Colorado Springs?"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg"
    },
    { 
        name: "Margherita Hack", 
        questions: [
            "Il personaggio è un'astrofisica italiana?",
            "Il personaggio è una donna?",
            "Il personaggio ha lavorato all'osservatorio di Trieste?",
            "Il personaggio è noto per la divulgazione scientifica?",
            "Il personaggio era atea e attivista?",
            "Il personaggio è raffigurato su un francobollo italiano?"
        ],
       image: "https://gossipcomeeracomee.altervista.org/wp-content/uploads/2017/08/margherita_Hack_giovane.png"
    },
    { 
        name: "Tim Berners-Lee", 
        questions: [
            "Il personaggio è considerato l'inventore del World Wide Web?",
            "Il personaggio è britannico?",
            "Il personaggio ha lavorato al CERN?",
            "Il personaggio ha creato il primo browser web?",
            "Il personaggio è stato nominato cavaliere dalla regina?",
            "Il personaggio ha creato il linguaggio HTML?"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg"
    }
];

// Elementi del DOM
const characterList = document.getElementById('character-list');
const startBtn = document.getElementById('start-btn');
const gameScreen = document.getElementById('game-screen');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const resultDiv = document.getElementById('result');
const restartBtn = document.getElementById('restart-btn');

// Variabili di gioco
let selectedCharacter = null;
let currentQuestionIndex = 0;
let possibleCharacters = [];
let correctAnswersNeeded = 3;
let correctAnswersCount = 0;
let askedQuestions = [];

// Inizializza la lista dei personaggi con immagini
function initCharacterList() {
    characterList.innerHTML = '';
    characters.forEach(character => {
        const div = document.createElement('div');
        div.className = 'character';
        
        // Crea elemento immagine
        const img = document.createElement('img');
        img.src = character.image;
        img.alt = `Immagine di ${character.name}`;
        img.title = character.name;
        div.appendChild(img);
        
        // Crea elemento nome
        const name = document.createElement('div');
        name.textContent = character.name;
        div.appendChild(name);
        
        div.addEventListener('click', () => selectCharacter(character));
        characterList.appendChild(div);
    });
}

// Seleziona un personaggio
function selectCharacter(character) {
    // Rimuovi la selezione precedente
    document.querySelectorAll('.character').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Aggiungi la selezione al nuovo personaggio
    event.currentTarget.classList.add('selected');
    selectedCharacter = character;
    startBtn.disabled = false;
}

// Avvia il gioco
function startGame() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    possibleCharacters = [...characters];
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    askedQuestions = [];
    
    askQuestion();
}

// Fai una domanda
function askQuestion() {
    // Se abbiamo abbastanza risposte corrette, indovina
    if (correctAnswersCount >= correctAnswersNeeded && possibleCharacters.length > 0) {
        endGame(possibleCharacters[0].name);
        return;
    }
    
    // Trova la domanda più discriminante non ancora fatta
    const question = findBestQuestion();
    if (!question) {
        endGame("Non sono riuscito a indovinare il personaggio!");
        return;
    }
    
    questionText.textContent = question;
    askedQuestions.push(question);
}

// Trova la domanda migliore da fare
function findBestQuestion() {
    // Filtra le domande già fatte
    const availableQuestions = [];
    possibleCharacters.forEach(character => {
        character.questions.forEach(question => {
            if (!askedQuestions.includes(question) && !availableQuestions.includes(question)) {
                availableQuestions.push(question);
            }
        });
    });
    
    // Se non ci sono domande disponibili
    if (availableQuestions.length === 0) return null;
    
    // Conta quante volte ogni domanda appare tra i personaggi possibili
    const questionCounts = {};
    
    availableQuestions.forEach(question => {
        questionCounts[question] = { yes: 0, no: 0 };
    });
    
    // Per ogni domanda, conta quante volte sarebbe Sì/No tra i personaggi possibili
    for (const question in questionCounts) {
        possibleCharacters.forEach(character => {
            if (character.questions.includes(question)) {
                questionCounts[question].yes++;
            } else {
                questionCounts[question].no++;
            }
        });
    }
    
    // Trova la domanda con la distribuzione più bilanciata
    let bestQuestion = null;
    let bestScore = -1;
    
    for (const question in questionCounts) {
        const counts = questionCounts[question];
        const score = Math.min(counts.yes, counts.no);
        
        if (score > bestScore) {
            bestScore = score;
            bestQuestion = question;
        }
    }
    
    return bestQuestion || availableQuestions[0];
}

// Gestisci la risposta
function handleAnswer(answer) {
    const currentQuestion = questionText.textContent;
    
    // Verifica se la risposta è corretta per il personaggio selezionato
    const isCorrect = selectedCharacter.questions.includes(currentQuestion) === answer;
    
    if (isCorrect) {
        correctAnswersCount++;
    } else {
        // Se la risposta è sbagliata, rimuovi il personaggio selezionato dalle possibilità
        possibleCharacters = possibleCharacters.filter(c => c.name !== selectedCharacter.name);
    }
    
    // Filtra i personaggi possibili in base alla risposta
    possibleCharacters = possibleCharacters.filter(character => {
        const hasQuestion = character.questions.includes(currentQuestion);
        return answer ? hasQuestion : !hasQuestion;
    });
    
    currentQuestionIndex++;
    
    // Controlla le condizioni per terminare il gioco
    if (correctAnswersCount >= correctAnswersNeeded && possibleCharacters.length > 0) {
        endGame(possibleCharacters[0].name);
    } else if (possibleCharacters.length === 0) {
        endGame("Non sono riuscito a indovinare il personaggio!");
    } else {
        askQuestion();
    }
}

// Termina il gioco
function endGame(result) {
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultDiv.innerHTML = ''; // Pulisci il risultato precedente
    
    if (result === "Non sono riuscito a indovinare il personaggio!") {
        resultDiv.textContent = "Non sono riuscito a trovare il personaggio";
    } else {
        // Trova il personaggio corrispondente
        const character = characters.find(c => c.name === result);
        
        if (character) {
            // Crea elemento immagine
            const img = document.createElement('img');
            img.src = character.image;
            img.alt = `Immagine di ${character.name}`;
            img.style.width = '150px';
            img.style.height = '150px';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            img.style.border = '4px solid #2ecc71';
            img.style.margin = '10px 0';
            
            // Crea elemento testo
            const text = document.createElement('div');
            text.textContent = `Il personaggio che hai scelto è: ${character.name}`;
            text.style.marginTop = '15px';
            text.style.fontSize = '1.2em';
            text.style.fontWeight = 'bold';
            
            // Aggiungi elementi al DOM
            resultDiv.appendChild(img);
            resultDiv.appendChild(text);
        } else {
            resultDiv.textContent = `Il personaggio che hai scelto è: ${result}`;
        }
    }
}

// Reimposta il gioco
function restartGame() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    selectedCharacter = null;
    startBtn.disabled = true;
    initCharacterList();
}

// Event listeners
startBtn.addEventListener('click', startGame);
yesBtn.addEventListener('click', () => handleAnswer(true));
noBtn.addEventListener('click', () => handleAnswer(false));
restartBtn.addEventListener('click', restartGame);

// Inizializza il gioco al caricamento della pagina
document.addEventListener('DOMContentLoaded', initCharacterList);