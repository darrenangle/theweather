import React, {ChangeEvent, useState} from 'react';

type LocationFormProps = {
  submit: (query: string) => void;
  loading: boolean;
};

const LocationForm = (props: LocationFormProps) => {
  const {submit, loading} = props;
  const [query, setQuery] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setButtonDisabled(event.target.value === '' ?? true);
    setQuery(event.target.value);
  };
  const handleSubmit = () => {
    setButtonDisabled(true);
    submit(query);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Location"
        value={query}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} disabled={buttonDisabled ?? loading}>
        Submit
      </button>
    </>
  );
};

export default LocationForm;
