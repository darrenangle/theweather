import React, {ChangeEvent, useState} from 'react';

type LocationFormProps = {
  submit: (query: string) => void;
  loading: boolean;
};

function debounce(func: Function, duration: number) {
  let timeout: NodeJS.Timeout;
  const debouncedFunction = function (...args: any) {
    const effect = () => {
      clearTimeout(timeout);
      return func.apply(debouncedFunction, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(effect, duration);
  };
  return debouncedFunction;
}

const LocationForm = (props: LocationFormProps) => {
  const {submit, loading} = props;
  const [query, setQuery] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setButtonDisabled(event.target.value === '' ?? true);
    setQuery(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Location"
        value={query}
        onChange={handleChange}
      />
      <button
        onClick={debounce(() => submit(query), 500)}
        disabled={buttonDisabled || loading}
      >
        Submit
      </button>
    </>
  );
};

export default LocationForm;
