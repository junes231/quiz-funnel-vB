// quiz.js for Version B
const container = document.getElementById('quiz-container');
let currentQuestion = 0;
let answers = [];

function renderQuestion() {
  container.innerHTML = "";
  if (currentQuestion >= config.questions.length) {
    window.location.href = config.funnelLink;
    return;
  }
  const q = config.questions[currentQuestion];
  const div = document.createElement('div');
  div.className = "question";
  const h2 = document.createElement('h2');
  h2.textContent = q.title;
  div.appendChild(h2);
  q.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.textContent = answer;
    btn.onclick = () => {
      answers.push(answer);
      currentQuestion++;
      renderQuestion();
    };
    div.appendChild(btn);
  });
  container.appendChild(div);
}

renderQuestion();
