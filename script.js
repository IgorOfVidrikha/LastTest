const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateQuoteButton = document.getElementById('generate-quote-button');

const quotes = [
  {
    quote: 'Живи так, как будто ты умрешь завтра. Учись так, как будто ты будешь жить вечно.',
    author: 'Махатма Ганди'
  },
  {
    quote: 'Самое главное в жизни — это не то, что с нами происходит, а то, как мы на это реагируем.',
    author: 'Опра Уинфри'
  },
  {
    quote: 'Не бойся потерпеть неудачу. Бойся не попробовать.',
    author: 'Мишель Обама'
  },
  {
    quote: 'Жизнь — это не проблема, которую нужно решить, а дар, который нужно принять.',
    author: 'Джек Керуак'
  },
  {
    quote: 'Единственный предел для наших достижений — это наши собственные сомнения.',
    author: 'Наполеон Хилл'
  },
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex].quote;
  const author = quotes[randomIndex].author;

  quoteElement.textContent = quote;
  authorElement.textContent = author;
}

generateQuoteButton.addEventListener('click', generateQuote);
