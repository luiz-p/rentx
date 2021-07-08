import React from 'react';

import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import ArrowSvg from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import S from './styles';

export function Scheduling() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Header>
        <StatusBar barStyle="light-content" />

        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <S.Title>
          Escolha uma{'\n'}
          data de início e{'\n'}
          fim do aluguel
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected={false}>18/06/2021</S.DateValue>
          </S.DateInfo>

          <ArrowSvg />

          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected={false}>18/06/2021</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>

      <S.Content></S.Content>

      <S.Footer>
        <Button title="Confirmar" />
      </S.Footer>
    </S.Container>
  );
}
