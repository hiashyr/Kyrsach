function scrollToTestModes() {
  document.getElementById('test-modes').scrollIntoView({ behavior: 'smooth' });
}

// Test data
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
const ticketDisplay = document.getElementById('ticket-display');
const timerDisplay = document.getElementById('timer'); // Get the timer display element


let timeLeft = 1200; // 20 minutes in seconds
let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];
let solvedTickets = 0;
let startTime;
let endTime;
let timerInterval;


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayTicketNumbers(totalTickets) {
  ticketDisplay.innerHTML = '';
  for (let i = 1; i <= totalTickets; i++) {
      const square = document.createElement('div');
      square.className = 'ticket-square';
      square.textContent = i;
      ticketDisplay.appendChild(square);
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

  // Помечаем текущий билет как решенный
  const ticketSquares = ticketDisplay.querySelectorAll('.ticket-square');
  if (ticketSquares.length > currentQuestion) {
    ticketSquares[currentQuestion].classList.add('solved');
    solvedTickets++;
  }

  if (currentQuestion === 0) {
    startTime = new Date();
    startTimer(); // запускаем таймер при первом вопросе
  }
}

function startTimer() {
  timeLeft = 1200; // Сбрасываем таймер до 20 минут
  timerInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      timeLeft--;
      if (timeLeft < 0 || currentQuestion >= quizData.length) { // Проверяем время или завершение теста
          clearInterval(timerInterval);
          displayResult();
      }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function checkAnswer() {
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
          stopTimer();
          displayResult();
      }
  }
}

function displayResult() {
  clearInterval(timerInterval); // Останавливаем таймер!

  endTime = new Date();
  let timeTaken = (endTime - startTime) / 1000;
  timeTaken--;
  if (timeTaken < 0) timeTaken = 0;

  // Раскрашиваем квадратики билетов
  const ticketSquares = ticketDisplay.querySelectorAll('.ticket-square');
  ticketSquares.forEach((square, index) => {
      if (index < score) {
          square.classList.remove('solved');
          square.classList.add('correct');
      } else if (index < quizData.length) {
          square.classList.remove('solved');
          square.classList.add('incorrect');
      }
  });

  

  resultContainer.innerHTML = ''; // Очищаем контейнер результатов

  // Создаем и добавляем сообщение о статусе темы
  let statusMessage = '';
  let statusClass = '';
  if (score === quizData.length) {
      statusMessage = 'Тема прорешена!';
      statusClass = 'test-success'; // Новый класс для сообщения о результате
  } else {
      statusMessage = 'Тема не прорешена!';
      statusClass = 'test-incorrect'; // Новый класс для сообщения о результате
  }
  const statusParagraph = document.createElement('p');
  statusParagraph.textContent = statusMessage;
  statusParagraph.classList.add(statusClass);
  resultContainer.appendChild(statusParagraph);

  // Создаем и добавляем отображение затраченного времени
  const timeTakenDisplay = document.createElement('p');
  timeTakenDisplay.textContent = `Вы потратили ${formatTime(timeTaken)} на тест.`;
  resultContainer.appendChild(timeTakenDisplay);

  // Отображаем итоговый счет
  let scoreMessage = `Решено верно ${score} вопросов из ${quizData.length}!`;
  resultContainer.appendChild(document.createElement('p')).textContent = scoreMessage;

  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block'; // Показываем кнопку "Показать ответы"
}


function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes} мин ${remainingSeconds} сек`;
}

function retryQuiz() {
  location.reload(); // This reloads the current page
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    const questionIndex = quizData.findIndex(q => q.question === incorrectAnswers[i].question); // Находим индекс вопроса в quizData
    incorrectAnswersHtml += `
      <div class="incorrect-answer">
        <img src="../img/test/image${questionIndex}.png" alt="Image for question" class="incorrect-image">
        <p>
          <strong>Вопрос:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Ваш ответ:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Правильный ответ:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      </div>
    `;
  }

  resultContainer.innerHTML = `
    <p>Решено верно ${score} вопросов из ${quizData.length}!</p>
    <p>Неправильные ответы:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayTicketNumbers(5);
displayQuestion();