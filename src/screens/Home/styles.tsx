import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.background_primary};
  `,
  Title: styled.Text`
    font-size: 30px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
  `,
};
