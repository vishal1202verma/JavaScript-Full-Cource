  const quizContainer = document.getElementById('quiz');
  const SubmitButtton = document.getElementById('submit');
  const resultsContainer = document.getElementById('results');

  const myQuestions  = [
     {
        question: "what is the capital of France?",
        answers:{
            a:"Paris",
            b:"London",
            c:"New York"
        },
        correctAnswer: "a"
     },
     {
        question: "what is the largest country in the world?",
        answers:{
            a:"Russia",
            b:"China",
            c:"United States"
        },
        correctAnswer: "a"
     },

     {
        question: "what is the currency  of Japan?",
        answers:{
            a:"Yuan",
            b:"Euro",
            c:"Yen"
        },
        correctAnswer: "a"
     }
    
  ];

  function buildquiz(){
    const output = []
    myQuestions.forEach((currentquestion, questionNumber) =>{

        const answers = []
        for( letter in currentquestion.answers){
            answers.push(
                `<label> <input type = "radio" name= "question${questionNumber}" value"${letter}" />
                ${letter}:${currentquestion.answers[letter]}</label>`)
        }
        // console.log(answers);
        output.push(
            `<div>
            <div class = "question">${currentquestion.question}</div>
            <div class = "question">${answers.join('')}</div>
            </div>`
            )
            
    })
        // console.log(output);
    
      quizContainer.innerHTML = output.join('');
  }

  function showResults (){}

  buildquiz();

  SubmitButtton.addEventListener('click', showResults);

     