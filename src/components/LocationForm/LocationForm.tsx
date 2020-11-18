import React, {ChangeEvent, useState} from 'react';
import debounce from '../../helpers/debounce';

type LocationFormProps = {
  submit: (query: string) => void;
  loading: boolean;
};

const LocationForm = (props: LocationFormProps) => {
  const {submit, loading} = props;
  const [query, setQuery] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setButtonDisabled(!event.target.value);
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
