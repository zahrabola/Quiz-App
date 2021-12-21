//https://opentdb.com/api.php?amount=20&category=11&type=multiple

const _question = document.getElementById("question");
const _question = document.querySelector(".quiz-options");
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');
const _checkBtn = document.getElementById("check-answer");
const _playAgainBtn = document.getElementById("play-again");
const _result = document.getElementById("result");


let correctAnswer = "",
  correctScore = (askedCount = 0),
  totalQuestion = 20;

async function loadQuestion() {
  const APIUrl =
    "https://opentdb.com/api.php?amount=20&category=11&type=multiple";
  const result = await fetch(`${APIUrl}`);
  const data = await result.json();
  _result.innerHTML = "";
  showQuestion(data.results[0]);
}

function eventListeners() {
  _checkBtn.addEventListener("click", checkAnswer);
  _playAgainBtn.addEventListener("click", restartQuiz);
}

document.addEventListener("DOMContentLoaded", function () {
  loadQuestion();
  eventListeners();
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore;
});
function showQuestion(data) {
   _checkBtn.disabled = false;
  correctAnswer = data.correct_answer;
  let incorrectAnswer = data.incorrect_answer;
  let optionsList = incorrectAnswer;
  optionsList.splice(
    Math.floor(Math.random() * (incorrectAnswer.lenght + 1)),
    0,
    correctAnswer
  );
  
  document.addEventListener('DOMContentLoaded'. () => {
loadQuestion();
eventListeners ();
_totalQuestion.textContent = totalQuestion;
_correctScore.textContent = correctScore;
});

 

_question.innerHTML =
    '${data.question} <br> <span class= "category"> ${data.category} </span>';
  _options.innerHTML = ` ${optionsList
    .map(
      (option, index) => `
            <li> ${index + 1}. <span>${option}</span> </li> `
    )
    .join("")}
    `;
      selectOption();
}

function selectOption() {
  _options.querySelectorAll("li").forEach(function (option) {
    option.addEventListener("click", function () {
      if (_options.querySelector(".selected")) {
        const activeOption = _options.querySelector(".selected");
        activeOption.classList.remove("selected");
      }
      option.classList.add("selected");
    });
  });
}

function checkAnswer(){
    _checkBtn.disabled = true;
    if(_options.querySelector('.selected')){
        let selectedAnswer = _options.querySelector('.selected span'). textContent;
          if (selectedAnswer == HTMLDecode(correctAnswer)) {
            correctScore ++ ;
             _result.innerHTML = `<p><i class = "fas fa-check"></i>Correct Answer!</p>`;
    } else {
      _result.innerHTML = `<p><i class = "fas fa-times"></i>Incorrect Answer!</p> <small><b>Correct Answer: </b>${correctAnswer}</small>`;
    }
    checkCount();
  } else {
    _result.innerHTML = `<p><i class = "fas fa-question"></i>Please select an option!</p>`;
    _checkBtn.disabled = false;
  }
}
      
