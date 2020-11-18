import React, {useState, useEffect} from 'react';
import quotes from './quotes';
import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const QuoteDiv = styled.div<{faded: boolean}>`
  transition: visibility 0.5s linear;
  animation: ${({faded}) => (faded ? fadeOut : fadeIn)} 0.5s linear;
  visibility: ${({faded}) => (faded ? 'hidden' : 'visible')};
`;

const WeatherQuote = () => {
  const [quote, setQuote] = useState({
    quote:
      "Don't knock the weather. If it didn't change once in a while, nine out of ten people couldn't start a conversation.",
    author: 'Kim Hubbard',
  });
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFaded(true);
      setTimeout(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        setFaded(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <QuoteDiv faded={faded}>
      <p>{quote.quote}</p>
      <p> - {quote.author}</p>
    </QuoteDiv>
  );
};

export default WeatherQuote;
