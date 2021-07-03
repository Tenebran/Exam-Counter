import React from 'react';
import Button from '../../Button/Button';
import './CounterSettingsButton.scss';

type ButtonProps = {
  onBtnSetting: () => void;
};

export default function CounterSettingsButton(props: ButtonProps) {
  return (
    <div className="counter__button">
      <Button name="set" onBtnSetting={props.onBtnSetting} />
    </div>
  );
}
