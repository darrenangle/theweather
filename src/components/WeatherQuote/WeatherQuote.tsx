import React, {useState, useEffect} from 'react';
import quotes from './quotes';
import styled, {keyframes} from 'styled-components';

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

const WeatherQuote = () => {
  const [quote, setQuote] = useState(getRandomQuote());
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFaded(true);
      setTimeout(() => {
        setQuote(getRandomQuote());
        setFaded(false);
      }, 0.5 * 1000);
    }, 15 * 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <QuoteDiv faded={faded}>
      <p>{quote.quote}</p>
      <p> - {quote.author}</p>
    </QuoteDiv>
  );
};

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
  position: absolute;
  bottom: 9%;
  right: 5%;
  width: 60%;
  transition: visibility 0.5s linear;
  text-align: right;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-style: italic;
  line-height: 1.6rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  color: ${props => props.theme.contrastDark};
  animation: ${({faded}) => (faded ? fadeOut : fadeIn)} 0.5s linear;
  visibility: ${({faded}) => (faded ? 'hidden' : 'visible')};
`;

QuoteDiv.defaultProps = {
  theme: {
    contrastDark: '#85A3AC',
  },
};

export default WeatherQuote;
