const facts = [
  {
    statement: "JavaScript was invented in 1995.",
    answer: true,
    explanation:
      "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days.",
  },
  {
    statement: "Strings in JS are editable values",
    answer: false,
    explanation:
      "In JavaScript strings are immutable values, meaning they cannot be edited; however, they can replaced with new, different strings.",
  },
  {
    statement: "1 + 1 === 2",
    answer: true,
    explanation: "The plus operator gives the sum of two numbers.",
  },
  {
    statement: "'1' + '1' === '2'",
    answer: false,
    explanation:
      "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'.",
  },
  {
    statement: "typeof ['J', 'S'] === 'array'",
    answer: false,
    explanation:
      "Arrays have the type 'object'. In JS, everything is either a primitive data type (e.g. 'string', 'number') or an object. Arrays are a kind of object with some special properties.  ",
  },
];

const hide = (element) => element.classList.add("hidden");

const show = (element) => element.classList.remove("hidden");

const disable = (button) => button.setAttribute("disabled", "");

const enable = (button) => button.removeAttribute("disabled");

let correct = 0;
let completed = 0;

let fact;

const explanation = document.querySelector("#explanation");
const nextButton = document.querySelector("#next-question");
const optionButtons = document.querySelector("#options").children;
const statement = document.querySelector("#statement");

const backButton = document.querySelector("#back");
const correctElem = document.querySelector("#correct");
const completedElem = document.querySelector("#completed");

function getNextFact() {
  fact = facts.shift(); // get the first fact in our array (shortening the array)

  // set the question text to the current fact's statement
  statement.textContent = fact.statement;

  // hide any previous explanation
  hide(explanation);

  for (let option of optionButtons) {
    // clear any previous classes
    option.classList.remove("correct");
    option.classList.remove("incorrect");
    // make sure buttons are enabled
    enable(option);
  }

  // disable next-question button
  hide(nextButton);
  hide(backButton);
}

nextButton.addEventListener("click", getNextFact);

for (let option of optionButtons) {
  option.addEventListener("click", (e) => {
    // When this option is clicked...

    // disable all the option buttons
    for (let button of optionButtons) {
      disable(button);
    }

    // enable the 'next question' button, if we still have facts left
    if (facts.length > 0) {
      show(nextButton);
    } else {
      show(nextButton);
      nextButton.textContent = "No more questions!";
      show(backButton);
    }

    const guess = e.target.value;
    if (guess === fact.answer.toString()) {
      // correct answer!
      e.target.classList.add("correct");
      correct += 1;
    } else {
      // wrong answer!
      e.target.classList.add("incorrect");
    }

    // display the explanation
    explanation.textContent = fact.explanation;
    show(explanation);

    // update the score
    completed += 1;
    correctElem.textContent = correct;
    completedElem.textContent = completed;
  });
}

getNextFact();
