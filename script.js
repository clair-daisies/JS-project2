const quotes = [
  {
    name: "Albert Einstein",
    quote: "Imagination is more important than knowledge."
  },
  {
    name: "Estée Lauder",
    quote: "I never dreamed about success, I worked for it."
  },
  {
    name: "Walt Disney",
    quote: "The Way Get Started Is To Quit Talking And Begin Doing."
  },
  {
    name: "Winston Churchill",
    quote:
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."
  },
  {
    name: "Will Rogers",
    quote: "Don’t Let Yesterday Take Up Too Much Of Today."
  },
  {
    name: "Vince Lombardi",
    quote: "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."
  },
  {
    name: "Steve Jobs",
    quote:
      "f You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You."
  },
  {
    name: "Henry Ford",
    quote: "Whether You Think You Can Or Think You Can’t, You’re Right."
  },
  {
    name: "Franklin D. Roosevelt",
    quote: "When you reach the end of your rope, tie a knot in it and hang on."
  },
  {
    name: "Margaret Mead",
    quote:
      "Always remember that you are absolutely unique. Just like everyone else"
  },
  {
    name: "Ralph Waldo Emerson",
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail."
  },
  {
    name: " Mark Twain",
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do."
  },
  {
    name: "Abraham Lincoln",
    quote:
      "I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down."
  },
  {
    name: "Leonardo Da Vinci",
    quote:
      "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."
  },
  {
    name: "Pablo Picasso",
    quote:
      "Only put off until tomorrow what you are willing to die having left undone."
  },
  {
    name: " Leo Tolstoy",
    quote: "If you want to be happy, be.quote number 3"
  },
  {
    name: "Thomas A. Edison",
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up"
  },
  {
    name: "Harriet Tubman",
    quote:
      "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world."
  },
  {
    name: "Napoleon Hill",
    quote:
      "The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors."
  },
  {
    name: "Thomas A. Edison",
    quote:
      "The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense."
  },
  {
    name: " Ernest Hemingway",
    quote: "In order to write about life first you must live it."
  }
];

const quoteBtn = document.querySelector("#quote-btn");
const quoteAuthor = document.querySelector("#quote-author");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);
function displayQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[random].name;
  quote.innerHTML = quotes[random].quote;
}
