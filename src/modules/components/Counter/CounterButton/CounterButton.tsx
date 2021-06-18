import Button from '../../Button/Button';
import './CounterButton.scss';

type PropsType = {
  CounterPlus: () => void;
  resetCount: () => void;
  count: number;
};

export default function CounterButton(props: PropsType) {
  return (
    <div className="counter__button">
      <Button
        name={'INC'}
        CounterPlus={props.CounterPlus}
        youClassName={props.count < 5 ? 'button' : 'button__not-active'}
      />
      <Button
        name={'RESET'}
        resetCount={props.resetCount}
        youClassName={props.count !== 0 ? 'button' : 'button__not-active'}
      />
    </div>
  );
}
