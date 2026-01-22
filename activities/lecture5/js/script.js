// In-Class Example - Activity

// Create 2 arrays of possible answers
const answers = [
  "It is certain.",
  "You may rely on it",
  "Ask again later",
  "Reply hazy, try again",
  "Better not tell you now",
  "Outlook not so good.",
];

const fortunes = [
  "An exciting opportunity lies ahead of you.",
  "A routine task will turn into an enchanting adventure.",
  "It is easier to stay out than to get out.",
  "Expect the unexpected.",
  "The only way to have a friend is to be one.",
  "Move in the direction of your dreams."
];

// Create a function to fetch the question the user has asked
// Our function should also check from an empty value
function askQuestion() {
  const userQuestion = document.getElementById("userQuestion").value;
  if (userQuestion === "") {
    alert("Please enter a question.");
    return;
  }

  // Select which array to choose from randomly
  const randomArray = Math.floor(Math.random() * 2);

  // Select a random answer from your array
  const randomIndex = Math.floor(Math.random() * answers.length);

  let answer = "";

  if(randomArray == 0){
    answer = answers[randomIndex];
  } else {
    answer = fortunes[randomIndex];
  }
  
  // Display the question and answer back to the user
  // And, log the question and answer to the console
  document.getElementById("answer").textContent = `You asked: ${userQuestion};`;
  document.getElementById("answer").textContent +=
    "The Magic 8-Ball says: " + answer;
}
