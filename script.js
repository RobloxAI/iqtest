// IQ Test Questions
const questions = [
    {
        question: "Complete the sequence: 2, 4, 8, 16, __",
        options: ["24", "32", "30", "28"],
        correct: 1
    },
    {
        question: "Which number should come next? 1, 3, 6, 10, 15, __",
        options: ["20", "21", "22", "23"],
        correct: 1
    },
    {
        question: "If all Bloops are Razzies and all Razzies are Lazzies, then:",
        options: ["All Bloops are Lazzies", "All Lazzies are Bloops", "Some Bloops are not Lazzies", "None of the above"],
        correct: 0
    },
    {
        question: "Which word does not belong?",
        options: ["Square", "Circle", "Triangle", "Rectangle"],
        correct: 1
    },
    {
        question: "Complete the analogy: Book is to Reading as Fork is to:",
        options: ["Drawing", "Writing", "Eating", "Sleeping"],
        correct: 2
    },
    {
        question: "If 3 + 4 = 19, 5 + 6 = 41, then 7 + 8 = ?",
        options: ["55", "63", "71", "79"],
        correct: 2
    },
    {
        question: "Which shape completes the pattern?",
        options: ["Circle", "Square", "Triangle", "Diamond"],
        correct: 0
    },
    {
        question: "If RED = 27, BLUE = 28, then GREEN = ?",
        options: ["29", "30", "31", "32"],
        correct: 2
    },
    {
        question: "Which number is the odd one out?",
        options: ["2", "3", "4", "5"],
        correct: 1
    },
    {
        question: "Complete the sequence: A, C, E, G, __",
        options: ["H", "I", "J", "K"],
        correct: 1
    },
    {
        question: "If all X are Y and some Y are Z, then:",
        options: ["All X are Z", "Some X are Z", "No X are Z", "Cannot be determined"],
        correct: 3
    },
    {
        question: "Which word is the opposite of 'Ascend'?",
        options: ["Rise", "Climb", "Descend", "Float"],
        correct: 2
    },
    {
        question: "If 2 * 3 = 12, 3 * 4 = 20, then 4 * 5 = ?",
        options: ["24", "28", "30", "32"],
        correct: 2
    },
    {
        question: "Which number comes next? 1, 4, 9, 16, 25, __",
        options: ["30", "36", "49", "64"],
        correct: 1
    },
    {
        question: "If all A are B and no B are C, then:",
        options: ["All A are C", "No A are C", "Some A are C", "Cannot be determined"],
        correct: 1
    },
    {
        question: "Complete the analogy: Bird is to Sky as Fish is to:",
        options: ["Land", "Water", "Air", "Tree"],
        correct: 1
    },
    {
        question: "Which shape is different?",
        options: ["Circle", "Square", "Triangle", "Rectangle"],
        correct: 0
    },
    {
        question: "If 5 + 3 = 28, 9 + 1 = 810, then 7 + 5 = ?",
        options: ["212", "312", "412", "512"],
        correct: 1
    },
    {
        question: "Which letter should come next? B, D, F, H, __",
        options: ["I", "J", "K", "L"],
        correct: 1
    },
    {
        question: "If all P are Q and some Q are R, then:",
        options: ["All P are R", "Some P are R", "No P are R", "Cannot be determined"],
        correct: 1
    },
    {
        question: "Which number is missing? 2, 3, 5, 7, 11, __",
        options: ["12", "13", "14", "15"],
        correct: 1
    },
    {
        question: "Complete the sequence: 1, 2, 4, 7, 11, __",
        options: ["14", "15", "16", "17"],
        correct: 2
    },
    {
        question: "If all X are Y and all Y are Z, then:",
        options: ["All X are Z", "Some X are Z", "No X are Z", "Cannot be determined"],
        correct: 0
    },
    {
        question: "Which word does not belong?",
        options: ["Apple", "Banana", "Orange", "Carrot"],
        correct: 3
    },
    {
        question: "If 4 + 5 = 36, 6 + 7 = 84, then 8 + 9 = ?",
        options: ["144", "152", "160", "168"],
        correct: 0
    },
    {
        question: "Which shape completes the pattern?",
        options: ["Circle", "Square", "Triangle", "Diamond"],
        correct: 1
    },
    {
        question: "If RED = 18, BLUE = 19, then GREEN = ?",
        options: ["20", "21", "22", "23"],
        correct: 2
    },
    {
        question: "Which number is the odd one out?",
        options: ["6", "8", "9", "12"],
        correct: 2
    },
    {
        question: "Complete the sequence: B, E, H, K, __",
        options: ["L", "M", "N", "O"],
        correct: 2
    },
    {
        question: "If all A are B and some B are C, then:",
        options: ["All A are C", "Some A are C", "No A are C", "Cannot be determined"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let userAge = 0;

function startTest() {
    const ageInput = document.getElementById('age-input');
    const age = parseInt(ageInput.value);
    
    if (isNaN(age) || age < 1 || age > 120) {
        alert('Please enter a valid age between 1 and 120');
        return;
    }
    
    userAge = age;
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('test-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question-text').textContent = question.question;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsContainer.appendChild(button);
    });
    
    // Update progress bar
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function selectAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    if (selectedIndex === question.correct) {
        score++;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('test-screen').classList.add('hidden');
    document.getElementById('results-screen').classList.remove('hidden');
    
    // Calculate IQ based on score and age
    const percentage = (score / questions.length) * 100;
    let finalIQ;
    
    if (userAge <= 10) {
        finalIQ = 8;
    } else if (userAge <= 30) {
        finalIQ = 120;
    } else {
        if (percentage < 30) {
            finalIQ = 85;
        } else if (percentage < 50) {
            finalIQ = 95;
        } else if (percentage < 70) {
            finalIQ = 105;
        } else if (percentage < 90) {
            finalIQ = 115;
        } else {
            finalIQ = 125;
        }
    }
    
    document.getElementById('final-iq').textContent = finalIQ;
    
    let comparisonText;
    if (finalIQ < 90) {
        comparisonText = "Your score is below the average IQ of 100";
    } else if (finalIQ < 110) {
        comparisonText = "Your score is near the average IQ of 100";
    } else if (finalIQ < 130) {
        comparisonText = "Your score is above the average IQ of 100";
    } else {
        comparisonText = "Your score is significantly above the average IQ of 100";
    }
    
    document.getElementById('comparison-text').textContent = comparisonText;
}

function restartTest() {
    currentQuestion = 0;
    score = 0;
    userAge = 0;
    document.getElementById('age-input').value = '';
    document.getElementById('results-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
} 