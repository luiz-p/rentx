import React from 'react';

import { BackButton } from '../../components/BackButton';
import S from './styles';

export function CarDetails() {
  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => {}} />
      </S.Header>
    </S.Container>
  );
}
