import React from 'react';
import {act, fireEvent, render} from '@testing-library/react';
import LocationForm, {LocationFormProps} from './LocationForm';

describe('LocationForm', () => {
  jest.useFakeTimers('modern');
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
      ((await findByTestId('location-submit-button')) as HTMLButtonElement)
        .disabled
    ).toBeTruthy();
  });

  test('<LocationForm/> should enable button on input', async () => {
    // Given
    const {findByTestId} = renderLocationForm();
    const input = await findByTestId('location-input');
    // When
    fireEvent.change(input, {target: {value: 'some text'}});
    // Then
    expect(
      ((await findByTestId('location-submit-button')) as HTMLButtonElement)
        .disabled
    ).toBeFalsy();
  });

  test('<LocationForm/> should disable the button when loading', async () => {
    // Given
    const props = {loading: true};
    // When
    const {findByTestId} = renderLocationForm(props);
    // Then
    expect(
      ((await findByTestId('location-submit-button')) as HTMLButtonElement)
        .disabled
    ).toBeTruthy();
  });

  test('<LocationForm/> should call submit with input', async () => {
    // Given
    const submit = jest.fn();
    const props = {submit, loading: false};
    const {findByTestId} = renderLocationForm(props);
    const input = await findByTestId('location-input');
    const button = (await findByTestId(
      'location-submit-button'
    )) as HTMLButtonElement;

    // When
    fireEvent.change(input, {target: {value: 'some text'}});
    act(() => {
      fireEvent.click(button);
      jest.advanceTimersByTime(500);
    });

    // Then
    expect(submit).toHaveBeenCalledWith('some text');
  });
});
