//https://opentdb.com/api.php?amount=20&category=11&type=multiple

const _question = document.getElementById("question");
const _question = document.querySelector(".quiz-options");
const _correctScore = document.getElementById('correct-score');
const _totalQuestion = document.getElementById('total-question');



async function loadQuestion() {
  const APIUrl =
    "https://opentdb.com/api.php?amount=20&category=11&type=multiple";
  const result = await fetch("${ApiUrl}");
  const data = await result.json();
  console.log(data);
}
function showQuestion(data) {
  correctAnswer = data.correct_answer;
  let incorrectAnswer = data.incorrect_answer;
  let optionsList = incorrectAnswer;
  optionsList.splice(
    Math.floor(Math.random() * (incorrectAnswer.lenght + 1)),
    0,
    correctAnswer
  );
  
 // console.log(optionsList);
  //console.log(correctAnswer);
}

_question.innerHTML =
    '${data.question} <br> <span class= "category"> ${data.category} </span>';
  _options.innerHTML = ` ${optionsList
    .map(
      (option, index) => `
            <li> ${index + 1}. <span>${option}</span> </li> `
    )
    .join("")}
    `;
}

loadQuestion();
