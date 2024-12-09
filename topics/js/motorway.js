// Test data
const quizData = [
    {//1st Question
        question: 'Кто из водителей нарушил правила остановки?',
        options: [
            'Только водитель легкового автомобиля',
            'Только водитель грузового автомобиля',
            'Оба'
        ],
        answer: 'Оба',
    },
    {//2nd Question
        question: 'Остановка на автомагистрали разрешена:',
        options: [
            'В любых местах за пределами проезжей части',
            'Только правее линии разметки, обозначающей край проезжей части',
            'Только на специальных площадках для стоянки, обозначенных соответствующими знаками'
        ],
        answer: 'Только на специальных площадках для стоянки, обозначенных соответствующими знаками',
    },
    {//3rd Question
        question: 'Разрешается ли движение задним ходом на автомагистрали?',
        options: [
            'Разрешается',
            'Разрешается, если транспортное средство находится правее сплошной линии разметки, обозначающей край проезжей части автомагистрали',
            'Запрещается'
        ],
        answer: 'Запрещается',
    },
    {//4th Question
        question: 'Разрешается ли учебная езда на автомагистрали?',
        options: [
            'Запрещается',
            'Разрешается только по крайней правой полосе',
            'Разрешается'
        ],
        answer: 'Разрешается',
    },
    {//5th Question
        question: 'Кто из водителей нарушает правила разворота на автомагистрали?',
        options: [
            'Оба',
            'Только водитель легкового автомобиля',
            'Только водитель грузового автомобиля, выполняющего работы по ремонту или содержанию дорог',
            'Никто не нарушает'
        ],
        answer: 'Только водитель легкового автомобиля',
    },
    {//6th Question
        question: 'Разрешено ли Вам остановиться на автомагистрали правее линии, обозначающей край проезжей части?',
        options: [
            'Разрешено',
            'Разрешено только в случае вынужденной остановки',
            'Запрещено'
        ],
        answer: 'Разрешено только в случае вынужденной остановки',
    },
    {//7th Question
        question: 'Где Вам разрешается остановиться при движении по автомагистрали?',
        options: [
            'Только через 500 м',
            'В любом месте правее линии, обозначающей край проезжей части',
            'В любом месте у края проезжей части'
        ],
        answer: 'Только через 500 м',
    },
    {//8th Question
        question: 'Можно ли Вам, управляя грузовым автомобилем, осуществить опережение в данной ситуации?',
        options: [
            'Можно',
            'Можно, если разрешенная максимальная масса автомобиля не более 2,5 т',
            'Нельзя'
        ],
        answer: 'Можно, если разрешенная максимальная масса автомобиля не более 2,5 т',
    },
    {//9th Question
        question: 'Разрешено ли обучать вождению на этой дороге?',
        options: [
            'Запрещено',
            'Разрешено только при движении по крайней правой полосе проезжей части',
            'Разрешено'
        ],
        answer: 'Разрешено',
    },
    {//10th Question
        question: 'Разрешается ли движение по автомагистрали на транспортном средстве, скорость которого по техническому состоянию менее 40 км/ч?',
        options: [
            'Разрешается',
            'Разрешается только по крайней правой полосе',
            'Запрещается'
        ],
        answer: 'Запрещается',
    },
    {//11th Question
        question: 'Кто из водителей нарушает Правила?',
        options: [
            'Водители грузового автомобиля с разрешенной максимальной массой 3 т и мопеда',
            'Только водитель мопеда',
            'Никто не нарушает'
        ],
        answer: 'Водители грузового автомобиля с разрешенной максимальной массой 3 т и мопеда',
    },
    {//12th Question
        question: 'На каких участках автомагистрали запрещается движение задним ходом?',
        options: [
            'Только в местах въезда или выезда с нее',
            'Только в местах остановок маршрутных транспортных средств',
            'На всем протяжении дороги'
        ],
        answer: 'На всем протяжении дороги',
    },
    {//13th Question
        question: 'Нарушил ли водитель Правила при вынужденной остановке на автомагистрали?',
        options: [
            'Нарушил',
            'Нарушил, если не выставил знак аварийной остановки',
            'Не нарушил'
        ],
        answer: 'Нарушил, если не выставил знак аварийной остановки',
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
    imageElement.src = `../img/test/motorway/image${currentQuestion}.png`;
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
          <img src="../img/test/motorway    /image${questionIndex}.png" alt="Image for question" class="incorrect-image">
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
  
  displayTicketNumbers(13);
  displayQuestion();