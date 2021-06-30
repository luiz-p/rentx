import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    width: 100%;
    height: 126px;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    margin-bottom: 16px;
  `,

  Details: styled.View``,

  Brand: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
  `,

  Name: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
  `,

  About: styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 16px;
  `,

  Rent: styled.View`
    margin-right: 24px;
  `,

  Period: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
  `,

  Price: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
    font-size: ${RFValue(15)}px;
  `,

  Type: styled.View``,

  CarImage: styled.Image`
    width: 167px;
    height: 85px;
  `,
};
