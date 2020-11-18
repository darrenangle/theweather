import React from 'react';
import {render} from '@testing-library/react';
import LocationForm, {LocationFormProps} from './LocationForm';

describe('LocationForm', () => {
  function renderLocationForm(props: Partial<LocationFormProps> = {}) {
    const defaults: LocationFormProps = {
      submit: () => null,
      loading: false,
    };
    return render(<LocationForm {...defaults} {...props} />);
  }

  test('<LocationForm/> should display a blank input and disabled button on init', async () => {
    // Given
    const props = {loading: false};
    // When
    const {findByTestId} = renderLocationForm(props);

    // Then
    expect(
      ((await findByTestId('location-input')) as HTMLInputElement).value
    ).toBe('');
    expect(
      (await findByTestId('location-submit-button')).disabled
    ).toBeTruthy();
  });
});
