import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import debounce from '../../helpers/debounce';
import styled from 'styled-components';

export type LocationFormProps = {
  submit: (query: string) => void;
  loading: boolean;
};

const places = [
  'Seattle',
  'Chicago',
  'Kailua',
  'Boise',
  'El Paso',
  'Guam',
  'Brooklyn',
  'Haiti',
  'Sweden',
];

const LocationForm = (props: LocationFormProps) => {
  const {submit, loading} = props;
  const [initial, setInitial] = useState(false);
  const [query, setQuery] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const textInput = useRef(null);

  useEffect(() => {
    if (initial === false) {
      submit(places[Math.floor(Math.random() * places.length)]);
      setInitial(true);
    }
  }, [initial]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setButtonDisabled(!event.target.value);
    setQuery(event.target.value);
  };

  const handleClick = debounce(() => {
    submit(query);
    setButtonDisabled(true);
  }, 500);

  const handleKeydown = debounce((event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      submit(query);
      setButtonDisabled(true);
      ((textInput.current as unknown) as HTMLInputElement)?.blur();
    }
  }, 500);

  return (
    <Wrapper>
      <Input
        ref={textInput}
        data-testid="location-input"
        type="text"
        placeholder="Enter City or Zip or Address"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeydown}
      />
      <Button
        data-testid="location-submit-button"
        onClick={handleClick}
        disabled={buttonDisabled || loading}
      >
        search
      </Button>
    </Wrapper>
  );
};

export default LocationForm;

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 30px;
  left: 30px;
  display: flex;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${props => props.theme.contrastDark};
  font-family: 'Hatton', serif;
  letter-spacing: 1px;
  height: 40px;
  background: none;
  padding-left: 5px;
  width: 210px;
  color: ${props => props.theme.contrastDark};
  transition: all 0.5s;
  &:focus {
    outline: none;
    background: white;
  }
  &::placeholder {
    font-family: 'Helvetica Neue', sans-serif;
    font-style: italic;
    font-weight: 400;
    opacity: 0.7;
    margin-left: 5px;
    color: ${props => props.theme.contrastVeryDark};
  }
`;

Input.defaultProps = {
  theme: {
    contrastDark: '#85A3AC',
  },
};

const Button = styled.button`
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-style: italic;
  padding: 10px;
  margin-left: 12px;
  font-size: 16px;
  letter-spacing: 0.1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.contrastVeryDark};
  border: 1px solid ${props => props.theme.contrastDark};
  border-radius: 2px;
  transition: all 0.2s;
  background: ${props => props.theme.medBG};
  &:disabled {
    opacity: 0;
    visibility: hidden;
  }
`;

Button.defaultProps = {
  theme: {
    contrastDark: '#85A3AC',
    contraskVeryDark: '#57737B',
    medBG: '#D8ECF8',
  },
};
