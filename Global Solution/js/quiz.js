const correctAnswers = {
    'q1': 'd',
    'q2': 'b',
    'q3': 'a',
    'q6': 'a',
    'q7': 'd'
};

function checkAnswer(questionId, answer) {
    const feedbackElement = document.getElementById(`feedback-${questionId}`);
    if (correctAnswers[questionId] === answer) {
        feedbackElement.innerHTML = "<span class='text-success'>Correto!</span>";
    } else {
        feedbackElement.innerHTML = `<span class='text-danger'>Incorreto! A resposta correta é: ${correctAnswers[questionId].toUpperCase()}</span>`;
    }
}
