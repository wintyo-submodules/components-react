import { FC } from 'react';

export type TitleProps = {
  title: string;
};

export const Title: FC<TitleProps> = (props) => {
  return (
    <div
      style={{
        paddingBottom: '4px',
        fontWeight: 'bold',
        borderBottom: 'solid 1px grey',
      }}
    >
      {props.title}
    </div>
  );
};
