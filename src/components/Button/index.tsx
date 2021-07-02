import React from 'react';

import S from './styles';

interface IButton {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: IButton) {
  return (
    <S.Container {...rest} color={color!}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
