import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;

export default {
  Container: styled.View`
    width: ${width / 3 - 64 / 3}px;
    min-height: 92px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_primary};

    padding: 16px 8px;
    margin-bottom: 8px;
  `,

  Name: styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(13)}px;
  `,
};
