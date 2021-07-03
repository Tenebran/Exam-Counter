import React from 'react';
import './Button.scss';

type PropsType = {
  CounterPlus?: () => void;
  resetCount?: () => void;
  youClassName?: string;
  name: string;
  onBtnSetting?: () => void;
};

export default function Button(props: PropsType) {
  return (
    <button
      className={props.youClassName ? props.youClassName : 'button'}
      onClick={props.CounterPlus || props.resetCount || props.onBtnSetting}
    >
      {props.name}
    </button>
  );
}
