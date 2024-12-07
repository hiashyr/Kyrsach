function scrollToTestModes() {
    document.getElementById('test-modes').scrollIntoView({ behavior: 'smooth' });
  }


// Test code
const quizData = [
  {
    question: 'Кому Вы должны уступить дорогу при повороте направо?',
    options: [
      'Только пешеходу, переходящему проезжую часть по нерегулируемому пешеходному переходу',
      'Только пешеходам, переходящим проезжую часть, на которую Вы поворачиваете',
      'Всем пешеходам'
    ],
    answer: 'Всем пешеходам',
  },
  {
    question: 'При приближении к остановившемуся транспортному средству с включенной аварийной сигнализацией, которое имеет опознавательные знаки «Перевозка детей», водитель должен:',
    options: ['Снизить скорость', 'При необходимости остановиться и пропустить детей', 'Осуществить все перечисленные действия'],
    answer: 'Осуществить все перечисленные действия',
  },
  {
    question: 'Где необходимо остановиться, если сразу за пешеходным переходом образовался затор?',
    options: [
      'На пешеходном переходе, если нет пешеходов',
      'Непосредственно перед пешеходным переходом',
      'Не ближе 5 м до пешеходного перехода'
    ],
    answer: 'Непосредственно перед пешеходным переходом',
  },
  {
    question: 'В каком случае водитель транспортного средства, приближающегося к нерегулируемому пешеходному переходу, обязан уступить дорогу пешеходам?',
    options: [
      'Если пешеходы переходят дорогу',
      'Если пешеходы вступили на проезжую часть (трамвайные пути) для осуществления перехода',
      'В обоих перечисленных случаях'
    ],
    answer: 'В обоих перечисленных случаях',
  },
  {
    question: 'Подъехав к трамваю попутного направления, остановившемуся у посадочной площадки, которая расположена посередине дороги, водитель должен:',
    options: [
      'Уступить дорогу пешеходам, идущим к трамваю или от него',
      'Остановиться и продолжить движение только после закрытия дверей трамвая',
      'Остановиться и продолжить движение только после начала движения трамвая',
    ],
    answer: 'Уступить дорогу пешеходам, идущим к трамваю или от него',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {   //Делает порядок вопросов рандомным
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];
  const questionNumber = currentQuestion + 1;

  const questionContainer = document.createElement('div');
  questionContainer.className = 'question-container';

  const questionHeader = document.createElement('div');
  questionHeader.className = 'question-header';

  const questionNumberElement = document.createElement('span');
  questionNumberElement.className = 'question-number';
  questionNumberElement.textContent = `Вопрос ${questionNumber}:`;
  questionHeader.appendChild(questionNumberElement);

  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';

  const imageElement = document.createElement('img');
  imageElement.src = `../img/test/image${currentQuestion}.png`;
  imageElement.alt = `Image for question ${questionNumber}`;
  imageElement.className = 'quiz-image';
  imageContainer.appendChild(imageElement);

  questionHeader.appendChild(imageContainer);
  questionContainer.appendChild(questionHeader);


  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;
  questionContainer.appendChild(questionElement);

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionContainer);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {   //Проверяет ответ игрока и добавляет или  снижает оценку
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() { //Показывает результат с кнопками, скрывает контейнер с решением вопросов
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() { //Очищает все данные и возвращает к началу
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() { // Открывает контейнер со всеми неправильными вопросами
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${quizData.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();