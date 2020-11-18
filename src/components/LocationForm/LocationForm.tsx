import React, {ChangeEvent, useEffect, useState} from 'react';
import debounce from '../../helpers/debounce';

export type LocationFormProps = {
  submit: (query: string) => void;
  loading: boolean;
};

const cities = [
  'Seattle',
  'Chicago',
  'Kailua',
  'Boise',
  'El Paso',
  'South Bend',
];

const LocationForm = (props: LocationFormProps) => {
  const {submit, loading} = props;
  const [initial, setInitial] = useState(false);
  const [query, setQuery] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    if (initial === false) {
      submit(cities[Math.floor(Math.random() * cities.length)]);
      setInitial(true);
    }
  }, [initial]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setButtonDisabled(!event.target.value);
    setQuery(event.target.value);
  };

  return (
    <>
      <input
        data-testid="location-input"
        type="text"
        placeholder="Enter Location"
        value={query}
        onChange={handleChange}
      />
      <button
        data-testid="location-submit-button"
        onClick={debounce(() => submit(query), 500)}
        disabled={buttonDisabled || loading}
      >
        Submit
      </button>
    </>
  );
};

export default LocationForm;
