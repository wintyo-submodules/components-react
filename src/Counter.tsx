import { FC } from 'react';

export type CounterProps = {
  count: number;
  onChange: (newCount: number) => void;
};

export const Counter: FC<CounterProps> = (props) => {
  return (
    <div style={{ display: 'flex' }}>
      <button
        onClick={() => {
          props.onChange(props.count - 1);
        }}
      >
        -
      </button>
      <div style={{ padding: '0 8px' }}>{props.count}</div>
      <button
        onClick={() => {
          props.onChange(props.count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
