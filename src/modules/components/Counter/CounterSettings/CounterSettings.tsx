import React, { useState, ChangeEvent } from 'react';
import CounterSettingsButton from '../CounterSettingsButton/CounterSettingsButton';
import './CounterSettings.scss';

type CountSettingsProps = {
  count: number | undefined;
  maxCounter: number;
  maxValueSet: (number: number) => void;
  startValueSet: (number: number) => void;
  startValue: number;
};

export default function CounterSettings(props: CountSettingsProps) {
  let [maxValue, setMaxValue] = useState<number>(props.maxCounter);
  let [startValue, setStartValue] = useState<number>(props.startValue);
  let [error, setError] = useState<null | string>(null);
  let [errorStart, setErrorStart] = useState<null | string>(null);

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) < 0) {
      setError('Minimum Must 1');
    } else {
      setMaxValue(parseInt(e.target.value));
      setError(null);
    }
  };

  const onClickButtonHandler = () => {
    props.maxValueSet(maxValue);
    props.startValueSet(startValue);
  };

  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) < maxValue) {
      setStartValue(parseInt(e.target.value));
      setErrorStart(null);
    } else {
      setErrorStart('min "max value -1"');
    }
  };

  return (
    <>
      <div className="counter__settings">
        <div className="counter__settings_title">
          {error ? (
            <span className="counter__settings-message">{error}</span>
          ) : (
            <span>max value: </span>
          )}
          <input
            type="number"
            className={error ? 'counter__settings_input-error' : 'counter__settings_input'}
            value={maxValue}
            onChange={onChangeMaxValue}
          />
        </div>
        <div className="counter__settings_title">
          {errorStart ? (
            <span className="counter__settings-message">{errorStart}</span>
          ) : (
            <span>start value: </span>
          )}

          <input
            type="number"
            className={errorStart ? 'counter__settings_input-error' : 'counter__settings_input'}
            value={startValue}
            onChange={onChangeStartValue}
          />
        </div>
      </div>
      <CounterSettingsButton onBtnSetting={onClickButtonHandler} />
    </>
  );
}
