import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export default {
  Container: styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
  `,

  Header: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 24px;
  `,

  CarImages: styled.View`
    margin-top: ${getStatusBarHeight() + 28}px;
  `,

  Content: styled.ScrollView.attrs({
    contentContainerStyle: {
      padding: 24,
      alignItems: 'center',
    },
    showsVerticalScrollIndicator: false,
  })``,

  Details: styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 38px;
  `,

  Description: styled.View``,

  Brand: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,

  Name: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(25)}px;
  `,

  Rent: styled.View``,

  Period: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,

  Price: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
    font-size: ${RFValue(25)}px;
  `,

  Accessories: styled.View`
    width: 100%;

    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    margin-top: 16px;
  `,

  Footer: styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    padding: 24px 24px ${getBottomSpace() + 24}px;
  `,

  RentalPeriod: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 40px;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.line};
    padding-bottom: 16px;
  `,

  CalendarIcon: styled.View`
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.colors.main};

    justify-content: center;
    align-items: center;
  `,

  DateInfo: styled.View``,

  DateTitle: styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,

  DateValue: styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
  `,

  RentalPrice: styled.View`
    width: 100%;
    margin-top: 16px;
  `,

  RentalPriceLabel: styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
  `,

  RentalPriceDetails: styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  ReantalPriceQuota: styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
  `,

  RentalPriceTotal: styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(24)}px;
  `,
};
