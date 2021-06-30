import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface IImageIndex {
  active: boolean;
}

export default {
  Container: styled.View`
    width: 100%;
  `,

  ImageIndexes: styled.View`
    flex-direction: row;
    align-self: flex-end;
    padding-right: 24px;
  `,

  ImageIndex: styled.View<IImageIndex>`
    width: 6px;
    height: 6px;

    background-color: ${({ theme, active }) =>
      active ? theme.colors.title : theme.colors.shape};

    margin-left: 8px;
    border-radius: 3px;
  `,

  CarImageWrapper: styled.View`
    width: ${Dimensions.get('window').width}px;
    height: 132px;

    justify-content: center;
    align-items: center;
  `,

  CarImage: styled.Image`
    width: 280px;
    height: 132px;
  `,
};
