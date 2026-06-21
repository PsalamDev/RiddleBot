const content = {
  school: {
    jokes: [
      "Why did the student eat his homework? Because the teacher said it was a piece of cake!",
      "Why was the math book sad? Because it had too many problems.",
      "Why did the teacher wear sunglasses? Because her students were so bright!"
    ],
    riddles: [
      "What has many keys but can't open a single lock? A piano.",
      "What kind of school do surfers attend? Boarding school.",
      "What can you find in the middle of a classroom? The letter 's'."
    ]
  },

  food: {
    jokes: [
      "Why did the tomato blush? Because it saw the salad dressing!",
      "Why don't eggs tell jokes? They'd crack each other up.",
      "What did the burger name its baby? Patty!"
    ],
    riddles: [
      "I'm orange and sound like a parrot. What am I? A carrot.",
      "What food is always late? Choco-late.",
      "What kind of room has no doors or windows? A mushroom."
    ]
  },

  sports: {
    jokes: [
      "Why was the football team always cool? Because they had lots of fans!",
      "Why can't basketball players go on vacation? Because they get called for traveling.",
      "Why did the golfer bring two pairs of pants? In case he got a hole in one."
    ],
    riddles: [
      "What kind of ball doesn't bounce? A snowball.",
      "What sport is always in a hurry? Racing.",
      "What runs around a field but never moves? A fence."
    ]
  },

  tech: {
    jokes: [
      "Why do programmers prefer dark mode? Because light attracts bugs.",
      "Why did the computer catch a cold? It left its Windows open.",
      "Why was the smartphone wearing glasses? It lost its contacts."
    ],
    riddles: [
      "I have keys but no locks. What am I? A keyboard.",
      "I store files but I'm not a cabinet. What am I? The cloud.",
      "What has a screen but cannot watch movies? A calculator."
    ]
  }
};

// Get elements
const categorySelect = document.getElementById("category");
const generateBtn = document.getElementById("generate-btn");
const jokeText = document.getElementById("joke-text");
const riddleText = document.getElementById("riddle-text");

const funnyBtn = document.getElementById("funny-btn");
const notFunnyBtn = document.getElementById("not-funny-btn");

// Rating counters
let funnyCount = 0;
let notFunnyCount = 0;

// Generate joke and riddle
generateBtn.addEventListener("click", () => {
  const category = categorySelect.value;

  const jokes = content[category].jokes;
  const riddles = content[category].riddles;

  const randomJoke =
    jokes[Math.floor(Math.random() * jokes.length)];

  const randomRiddle =
    riddles[Math.floor(Math.random() * riddles.length)];

  jokeText.textContent = randomJoke;
  riddleText.textContent = randomRiddle;
});

const ratingResult = document.getElementById("rating-result");

funnyBtn.addEventListener("click", () => {
  funnyCount++;
  ratingResult.textContent =
    `😂 Funny: ${funnyCount} | 😐 Not Funny: ${notFunnyCount}`;
});

notFunnyBtn.addEventListener("click", () => {
  notFunnyCount++;
  ratingResult.textContent =
    `😂 Funny: ${funnyCount} | 😐 Not Funny: ${notFunnyCount}`;
});