const content = {
  school: {
    jokes: [
      "Why did the student eat his homework? Because the teacher said it was a piece of cake!",
      "Why was the math book sad? Because it had too many problems.",
      "Why did the teacher wear sunglasses? Because her students were so bright!",
      "Why do librarians love spring? Because they like to turn over a new leaf.",
      "Why did the student bring a ladder to class? To go to high school!"
    ],
    riddles: [
      "What has many keys but can't open a single lock? A piano.",
      "What kind of school do surfers attend? Boarding school.",
      "What can you find in the middle of a classroom? The letter 's'.",
      "I have a face but no eyes. What am I? A clock.",
      "What building has the most stories? A library."
    ]
  },

  food: {
    jokes: [
      "Why did the tomato blush? Because it saw the salad dressing!",
      "Why don't eggs tell jokes? They'd crack each other up.",
      "What did the burger name its baby? Patty!",
      "Why did the orange stop? It ran out of juice.",
      "Why did the cookie go to the doctor? It felt crummy."
    ],
    riddles: [
      "I'm orange and sound like a parrot. What am I? A carrot.",
      "What food is always late? Choco-late.",
      "What kind of room has no doors or windows? A mushroom.",
      "I go in hard and come out soft. What am I? A marshmallow.",
      "What do you call cheese that isn't yours? Nacho cheese."
    ]
  },

  sports: {
    jokes: [
      "Why was the football team always cool? Because they had lots of fans!",
      "Why can't basketball players go on vacation? Because they get called for traveling.",
      "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
      "Why do runners eat before a race? Their food needs to catch up.",
      "Why was the baseball stadium so hot? Because all the fans left."
    ],
    riddles: [
      "What kind of ball doesn't bounce? A snowball.",
      "What sport is always in a hurry? Racing.",
      "What runs around a field but never moves? A fence.",
      "What has a net but catches nothing? A soccer goal.",
      "What has a head, a tail, is brown, and has no legs? A penny."
    ]
  },

  tech: {
    jokes: [
      "Why do programmers prefer dark mode? Because light attracts bugs.",
      "Why did the computer catch a cold? It left its Windows open.",
      "Why was the smartphone wearing glasses? It lost its contacts.",
      "Why did the developer go broke? Because he used up all his cache.",
      "What do you call 8 hobbits? A hobbyte."
    ],
    riddles: [
      "I have keys but no locks. What am I? A keyboard.",
      "I store files but I'm not a cabinet. What am I? The cloud.",
      "What has a screen but cannot watch movies? A calculator.",
      "I run without legs. What am I? Software.",
      "What kind of tree can you carry in your hand? A palm."
    ]
  }
};

const categorySelect = document.getElementById("category");
const generateBtn = document.getElementById("generate-btn");
const jokeText = document.getElementById("joke-text");
const riddleText = document.getElementById("riddle-text");
const ratingResult = document.getElementById("rating-result");
const funnyBtn = document.getElementById("funny-btn");
const notFunnyBtn = document.getElementById("not-funny-btn");

let funnyCount = 0;
let notFunnyCount = 0;

const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];

const renderResult = (joke, riddle, category) => {
  jokeText.textContent = joke;
  riddleText.textContent = riddle;
  generateBtn.textContent = "Generate Another";
  generateBtn.classList.add("generated");
  generateBtn.setAttribute("aria-label", `Generate another ${category} joke and riddle`);
};

const showError = () => {
  jokeText.textContent = "Select a category and press Generate Fun!";
  riddleText.textContent = "Select a category and press Generate Fun!";
};

const updateRatingDisplay = () => {
  ratingResult.textContent = `😂 Funny: ${funnyCount} | 😐 Not Funny: ${notFunnyCount}`;
};

const generateContent = () => {
  const category = categorySelect.value;

  if (!content[category]) {
    showError();
    return;
  }

  const joke = getRandomItem(content[category].jokes);
  const riddle = getRandomItem(content[category].riddles);

  renderResult(joke, riddle, category);
};

generateBtn.addEventListener("click", generateContent);

funnyBtn.addEventListener("click", () => {
  funnyCount += 1;
  updateRatingDisplay();
});

notFunnyBtn.addEventListener("click", () => {
  notFunnyCount += 1;
  updateRatingDisplay();
});

updateRatingDisplay();
