import React from 'react';
import './Button.scss';

type PropsType = {
  CounterPlus?: () => void;
  resetCount?: () => void;
  youClassName?: string;
  name: string;
};

export default function Button(props: PropsType) {
  return (
    <button className={props.youClassName} onClick={props.CounterPlus || props.resetCount}>
      {props.name}
    </button>
  );
}
