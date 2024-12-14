// Test data
const quizData = [
    {//1st Question
        question: 'Какие из указанных знаков запрещают движение водителям мопедов?',
        options: [
            'Только А',
            'Только Б',
            'В и Г',
            'Все'
        ],
        answer: 'Все',
    },
    {//2nd Question
        question: 'В каком случае водитель совершит вынужденную остановку?',
        options: [
            'Остановившись непосредственно перед пешеходным переходом, чтобы уступить дорогу пешеходу',
            'Остановившись на проезжей части из-за технической неисправности транспортного средства',
            'В обоих перечисленных случаях'
        ],
        answer: 'Остановившись на проезжей части из-за технической неисправности транспортного средства',
    },
    {//3rd Question
        question: 'Кому Вы обязаны уступить дорогу при повороте налево?',
        options: [
            'Только автобусу',
            'Только легковому автомобилю',
            'Никому'
        ],
        answer: 'Никому',
    },
    {//4th Question
        question: 'Разрешается ли Вам перестроиться?',
        options: [
            'Разрешается только на соседнюю полосу',
            'Разрешается, если скорость грузового автомобиля менее 30 км/ч',
            'Запрещается'
        ],
        answer: 'Разрешается только на соседнюю полосу',
    },
    {//5th Question
        question: 'Как Вам следует поступить при повороте направо?',
        options: [
            'Перестроиться на правую полосу, затем осуществить поворот',
            'Продолжить движение по второй полосе до перекрёстка, затем повернуть',
            'Возможны оба варианта действий'
        ],
        answer: 'Возможны оба варианта действий',
    },
    {//6th Question
        question: 'Что понимается под временем реакции водителя?',
        options: [
            'Время с момента обнаружения водителем опасности до полной остановки транспортного средства',
            'Время с момента обнаружения водителем опасности до начала принятия мер по её избежанию',
            'Время, необходимое для переноса ноги с педали управления подачи топлива на педаль тормоза'
        ],
        answer: 'Время с момента обнаружения водителем опасности до начала принятия мер по её избежанию',
    },
    {//7th Question
        question: 'Двигаясь по левой полосе, водитель намерен перестроиться на правую. На каком из рисунков показана ситуация, в которой он обязан уступить дорогу?',
        options: [
            'На левом',
            'На правом',
            'На обоих'
        ],
        answer: 'На обоих',
    },
    {//8th Question
        question: 'Кому Вы обязаны уступить дорогу при повороте налево?',
        options: [
            'Трамваям А и Б',
            'Трамваю А и легковому автомобилю',
            'Только трамваю А',
            'Никому'
        ],
        answer: 'Только трамваю А',
    },
    {//9th Question
        question: 'Какие из указанных знаков запрещают поворот налево?',
        options: [
            'Только А',
            'А и Б',
            'А и В',
            'Все'
        ],
        answer: 'А и В',
    },
    {//10th Question
        question: 'Вы намерены повернуть налево. Где следует остановиться, чтобы уступить дорогу легковому автомобилю?',
        options: [
            'Перед знаком',
            'Перед перекрестком у линии разметки',
            'На перекрестке перед прерывистой линией разметки',
            'Б и Г',
            'В любом месте по усмотрению водителя'
        ],
        answer: 'Перед перекрестком у линии разметки',
    },
    {//11th Question
        question: 'Для перевозки людей на мотоцикле водитель должен иметь водительское удостоверение на право управления транспортными средствами',
        options: [
            'Категории «A» или подкатегории «A1»',
            'Любой категории или подкатегории в течение 2 и более лет',
            'Только категории «A» или подкатегории «A1» в течение 2 и более лет'
        ],
        answer: 'Только категории «A» или подкатегории «A1» в течение 2 и более лет',
    },
    {//12th Question
        question: 'Что запрещено в зоне действия этого знака?',
        options: [
            'Движение любых транспортных средств',
            'Движение всех транспортных средств со скоростью не более 20 км/ч',
            'Движение механических транспортных средств'
        ],
        answer: 'Движение механических транспортных средств',
    },
    {//13th Question
        question: 'Можно ли Вам остановиться в указанном месте для посадки пассажира?',
        options: [
            'Можно',
            'Можно, если Вы управляете такси',
            'Нельзя'
        ],
        answer: 'Можно',
    },
       {//14th Question
        question: 'При наличии какого знака водитель должен уступить дорогу, если встречный разъезд затруднен?',
        options: [
            'Только В',
            'А и В',
            'Б и В',
            'Б и Г'
        ],
        answer: 'А и В',
    },
       {//15th Question
        question: 'В каких случаях запрещается эксплуатация мотоцикла?',
        options: [
            'Подножки или рукоятки пассажиров на седле не имеют прорезиненного покрытия',
            'Имеется люфт в соединениях рамы мотоцикла с рамой бокового прицепа',
            'Отсутствует огнетушитель'
        ],
        answer: 'Имеется люфт в соединениях рамы мотоцикла с рамой бокового прицепа',
    },
       {//16th Question
        question: 'Где Вы должны остановиться?',
        options: [
            'Перед знаком (А)',
            'Перед перекрестком (Б)',
            'Перед краем пересекаемой проезжей части (В)'
        ],
        answer: 'Перед краем пересекаемой проезжей части (В)',
    },
       {//17th Question
        question: 'По какой траектории Вам разрешено выполнить разворот?',
        options: [
            'Только по А',
            'Только по Б',
            'По любой из указанных'
        ],
        answer: 'Только по А',
    },
       {//18th Question
        question: 'Кто из водителей нарушил правила стоянки?',
        options: [
            'Оба',
            'Только водитель автомобиля',
            'Только водитель мотоцикла',
            'Никто не нарушил'
        ],
        answer: 'Оба',
    },
       {//19th Question
        question: 'Сколько проезжих частей имеет данная дорога?',
        options: [
            'Одну',
            'Две',
            'Четыре'
        ],
        answer: 'Одну',
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
    imageElement.src = `./img/hard/image${currentQuestion}.png`;
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
    clearInterval(timerInterval);
    endTime = new Date();
    let timeTaken = (endTime - startTime) / 1000;
    timeTaken = Math.max(0, timeTaken - 1);

    const ticketSquares = ticketDisplay.querySelectorAll('.ticket-square');
    ticketSquares.forEach((square, index) => {
        if (index < quizData.length) {
            if (index < score) {
                square.classList.remove('solved');
                square.classList.add('correct');
            } else {
                square.classList.remove('solved');
                square.classList.add('incorrect');
            }
        }
    });

    resultContainer.innerHTML = '';

    let statusMessage = '';
    let statusClass = '';
    if (score === quizData.length) {
        statusMessage = 'Сложные вопросы прорешены!';
        statusClass = 'test-success';
    } else {
        statusMessage = 'Сложные вопросы не прорешены!';
        statusClass = 'test-incorrect';
    }
    
    const statusParagraph = document.createElement('p');
    statusParagraph.classList.add(statusClass);
    
    // Добавляем иконку только при statusClass = 'test-success'
    if (statusClass === 'test-success') {
        const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svgIcon.setAttribute("width", "40");
        svgIcon.setAttribute("height", "40");
        svgIcon.setAttribute("viewBox", "0 -960 960 960");
        svgIcon.innerHTML = `<path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" fill="#66A3D2"/>`;
        statusParagraph.appendChild(svgIcon);
    } else {
      const svgIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgIcon.setAttribute("width", "40");
      svgIcon.setAttribute("height", "40");
      svgIcon.setAttribute("viewBox", "0 0 24 24");
      svgIcon.innerHTML = `<path d="M12 16L13.5 13.5L11.5 11.5L14.5 9L12 5C12 5 12.4578 4.50096 13.0344 4.06801C14.4404 3.01211 16.7809 2.34923 19.4626 3.99415C22.9819 6.15294 23.7783 13.2749 15.6605 19.2834C14.1143 20.4278 13.3412 21 12 21C10.6588 21 9.88572 20.4278 8.33953 19.2834C0.221721 13.2749 1.01807 6.15294 4.53744 3.99415C6.43149 2.83234 8.15537 2.82181 9.5 3.28788" fill="#66A3D2"/>`;
      statusParagraph.appendChild(svgIcon);
    }
    
    statusParagraph.insertAdjacentText('afterbegin', statusMessage);
    resultContainer.appendChild(statusParagraph);

    const timeTakenDisplay = document.createElement('p');
    timeTakenDisplay.textContent = `Вы потратили ${formatTime(timeTaken)} на тест.`;
    resultContainer.appendChild(timeTakenDisplay);


    const scoreMessage = `Решено верно ${score} вопросов из ${quizData.length}!`;
    resultContainer.appendChild(document.createElement('p')).textContent = scoreMessage;

    const percentage = Math.min(100, Math.round((score / 800) * 100)); // Расчет процента от 800
    const percentageMessage = `Ваш процент готовности к экзамену - ${percentage}%`;
    resultContainer.appendChild(document.createElement('p')).textContent = percentageMessage;

    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';

    // Show "Показать ответы" button
    showAnswerButton.style.display = 'inline-block';
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
          <img src="./img/hard/image${questionIndex}.png" alt="Image for question" class="incorrect-image">
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
  
  displayTicketNumbers(19);
  displayQuestion();