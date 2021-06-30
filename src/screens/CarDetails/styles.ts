import { getStatusBarHeight } from 'react-native-iphone-x-helper';
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
};
